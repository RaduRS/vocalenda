import WebSocket from 'ws';
import { supabaseAdmin } from '@/lib/supabase';
import { getCalendarService } from '@/lib/calendar';
import { generateConfirmationMessage } from '@/lib/sms-templates';
import { Json } from '@/lib/database.types';

interface DeepgramMessage {
  type: string;
  data?: string;
  function_name?: string;
  function_call_id?: string;
  parameters?: Record<string, unknown>;
  channel?: {
    alternatives?: Array<{ transcript: string }>;
  };
}

interface BusinessConfig {
  business: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    phone_number: string;
    email: string | null;
    address: string | null;
    timezone: string;
    business_hours: Json | null;
    status: string;
    settings: unknown;
    google_calendar_id: string | null;
    payment_methods: string[] | null;
    holidays: Json | null;
    ai_greeting: string | null;
    key_information: string | null;
    customer_notes_enabled: boolean | null;
    booking_policies: Json | null;
    created_at: string;
    updated_at: string;
  } | null;
  config: {
    id: string;
    business_id: string;
    ai_prompt: string | null;
    greeting_message: string | null;
    booking_rules: unknown;
    faq_data: unknown;
    integration_settings: unknown;
    created_at: string;
    updated_at: string;
  } | null;
  services: Array<{
    id: string;
    business_id: string;
    name: string;
    description: string | null;
    duration_minutes: number;
    price: number | null;
    currency: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }>;
}

interface CallContext {
  businessId: string;
  callSid: string;
  callerPhone: string;
  businessPhone: string;
  timezone: string;
}

// This will be handled by the WebSocket upgrade in Next.js
export async function GET() {
  return new Response('WebSocket endpoint - use WebSocket connection', {
    status: 426,
    headers: {
      'Upgrade': 'websocket',
    },
  });
}

// Load business configuration and context
async function loadBusinessConfig(businessId: string) {
  try {
    // Get business details
    const { data: business } = await supabaseAdmin
      .from('businesses')
      .select('*')
      .eq('id', businessId)
      .single();
      
    // Get business configuration
    const { data: config } = await supabaseAdmin
      .from('business_config')
      .select('*')
      .eq('business_id', businessId)
      .single();
      
    // Get services
    const { data: services } = await supabaseAdmin
      .from('services')
      .select('*')
      .eq('business_id', businessId)
      .eq('is_active', true);
    
    return {
      business,
      config,
      services: services || []
    };
  } catch (error) {
    console.error('Error loading business config:', error);
    return null;
  }
}

// Initialize Deepgram Voice Agent connection
async function initializeDeepgram(businessConfig: BusinessConfig, callContext: CallContext) {
  
  const deepgramWs = new WebSocket('wss://agent.deepgram.com/v1/agent/converse', {
    headers: {
      'Authorization': `Token ${process.env.DEEPGRAM_API_KEY}`
    }
  });
  
  deepgramWs.on('open', () => {
    console.log('Connected to Deepgram Voice Agent');
    
    // Send initial configuration
    const systemPrompt = generateSystemPrompt(businessConfig, callContext);
    
    const config = {
      type: 'SettingsConfiguration',
      audio: {
        input: {
          encoding: 'mulaw',
          sample_rate: 8000
        },
        output: {
          encoding: 'mulaw',
          sample_rate: 8000,
          container: 'none'
        }
      },
      agent: {
        listen: {
          model: 'nova-3'
        },
        think: {
          provider: {
            type: 'open_ai_llm',
            model: 'gpt-4o-mini'
          },
          instructions: systemPrompt,
          functions: getAvailableFunctions()
        },
        speak: {
          model: 'aura-thalia-en'
        }
      }
    };
    
    deepgramWs.send(JSON.stringify(config));
  });
  
  return deepgramWs;
}

