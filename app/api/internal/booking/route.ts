import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getCalendarService } from "@/lib/calendar";
import { createTimezoneAwareISO, UK_TIMEZONE } from "@/lib/date-utils";
import { parseISO } from "date-fns";
import { getFillerPhrase, FillerContext } from "@/lib/conversation-utils";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Internal booking endpoint for server-to-server calls (no auth required)
export async function POST(request: NextRequest) {
  try {
    // Verify this is an internal call by checking for a secret header
    const internalSecret = request.headers.get("x-internal-secret");
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      businessId,
      serviceId,
      appointmentDate,
      startTime,
      endTime,
      customerName,
      customerPhone,
      notes,
      sessionId,
    } = await request.json();

    // Explicit validation for critical fields
    if (!businessId) {
      return NextResponse.json(
        { error: "Business ID is required" },
        { status: 400 }
      );
    }

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required and cannot be null" },
        { status: 400 }
      );
    }

    if (!appointmentDate || !startTime || !endTime || !customerName) {
      return NextResponse.json(
        { error: "Missing required booking information: date, time, and customer name are required" },
        { status: 400 }
      );
    }

    // Get business details
    const { data: business, error: businessError } = await supabase
      .from("businesses")
      .select("id, name, google_calendar_id, timezone")
      .eq("id", businessId)
      .single();

    if (businessError || !business) {
      return NextResponse.json(
        { error: "Business not found" },
        { status: 404 }
      );
    }

    if (!business.google_calendar_id) {
      return NextResponse.json(
        { error: "Google Calendar not connected" },
        { status: 400 }
      );
    }

    // Get service details
    const { data: service, error: serviceError } = await supabase
      .from("services")
      .select("name, price, currency, duration_minutes")
      .eq("id", serviceId)
      .eq("business_id", businessId)
      .single();

    if (serviceError || !service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Generate filler phrase for voice calls (Core Rule D)
    let fillerPhrase = '';
    if (customerName && sessionId) {
      const fillerContext: FillerContext = {
        customerName,
        serviceName: service.name,
        requestedDate: appointmentDate,
        requestedTime: startTime,
        operation: 'booking'
      };
      fillerPhrase = getFillerPhrase(fillerContext);
    }

    // Get calendar service
    const calendarService = await getCalendarService(businessId);
    if (!calendarService) {
      return NextResponse.json(
        { error: "Calendar service not available" },
        { status: 500 }
      );
    }

    // Check if slot is still available

    // Check availability by querying Google Calendar directly
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/calendar/availability`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-internal-secret': process.env.INTERNAL_API_SECRET!,
        },
        body: JSON.stringify({
          businessId: business.id,
          serviceId: serviceId,
          appointmentDate: appointmentDate,
          startTime: startTime,
          endTime: endTime,
        }),
      }
    );

    const availabilityResult = await response.json();
    const isAvailable = availabilityResult.available === true;

    if (!isAvailable) {
      return NextResponse.json(
        { error: "Time slot is no longer available" },
        { status: 409 }
      );
    }

    // Handle customer creation/retrieval
    let customerId: string | undefined;

    // Split customer name into first and last name more flexibly
    const nameParts = customerName.trim().split(" ");
    const firstName = nameParts[0] || customerName;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    // Use the provided phone number (which should be the caller's phone for voice bookings)
    // If no phone is provided, this is likely an error in the voice system
    if (!customerPhone) {
      console.error(
        "❌ No phone number provided for booking - this should not happen for voice bookings"
      );
      return NextResponse.json(
        { error: "Phone number is required for bookings" },
        { status: 400 }
      );
    }

    const phoneToUse = customerPhone;

    // Check if customer already exists
    console.log("🔍 Checking for existing customer:", {
      phone: phoneToUse,
      businessId,
    });
    const { data: existingCustomer, error: lookupError } = await supabase
      .from("customers")
      .select("id")
      .eq("phone", phoneToUse)
      .eq("business_id", businessId)
      .single();

    if (lookupError && lookupError.code !== "PGRST116") {
      console.error("❌ Error looking up customer:", lookupError);
      return NextResponse.json(
        { error: "Database error during customer lookup" },
        { status: 500 }
      );
    }

    if (existingCustomer) {
      console.log("✅ Found existing customer:", existingCustomer.id);
      customerId = existingCustomer.id;
    } else {
      // Create new customer
      console.log("👤 Creating new customer:", {
        businessId,
        firstName,
        lastName,
        phone: phoneToUse,
      });
      const { data: newCustomer, error: customerError } = await supabase
        .from("customers")
        .insert({
          business_id: businessId,
          first_name: firstName,
          last_name: lastName,
          phone: phoneToUse,
        })
        .select("id")
        .single();

      if (customerError) {
        console.error("❌ Error creating customer:", customerError);
        console.error("❌ Customer data attempted:", {
          businessId,
          firstName,
          lastName,
          phone: phoneToUse,
        });

        // Check if it's a unique constraint violation
        if (
          customerError.code === "23505" &&
          customerError.message?.includes("customers_business_id_phone_key")
        ) {
          console.log(
            "🔄 Unique constraint violation - attempting to find existing customer"
          );
          // Try to find the existing customer again
          const { data: retryCustomer } = await supabase
            .from("customers")
            .select("id")
            .eq("phone", phoneToUse)
            .eq("business_id", businessId)
            .single();

          if (retryCustomer) {
            console.log(
              "✅ Found existing customer after constraint violation:",
              retryCustomer.id
            );
            customerId = retryCustomer.id;
          } else {
            return NextResponse.json(
              { error: "Customer creation failed due to database constraint" },
              { status: 500 }
            );
          }
        } else {
          return NextResponse.json(
            { error: "Failed to create customer" },
            { status: 500 }
          );
        }
      }

      if (!newCustomer && !customerId) {
        console.error("❌ Customer creation returned no data");
        return NextResponse.json(
          { error: "Failed to create customer - no data returned" },
          { status: 500 }
        );
      }

      if (newCustomer) {
        console.log("✅ Created new customer:", newCustomer.id);
        customerId = newCustomer.id;
      }
    }

    // Create calendar event
    const eventDescription = `
Service: ${service.name}
Customer: ${customerName}
Phone: ${customerPhone || "Not provided"}
Price: ${
      service.price
        ? `${service.currency || "£"}${service.price}`
        : "Not specified"
    }
${notes ? `\nNotes: ${notes}` : ""}
    `.trim();

    // Convert date and time components to proper timezone-aware ISO strings for Google Calendar
    const startDateTimeString = `${appointmentDate}T${startTime}`;
    const endDateTimeString = `${appointmentDate}T${endTime}`;

    // Create timezone-aware datetime strings using UK standards
    const businessTimezone = business.timezone || UK_TIMEZONE;
    const startTimeForCalendar = createTimezoneAwareISO(
      parseISO(startDateTimeString),
      businessTimezone
    );
    const endTimeForCalendar = createTimezoneAwareISO(
      parseISO(endDateTimeString),
      businessTimezone
    );

    // Double availability check right before booking (Core Rule B: Race Condition Prevention)
    const doubleCheckResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/calendar/availability`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-internal-secret': process.env.INTERNAL_API_SECRET!,
        },
        body: JSON.stringify({
          businessId: business.id,
          serviceId: serviceId,
          appointmentDate: appointmentDate,
          startTime: startTime,
          endTime: endTime,
          customerName,
          sessionId,
        }),
      }
    );

    const doubleCheckResult = await doubleCheckResponse.json();
    const isStillAvailable = doubleCheckResult.available === true;

    if (!isStillAvailable) {
      return NextResponse.json(
        { 
          error: "Time slot was just booked by someone else. Please select another time.",
          fillerPhrase: fillerPhrase || undefined,
          sessionId: sessionId || undefined
        },
        { status: 409 }
      );
    }

    const calendarEventId = await calendarService.createEvent(
      business.google_calendar_id,
      {
        summary: `${service.name} - ${customerName}`,
        description: eventDescription,
        start: {
          dateTime: startTimeForCalendar,
          timeZone: businessTimezone,
        },
        end: {
          dateTime: endTimeForCalendar,
          timeZone: businessTimezone,
        },
      }
    );

    // Create appointment record
    // Use the provided date and time components directly
    const appointmentDateFormatted = appointmentDate;
    const startTimeFormatted = startTime;
    const endTimeFormatted = endTime;

    console.log("📅 Creating appointment with customer ID:", customerId);
    const appointmentData = {
      business_id: businessId,
      customer_id: customerId || null,
      service_id: serviceId,
      appointment_date: appointmentDateFormatted,
      start_time: startTimeFormatted,
      end_time: endTimeFormatted,
      status: "confirmed",
      notes,
      google_calendar_event_id: calendarEventId,
    };
    console.log("📅 Appointment data:", appointmentData);

    const { data: appointment, error: appointmentError } = await supabase
      .from("appointments")
      .insert(appointmentData)
      .select("id")
      .single();

    if (appointmentError || !appointment) {
      // Try to delete the calendar event if appointment creation failed
      try {
        await calendarService.deleteEvent(
          business.google_calendar_id,
          calendarEventId
        );
      } catch (deleteError) {
        console.error("Failed to cleanup calendar event:", deleteError);
      }

      return NextResponse.json(
        { error: "Failed to create appointment" },
        { status: 500 }
      );
    }

    // Add a small delay to ensure the database transaction is fully committed
    // This helps prevent race conditions with immediate availability checks
    await new Promise(resolve => setTimeout(resolve, 50));

    return NextResponse.json({
      success: true,
      appointmentId: appointment.id,
      calendarEventId,
      ...(fillerPhrase && { fillerPhrase }),
      ...(sessionId && { sessionId }),
    });
  } catch (error) {
    console.error("Error creating internal booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