// Generate system prompt for the AI agent
function generateSystemPrompt(businessConfig: BusinessConfig, callContext: CallContext) {
  const business = businessConfig?.business;
  const services = businessConfig?.services || [];
  const customPrompt = businessConfig?.config?.ai_prompt;
  
  const servicesText = services.map((s) => 
    `${s.name} (${s.duration_minutes} minutes, £${s.price})`
  ).join(', ');
  
  // Format business hours
  let businessHoursText = '';
  if (business?.business_hours) {
    try {
      const hours = business.business_hours as Record<string, { open: string; close: string; closed: boolean }>;
      const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      businessHoursText = daysOrder.map(day => {
        const dayHours = hours[day];
        if (dayHours?.closed) {
          return `${day.charAt(0).toUpperCase() + day.slice(1)}: Closed`;
        }
        return `${day.charAt(0).toUpperCase() + day.slice(1)}: ${dayHours?.open || 'N/A'} - ${dayHours?.close || 'N/A'}`;
      }).join('\n');
    } catch (e) {
      businessHoursText = 'Business hours not available';
    }
  }
  
  // Format payment methods
  const paymentMethodsText = business?.payment_methods?.length 
    ? business.payment_methods.map(method => {
        switch(method) {
          case 'cash': return 'Cash';
          case 'card': return 'Card';
          case 'apple_pay': return 'Apple Pay';
          case 'google_pay': return 'Google Pay';
          case 'bank_transfer': return 'Bank Transfer';
          default: return method;
        }
      }).join(', ')
    : 'Please ask about payment options';
  
  // Format holidays
  let holidaysText = '';
  if (business?.holidays) {
    try {
      const holidays = business.holidays as Array<{ date: string; description: string }>;
      if (holidays.length > 0) {
        holidaysText = holidays.map(h => `${h.date}: ${h.description}`).join('\n');
      }
    } catch (e) {
      // Ignore holiday parsing errors
    }
  }
  
  // Format booking policies
  let bookingPoliciesText = '';
  if (business?.booking_policies) {
    try {
      const policies = business.booking_policies as {
        cancellation_policy?: string;
        advance_booking_days?: number;
        min_advance_hours?: number;
        booking_confirmation_required?: boolean;
      };
      const policyLines = [];
      if (policies.cancellation_policy) policyLines.push(`Cancellation: ${policies.cancellation_policy}`);
      if (policies.advance_booking_days) policyLines.push(`Advance booking: Up to ${policies.advance_booking_days} days`);
      if (policies.min_advance_hours) policyLines.push(`Minimum notice: ${policies.min_advance_hours} hours`);
      bookingPoliciesText = policyLines.join('\n');
    } catch (e) {
      // Ignore policy parsing errors
    }
  }
  
  // Use AI greeting if available, otherwise use greeting_message
  const greeting = business?.ai_greeting || businessConfig?.config?.greeting_message;
  
  return `You are a professional and friendly receptionist for ${business?.name || 'this business'}.

${greeting ? `Greeting: ${greeting}\n\n` : ''}Business Information:
- Name: ${business?.name}
- Address: ${business?.address || 'Not specified'}
- Phone: ${business?.phone_number}
- Services: ${servicesText}
- Payment Methods: ${paymentMethodsText}

${businessHoursText ? `Business Hours:\n${businessHoursText}\n\n` : ''}${business?.key_information ? `Key Information: ${business.key_information}\n\n` : ''}${holidaysText ? `Holidays/Closures:\n${holidaysText}\n\n` : ''}${bookingPoliciesText ? `Booking Policies:\n${bookingPoliciesText}\n\n` : ''}Your role:
- Help customers book, reschedule, or cancel appointments
- Answer questions about services and availability
- Be warm, professional, and efficient
- Always confirm booking details before finalizing
- Use the caller's phone number (${callContext.callerPhone}) as their contact
- Inform customers about accepted payment methods when relevant

Important booking workflow:
1. After getting customer name + service interest → ASK for their preferred time
2. Check if preferred time is available using get_available_slots
3. If available, confirm and book directly. If not, suggest alternatives
4. Only show multiple time options if preferred time is unavailable

Booking strategy:
- Always ask "What time would you prefer?" first
- Never list all available slots unless customer asks
- Book immediately if preferred time is free
- Only suggest alternatives if preferred time is taken

General rules:
- Only book appointments for available time slots
- Confirm customer name and preferred service before booking
- Provide clear confirmation details after booking
- If you can't help with something, offer to take a message
- Respect business hours and holiday closures

${customPrompt ? `Additional instructions: ${customPrompt}` : ''}`;
}

// Define available functions for the AI agent
function getAvailableFunctions() {
  return [
    {
      name: 'get_available_slots',
      description: 'Get available appointment slots for a specific date and service',
      parameters: {
        type: 'object',
        properties: {
          date: {
            type: 'string',
            description: 'Date in YYYY-MM-DD format'
          },
          service_id: {
            type: 'string',
            description: 'Service ID'
          }
        },
        required: ['date']
      }
    },
    {
      name: 'create_booking',
      description: 'Create a new appointment booking',
      parameters: {
        type: 'object',
        properties: {
          customer_name: {
            type: 'string',
            description: 'Customer full name'
          },
          service_id: {
            type: 'string',
            description: 'Service ID'
          },
          date: {
            type: 'string',
            description: 'Appointment date in YYYY-MM-DD format'
          },
          time: {
            type: 'string',
            description: 'Appointment time in HH:MM format'
          }
        },
        required: ['customer_name', 'service_id', 'date', 'time']
      }
    },
    {
      name: 'get_services',
      description: 'Get list of available services',
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  ];
}

// Handle function calls from the AI agent
async function handleFunctionCall(deepgramWs: WebSocket, functionCallData: DeepgramMessage, businessConfig: BusinessConfig, callContext?: CallContext) {
  try {
    const { function_name, parameters } = functionCallData;
    let result: unknown;
    
    switch (function_name) {
      case 'get_services':
        result = businessConfig.services.map((s) => ({
          id: s.id,
          name: s.name,
          duration: s.duration_minutes,
          price: s.price,
          description: s.description
        }));
        break;
        
      case 'get_available_slots':
        result = await getAvailableSlots(businessConfig, parameters as { date: string; service_id?: string });
        break;
        
      case 'create_booking':
        const bookingParams = parameters as {
          customer_name: string;
          service_id: string;
          date: string;
          time: string;
          customer_phone?: string;
        };
        // Use callerPhone from callContext if customer_phone is not provided
        if (!bookingParams.customer_phone && callContext?.callerPhone) {
          bookingParams.customer_phone = callContext.callerPhone;
        }
        result = await createBooking(businessConfig, bookingParams);
        break;
        

        
      default:
        result = { error: 'Unknown function' };
    }
    
    // Send function response back to Deepgram
    const response = {
      type: 'FunctionCallResponse',
      id: functionCallData.function_call_id,
      name: functionCallData.function_name,
      content: JSON.stringify(result)
    };
    
    deepgramWs.send(JSON.stringify(response));
  } catch (error) {
    console.error('Error handling function call:', error);
    
    // Send error response
    const errorResponse = {
      type: 'FunctionCallResponse',
      id: functionCallData.function_call_id,
      name: functionCallData.function_name,
      content: JSON.stringify({ error: 'Function execution failed' })
    };
    
    deepgramWs.send(JSON.stringify(errorResponse));
  }
}

// WebSocket handler for Twilio Media Streams
async function handleWebSocket(ws: WebSocket) {
  console.log('New WebSocket connection established');
  
  let deepgramWs: WebSocket | null = null;
  let businessId: string | null = null;
  let callSid: string | null = null;
  let businessConfig: BusinessConfig | null = null;

  ws.on('message', async (message: Buffer) => {
    try {
      const data = JSON.parse(message.toString());
      
      switch (data.event) {
        case 'connected':
          console.log('Twilio connected:', data);
          break;
          
        case 'start':
          console.log('Media stream started:', data);
          
          // Extract parameters from Twilio
          const customParameters = data.start?.customParameters || {};
          businessId = customParameters.business_id;
          callSid = customParameters.call_sid;
          const callerPhone = customParameters.caller_phone;
          const businessPhone = customParameters.business_phone;
          const timezone = customParameters.timezone || 'UTC';
          
          if (!businessId) {
            console.error('No business_id provided');
            ws.close();
            return;
          }
          
          // Load business configuration
          businessConfig = await loadBusinessConfig(businessId);
          
          if (!businessConfig) {
            console.error('Failed to load business configuration');
            ws.close();
            return;
          }
          
          // Initialize Deepgram connection
          deepgramWs = await initializeDeepgram(businessConfig, {
            businessId,
            callSid: callSid || '',
            callerPhone,
            businessPhone,
            timezone: businessConfig.business?.timezone || timezone || 'UTC'
          });
          
          // Set up Deepgram message handling
          deepgramWs.on('message', (deepgramMessage: Buffer) => {
            const deepgramData = JSON.parse(deepgramMessage.toString());
            
            // Handle different types of Deepgram messages
            if (deepgramData.type === 'Results') {
              // Speech-to-text results
              console.log('Transcript:', deepgramData.channel?.alternatives?.[0]?.transcript);
            } else if (deepgramData.type === 'SpeechStarted') {
              // User started speaking
              console.log('User started speaking');
            } else if (deepgramData.type === 'UtteranceEnd') {
              // User finished speaking
              console.log('User finished speaking');
            } else if (deepgramData.type === 'TtsAudio') {
              // AI response audio - forward to Twilio
              const audioMessage = {
                event: 'media',
                streamSid: data.start?.streamSid,
                media: {
                  payload: deepgramData.data
                }
              };
              ws.send(JSON.stringify(audioMessage));
            } else if (deepgramData.type === 'FunctionCall') {
              // Handle tool calls
              if (deepgramWs && businessConfig) {
                const callContext = {
                  businessId: businessId!,
                  callSid: callSid || '',
                  callerPhone,
                  businessPhone,
                  timezone: businessConfig.business?.timezone || timezone || 'UTC'
                };
                handleFunctionCall(deepgramWs, deepgramData, businessConfig, callContext);
              }
            }
          });
          
          deepgramWs.on('error', (error: Error) => {
            console.error('Deepgram WebSocket error:', error);
          });
          
          deepgramWs.on('close', () => {
            console.log('Deepgram WebSocket closed');
          });
          
          break;
          
        case 'media':
          // Forward audio to Deepgram
          if (deepgramWs && deepgramWs.readyState === 1) {
            const audioData = {
              type: 'Audio',
              data: data.media.payload
            };
            deepgramWs.send(JSON.stringify(audioData));
          }
          break;
          
        case 'stop':
          console.log('Media stream stopped');
          if (deepgramWs) {
            deepgramWs.close();
          }
          break;
      }
    } catch (error) {
      console.error('Error processing WebSocket message:', error);
    }
  });
  
  ws.on('close', () => {
    console.log('Twilio WebSocket connection closed');
    if (deepgramWs) {
      deepgramWs.close();
    }
  });
  
  ws.on('error', (error: Error) => {
    console.error('Twilio WebSocket error:', error);
  });
}

// Get available slots for a specific date and service
async function getAvailableSlots(businessConfig: BusinessConfig, params: { date: string; service_id?: string }) {
  try {
    const { date, service_id } = params;
    const business = businessConfig.business;
    
    if (!business?.google_calendar_id) {
      return { error: 'Calendar not connected' };
    }

    // Get service details and duration
    let serviceId: string | undefined = service_id;
    let serviceDuration = 60; // default 60 minutes
    let service = null;
    
    if (serviceId) {
      // First try to find by ID (UUID)
      service = businessConfig.services.find(s => s.id === serviceId);
      
      // If not found by ID, try to find by name (case-insensitive)
      if (!service) {
        service = businessConfig.services.find(s => 
          s.name.toLowerCase() === serviceId!.toLowerCase()
        );
        if (service) {
          serviceId = service.id; // Use the actual UUID
          console.log(`Voice API - Found service by name '${service_id}' -> ID: ${serviceId}`);
        }
      }
      
      if (service) {
        serviceDuration = service.duration_minutes;
        console.log(`Voice API - Using service: ${service.name} (Duration: ${service.duration_minutes} minutes)`);
      } else {
        console.error(`Voice API - Service not found with ID/Name: ${serviceId}`);
        console.error(`Voice API - Available services:`, businessConfig.services.map(s => `${s.name} (${s.id})`));
        return { error: `Service not found: ${serviceId}. Available services: ${businessConfig.services.map(s => s.name).join(', ')}` };
      }
    } else if (businessConfig.services.length > 0) {
      // Use first available service as default
      service = businessConfig.services[0];
      serviceId = service.id;
      serviceDuration = service.duration_minutes;
      console.log(`Voice API - Using default service: ${service.name}`);
    }

    const calendarService = await getCalendarService(business.id);
    if (!calendarService) {
      return { error: 'Calendar service unavailable' };
    }

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.error(`Invalid date format: ${date}`);
      return { error: 'Invalid date format. Use YYYY-MM-DD' };
    }

    // Parse business hours with enhanced validation
    const businessHours = business.business_hours as Record<string, { open: string; close: string; closed?: boolean }>;
    if (!businessHours || typeof businessHours !== 'object') {
      console.error(`Invalid business hours format for business ${business.id}:`, businessHours);
      return { error: 'Business hours not configured' };
    }

    const requestDate = new Date(date + 'T00:00:00'); // Ensure proper date parsing
    if (isNaN(requestDate.getTime())) {
      console.error(`Invalid date: ${date}`);
      return { error: 'Invalid date provided' };
    }

    // UK format: Monday is first day of week (index 0)
    const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const jsDay = requestDate.getDay(); // JavaScript: 0=Sunday, 1=Monday, ..., 6=Saturday
    const ukDay = jsDay === 0 ? 6 : jsDay - 1; // Convert to UK format: 0=Monday, 1=Tuesday, ..., 6=Sunday
    const dayOfWeek = dayNames[ukDay];
    console.log(`Voice API - Date: ${date}, Day of week: ${dayOfWeek}, JS getDay(): ${jsDay}, UK day index: ${ukDay}`);
    
    const dayHours = businessHours[dayOfWeek];
    if (!dayHours || dayHours.closed === true || !dayHours.open || !dayHours.close) {
      console.log(`Voice API - Business closed on ${dayOfWeek}. Hours:`, dayHours);
      return { available_slots: [], message: `Business is closed on ${dayOfWeek}s` };
    }

    console.log(`Voice API - Business hours for ${dayOfWeek}:`, dayHours);

    const availableSlots = await calendarService.getAvailableSlots(
      business.google_calendar_id,
      requestDate,
      serviceDuration,
      { start: dayHours.open, end: dayHours.close },
      business.timezone
    );

    const formattedSlots = availableSlots.map(slot => 
      slot.start.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: business.timezone
      })
    );

    return { available_slots: formattedSlots };
  } catch (error) {
    console.error('Error getting available slots:', error);
    return { error: 'Failed to get available slots' };
  }
}

// Create a booking
async function createBooking(businessConfig: BusinessConfig, params: {
  customer_name: string;
  service_id: string;
  date: string;
  time: string;
  customer_phone?: string;
}) {
  try {
    const { customer_name, service_id, date, time, customer_phone } = params;
    const business = businessConfig.business;
    
    if (!business?.google_calendar_id) {
      return { error: 'Calendar not connected' };
    }

    // Find the service
    let service = businessConfig.services.find(s => s.id === service_id);
    
    // If not found by ID, try to find by name (case-insensitive)
    if (!service) {
      service = businessConfig.services.find(s => 
        s.name.toLowerCase() === service_id.toLowerCase()
      );
      if (service) {
        console.log(`Voice API - Booking - Found service by name '${service_id}' -> ID: ${service.id}`);
      }
    }
    
    if (!service) {
      console.error(`Voice API - Booking - Service not found with ID/Name: ${service_id}`);
      console.error(`Voice API - Available services:`, businessConfig.services.map(s => `${s.name} (${s.id})`));
      return { error: `Service not found: ${service_id}. Available services: ${businessConfig.services.map(s => s.name).join(', ')}` };
    }
    
    console.log(`Voice API - Booking - Using service: ${service.name} (Duration: ${service.duration_minutes} minutes)`);

    // Parse date and time in business timezone format
    const appointmentDateTime = `${date}T${time}:00`;
    const appointmentDate = new Date(`${appointmentDateTime}Z`); // For availability check
    const endTime = new Date(appointmentDate.getTime() + service.duration_minutes * 60000);
    
    // Create timezone-aware datetime strings for calendar
    const startTimeForCalendar = `${appointmentDateTime}.000`;
    const endTimeForCalendar = new Date(appointmentDate.getTime() + service.duration_minutes * 60000).toISOString().slice(0, 19) + '.000';

    const calendarService = await getCalendarService(business.id);
    if (!calendarService) {
      return { error: 'Calendar service unavailable' };
    }

    // Check if slot is still available
    const isAvailable = await calendarService.isTimeSlotAvailable(
      business.google_calendar_id,
      appointmentDate,
      endTime,
      business.timezone
    );

    if (!isAvailable) {
      return { error: 'Time slot is no longer available' };
    }

    // Create customer record - use caller's phone as primary source
    const phoneToUse = customer_phone || 'Unknown';
    const nameParts = customer_name.trim().split(' ');
    const firstName = nameParts[0] || customer_name;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    
    const { data: customer, error: customerError } = await supabaseAdmin
      .from('customers')
      .upsert({
        business_id: business.id,
        first_name: firstName,
        last_name: lastName,
        phone: phoneToUse
      }, {
        onConflict: 'business_id,phone'
      })
      .select('id')
      .single();

    if (customerError || !customer) {
      return { error: 'Failed to create customer record' };
    }

    // Create calendar event
    const calendarEventId = await calendarService.createEvent(
      business.google_calendar_id,
      {
        summary: `${service.name} - ${customer_name}`,
        description: `Service: ${service.name}\nCustomer: ${customer_name}\nPhone: ${phoneToUse}`,
        start: {
          dateTime: startTimeForCalendar,
          timeZone: business.timezone
        },
        end: {
          dateTime: endTimeForCalendar,
          timeZone: business.timezone
        }
      }
    );

    // Create appointment record
    const { data: appointment, error: appointmentError } = await supabaseAdmin
      .from('appointments')
      .insert({
        business_id: business.id,
        customer_id: customer.id,
        service_id: service.id,
        appointment_date: date,
        start_time: time,
        end_time: endTime.toTimeString().slice(0, 8),
        status: 'confirmed',
        google_calendar_event_id: calendarEventId
      })
      .select('id')
      .single();

    if (appointmentError || !appointment) {
      // Cleanup calendar event if appointment creation failed
      try {
        await calendarService.deleteEvent(business.google_calendar_id, calendarEventId);
      } catch (deleteError) {
        console.error('Failed to cleanup calendar event:', deleteError);
      }
      return { error: 'Failed to create appointment' };
    }

    // Send SMS confirmation
    try {
      const confirmationMessage = generateConfirmationMessage(
        {
          name: business.name,
          phone_number: business.phone_number,
          address: business.address
        },
        {
          customer_name,
          date,
          time,
          service: {
            name: service.name,
            duration_minutes: service.duration_minutes,
            price: service.price
          }
        }
      );

      // Send SMS via our API endpoint
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      await fetch(`${baseUrl}/api/sms/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          businessId: business.id,
          customerPhone: phoneToUse,
          message: confirmationMessage,
          type: 'confirmation',
          appointmentId: appointment.id
        })
      });
    } catch (smsError) {
      console.error('Failed to send SMS confirmation:', smsError);
      // Don't fail the booking if SMS fails
    }

    return {
      success: true,
      booking_id: appointment.id,
      message: `Appointment booked for ${customer_name} on ${date} at ${time} for ${service.name}. A confirmation SMS has been sent.`,
      details: {
        service: service.name,
        date,
        time,
        duration: service.duration_minutes
      }
    };
  } catch (error) {
    console.error('Error creating booking:', error);
    return { error: 'Failed to create booking' };
  }
}