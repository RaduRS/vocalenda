'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { Loader2, CheckCircle, Plus, Trash2, Clock, MapPin, Users, Settings, Phone, Calendar, X, Play } from 'lucide-react'
import { 
  ComprehensiveBusinessData, 
  setupWizardSteps, 
  businessTypeSuggestions, 
  paymentMethodLabels,
  PaymentMethod,
  BusinessHours,
  defaultBusinessHours,
  defaultAIConfiguration,
  defaultBookingPolicies,
  Service,
  StaffMember,
  Holiday,
  validateBusinessHours,
  validateService,
  validateStaffMember,
  validatePhoneNumber
} from '@/lib/types'
import { getCurrentUKDate, formatISODate } from '@/lib/date-utils'
import { previewVoice } from '@/lib/voice-preview'

export default function SetupWizard() {
  const { user } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    slug?: string;
    phone?: string;
    bypass_phone_number?: string;
  }>({});
  const [validating, setValidating] = useState<{
    slug?: boolean;
    phone?: boolean;
  }>({});
  
  // State to track display values for price inputs
  const [priceDisplayValues, setPriceDisplayValues] = useState<{[key: number]: string}>({});
  const [businessData, setBusinessData] = useState<Partial<ComprehensiveBusinessData>>({
    name: '',
    slug: '',
    phone: 'Admin will assign',
    email: '',
    address: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    business_type: '',
    payment_methods: [],
    business_hours: defaultBusinessHours,
    holidays: [],
    services: [{ name: '', duration: 30, price: 0 }],
    staff_members: [],
    ai_configuration: defaultAIConfiguration,
    customer_notes_enabled: true,
    booking_policies: defaultBookingPolicies,
    bypass_phone_number: ''
  });

  const currentStepConfig = setupWizardSteps.find(step => step.id === currentStep)!;

  // Update email when user data is available
  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      setBusinessData(prev => ({
        ...prev,
        email: user.primaryEmailAddress?.emailAddress || ''
      }));
    }
  }, [user]);

  // Check if user already has a business and redirect to dashboard
  useEffect(() => {
    const checkBusinessStatus = async () => {
      if (user) {
        try {
          const response = await fetch('/api/business/status');
          if (response.ok) {
            const data = await response.json();
            if (data.hasBusiness) {
              router.push('/dashboard');
              return;
            }
          }
        } catch (error) {
          console.error('Failed to check business status:', error);
        }
        setIsLoading(false);
      }
    };

    checkBusinessStatus();
  }, [user, router]);

  // Debounce validation checks
  const debounceValidation = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
  };

  const validateSlug = async (slug: string) => {
    if (!slug.trim()) {
      setValidationErrors(prev => ({ ...prev, slug: undefined }));
      return;
    }

    setValidating(prev => ({ ...prev, slug: true }));
    try {
      const response = await fetch('/api/business/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug })
      });
      
      if (response.status === 409) {
        const error = await response.json();
        setValidationErrors(prev => ({ ...prev, slug: error.message }));
      } else {
        setValidationErrors(prev => ({ ...prev, slug: undefined }));
      }
    } catch (error) {
      console.error('Slug validation failed:', error);
    } finally {
      setValidating(prev => ({ ...prev, slug: false }));
    }
  };

  // Phone validation removed - phone numbers are managed by admin

  const handleInputChange = (field: keyof ComprehensiveBusinessData, value: string | string[] | boolean | object) => {
    setBusinessData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from business name
    if (field === 'name' && typeof value === 'string') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setBusinessData(prev => ({ ...prev, slug }));
      
      // Validate the generated slug
      if (slug) {
        debounceValidation(() => validateSlug(slug), 500);
      }
    }
    
    // Validate slug when manually changed
    if (field === 'slug' && typeof value === 'string') {
      debounceValidation(() => validateSlug(value), 500);
    }
    
    // Phone number is read-only, no validation needed

    // Validate business hours
    if (field === 'business_hours') {
      const isValid = validateBusinessHours(value as BusinessHours);
      if (!isValid) {
        toast.error('Please check your business hours configuration');
      }
    }

    // Validate services
    if (field === 'services' && Array.isArray(value)) {
      value.forEach((service, index) => {
        const isValid = validateService(service);
        if (!isValid) {
          toast.error(`Service ${index + 1}: Please check name, duration, and price`);
        }
      });
    }

    // Validate staff members
    if (field === 'staff_members' && Array.isArray(value)) {
      value.forEach((staff, index) => {
        const isValid = validateStaffMember(staff);
        if (!isValid) {
          toast.error(`Staff Member ${index + 1}: Please check name and email`);
        }
      });
    }

    // Validate bypass phone number
    if (field === 'bypass_phone_number' && typeof value === 'string') {
      if (!value.trim()) {
        setValidationErrors(prev => ({ ...prev, bypass_phone_number: 'Human handoff phone number is required' }));
      } else if (!validatePhoneNumber(value)) {
        setValidationErrors(prev => ({ ...prev, bypass_phone_number: 'Please enter a valid phone number (e.g., +1234567890)' }));
      } else {
        setValidationErrors(prev => ({ ...prev, bypass_phone_number: undefined }));
      }
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    
    // Final validation before submission
    if (businessData.business_hours) {
      const businessHoursValid = validateBusinessHours(businessData.business_hours);
      if (!businessHoursValid) {
        toast.error('Please fix business hours configuration');
        return;
      }
    }

    const servicesValidation = (businessData.services || []).every(service => {
      const isValid = validateService(service);
      if (!isValid) {
        toast.error(`Please fix service "${service.name}": Check name, duration, and price`);
        return false;
      }
      return true;
    });
    if (!servicesValidation) return;

    const staffValidation = (businessData.staff_members || []).every(staff => {
      const isValid = validateStaffMember(staff);
      if (!isValid) {
        toast.error(`Please fix staff member "${staff.name}": Check name and email`);
        return false;
      }
      return true;
    });
    if (!staffValidation) return;
    
    setLoading(true);
    toast.loading('Creating your business...');
    
    try {
      const response = await fetch('/api/business/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkUserId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          ...businessData
        })
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Business created successfully! Redirecting to dashboard...');
        console.log('Business created:', result);
        
        // Invalidate dashboard cache to ensure fresh data
        queryClient.invalidateQueries({ queryKey: ['dashboard'] });
        
        // Use Next.js router for proper navigation
        setTimeout(() => {
          router.push(result.redirectTo || '/dashboard');
        }, 1500);
      } else {
        const error = await response.json();
        console.error('Failed to create business:', error);
        toast.error('Failed to create business. Please try again.');
      }
    } catch (error) {
      console.error('Setup failed:', error);
      toast.error('Failed to complete setup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isStepValid = () => {
    return currentStepConfig.isValid(businessData);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-2xl p-4 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Welcome to Vocalenda!</h1>
          <p className="text-sm sm:text-base text-gray-600 text-center">Let&apos;s set up your voice booking business</p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="flex space-x-2 sm:space-x-4">
              {setupWizardSteps.map((stepConfig) => (
                <div key={stepConfig.id} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                      stepConfig.id < currentStep 
                        ? 'bg-green-600 text-white' 
                        : stepConfig.id === currentStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {stepConfig.id < currentStep ? (
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      stepConfig.id
                    )}
                  </div>
                  <Badge 
                    variant={stepConfig.id < currentStep ? 'default' : stepConfig.id === currentStep ? 'secondary' : 'outline'}
                    className="mt-1 sm:mt-2 text-xs hidden sm:block"
                  >
                    {stepConfig.title}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-xl font-semibold break-words">{currentStepConfig.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">{currentStepConfig.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Business Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={businessData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your business name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="business_type">Business Type *</Label>
                <Select value={businessData.business_type || ''} onValueChange={(value) => handleInputChange('business_type', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypeSuggestions.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="slug">Business URL *</Label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    vocalenda.com/
                  </span>
                  <Input
                    id="slug"
                    type="text"
                    value={businessData.slug || ''}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="your-business"
                    className="rounded-l-none"
                  />
                </div>
                {validating.slug && (
                  <p className="mt-1 text-sm text-gray-500">Checking availability...</p>
                )}
                {validationErrors.slug && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.slug}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Business Address *
                </Label>
                <Textarea
                  id="address"
                  value={businessData.address || ''}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your business address"
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div>
                <Label>Payment Methods Accepted</Label>
                <div className="mt-2 space-y-2">
                  {Object.entries(paymentMethodLabels).map(([method, label]) => (
                    <div key={method} className="flex items-center space-x-2">
                      <Checkbox
                        id={method}
                        checked={businessData.payment_methods?.includes(method as PaymentMethod) || false}
                        onCheckedChange={(checked) => {
                           const current = businessData.payment_methods || [];
                           const updated = checked 
                             ? [...current, method as PaymentMethod]
                             : current.filter(m => m !== method as PaymentMethod);
                           handleInputChange('payment_methods', updated);
                         }}
                      />
                      <Label htmlFor={method} className="text-sm">{label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentStepConfig.title}</h2>
                <p className="text-gray-600 mt-1">{currentStepConfig.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Business Hours *</Label>
                <div className="mt-2 space-y-3">
                  {Object.entries(businessData.business_hours || defaultBusinessHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center space-x-3">
                      <div className="w-20">
                        <Label className="text-sm capitalize">{day}</Label>
                      </div>
                      <Checkbox
                        checked={!hours.closed}
                        onCheckedChange={(checked) => {
                          const updated = {
                            ...businessData.business_hours,
                            [day]: { ...hours, closed: !checked }
                          };
                          handleInputChange('business_hours', updated);
                        }}
                      />
                      <Label className="text-sm">Open</Label>
                      {!hours.closed && (
                        <>
                          <Input
                            type="time"
                            value={hours.open || '09:00'}
                            onChange={(e) => {
                              const updated = {
                                ...businessData.business_hours,
                                [day]: { ...hours, open: e.target.value }
                              };
                              handleInputChange('business_hours', updated);
                            }}
                            className="w-24"
                          />
                          <span className="text-sm text-gray-500">to</span>
                          <Input
                            type="time"
                            value={hours.close || '17:00'}
                            onChange={(e) => {
                              const updated = {
                                ...businessData.business_hours,
                                [day]: { ...hours, close: e.target.value }
                              };
                              handleInputChange('business_hours', updated);
                            }}
                            className="w-24"
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="timezone">Timezone *</Label>
                <Select value={businessData.timezone || ''} onValueChange={(value) => handleInputChange('timezone', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                    <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                    <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                    <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                    <SelectItem value="Europe/London">London (GMT)</SelectItem>
                    <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                    <SelectItem value="Asia/Tokyo">Tokyo (JST)</SelectItem>
                    <SelectItem value="Australia/Sydney">Sydney (AEST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Holidays & Closures
                  </Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const holidays = businessData.holidays || [];
                      const newHoliday: Holiday = { 
                        description: '', 
                        date: formatISODate(getCurrentUKDate())
                      };
                      handleInputChange('holidays', [...holidays, newHoliday]);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Holiday
                  </Button>
                </div>
                <div className="space-y-3">
                  {(businessData.holidays || []).map((holiday, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <Label htmlFor={`holiday-description-${index}`}>Holiday Description</Label>
                          <Input
                            id={`holiday-description-${index}`}
                            value={holiday.description}
                            onChange={(e) => {
                              const holidays = [...(businessData.holidays || [])];
                              holidays[index] = { ...holiday, description: e.target.value };
                              handleInputChange('holidays', holidays);
                            }}
                            placeholder="e.g., Christmas Day"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`holiday-date-${index}`}>Date</Label>
                          <Input
                            id={`holiday-date-${index}`}
                            type="date"
                            value={holiday.date}
                            onChange={(e) => {
                              const holidays = [...(businessData.holidays || [])];
                              holidays[index] = { ...holiday, date: e.target.value };
                              handleInputChange('holidays', holidays);
                            }}
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const holidays = [...(businessData.holidays || [])];
                              holidays.splice(index, 1);
                              handleInputChange('holidays', holidays);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                  {(!businessData.holidays || businessData.holidays.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>No holidays added yet</p>
                      <p className="text-sm">Add holidays when your business will be closed</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentStepConfig.title}</h2>
                <p className="text-gray-600 mt-1">{currentStepConfig.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label>Services *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const services = businessData.services || [];
                      const newService: Service = { name: '', duration: 15, price: 0 };
                      handleInputChange('services', [...services, newService]);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Service
                  </Button>
                </div>
                <div className="space-y-3">
                  {(businessData.services || []).map((service, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="md:col-span-2">
                          <Label htmlFor={`service-name-${index}`}>Service Name</Label>
                          <Input
                            id={`service-name-${index}`}
                            value={service.name}
                            onChange={(e) => {
                              const services = [...(businessData.services || [])];
                              services[index] = { ...service, name: e.target.value };
                              handleInputChange('services', services);
                            }}
                            placeholder="e.g., Haircut"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`service-duration-${index}`}>Duration <span className="text-red-500">*</span></Label>
                          <Select
                            value={service.duration.toString()}
                            onValueChange={(value) => {
                              const services = [...(businessData.services || [])];
                              services[index] = { ...service, duration: parseInt(value) };
                              handleInputChange('services', services);
                            }}
                            required
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 32 }, (_, i) => {
                                const minutes = (i + 1) * 15;
                                const hours = Math.floor(minutes / 60);
                                const remainingMinutes = minutes % 60;
                                const label = hours > 0 
                                  ? `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}m` : ''}`
                                  : `${minutes} min`;
                                return (
                                  <SelectItem key={minutes} value={minutes.toString()}>
                                    {label}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-end gap-2">
                          <div className="flex-1">
                            <Label htmlFor={`service-price-${index}`}>Price (£) <span className="text-red-500">*</span></Label>
                            <Input
                              id={`service-price-${index}`}
                              type="text"
                              inputMode="decimal"
                              value={priceDisplayValues[index] !== undefined ? priceDisplayValues[index] : (service.price === 0 ? '' : service.price.toString())}
                              onChange={(e) => {
                                const value = e.target.value;
                                const services = [...(businessData.services || [])];
                                
                                // Allow empty input (user can clear everything)
                                if (value === '') {
                                  setPriceDisplayValues(prev => ({ ...prev, [index]: '' }));
                                  services[index] = { ...service, price: 0 };
                                  handleInputChange('services', services);
                                  return;
                                }
                                
                                // Only allow numbers and one decimal point
                                if (/^[0-9]*\.?[0-9]*$/.test(value)) {
                                  // Prevent multiple decimal points
                                  const dotCount = (value.match(/\./g) || []).length;
                                  if (dotCount <= 1) {
                                    // Limit to 2 decimal places
                                    const parts = value.split('.');
                                    if (parts.length === 1 || parts[1].length <= 2) {
                                      // Update display value
                                      setPriceDisplayValues(prev => ({ ...prev, [index]: value }));
                                      
                                      // Update actual price value
                                      const numericValue = parseFloat(value);
                                      services[index] = { 
                                        ...service, 
                                        price: !isNaN(numericValue) ? numericValue : 0
                                      };
                                      handleInputChange('services', services);
                                    }
                                  }
                                }
                              }}
                              onBlur={(e) => {
                                const value = e.target.value;
                                const services = [...(businessData.services || [])];
                                
                                // On blur, if empty or just a dot, set to 0
                                if (value === '' || value === '.') {
                                  services[index] = { ...service, price: 0 };
                                  handleInputChange('services', services);
                                  setPriceDisplayValues(prev => ({ ...prev, [index]: '' }));
                                } else {
                                  // Clean up display value to match the actual price
                                  setPriceDisplayValues(prev => {
                                    const newState = { ...prev };
                                    delete newState[index];
                                    return newState;
                                  });
                                }
                              }}
                              className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              placeholder="0.00"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const services = [...(businessData.services || [])];
                              services.splice(index, 1);
                              handleInputChange('services', services);
                            }}
                            className="mb-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <Label>Staff Members</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const staff = businessData.staff_members || [];
                      const newStaff: StaffMember = { name: '', email: '' };
                      handleInputChange('staff_members', [...staff, newStaff]);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Staff Member
                  </Button>
                </div>
                <div className="space-y-3">
                  {(businessData.staff_members || []).length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p className="text-lg font-medium mb-2">No staff members added yet</p>
                      <p className="text-sm">You need at least one staff member to continue. Click &quot;Add Staff Member&quot; to get started.</p>
                    </div>
                  )}
                  {(businessData.staff_members || []).map((staff, index) => (
                    <Card key={index} className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <Label htmlFor={`staff-name-${index}`}>Name</Label>
                          <Input
                            id={`staff-name-${index}`}
                            value={staff.name}
                            onChange={(e) => {
                              const staffMembers = [...(businessData.staff_members || [])];
                              staffMembers[index] = { ...staff, name: e.target.value };
                              handleInputChange('staff_members', staffMembers);
                            }}
                            placeholder="Staff member name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`staff-email-${index}`}>Email</Label>
                          <Input
                            id={`staff-email-${index}`}
                            type="email"
                            value={staff.email}
                            onChange={(e) => {
                              const staffMembers = [...(businessData.staff_members || [])];
                              staffMembers[index] = { ...staff, email: e.target.value };
                              handleInputChange('staff_members', staffMembers);
                            }}
                            placeholder="staff@business.com"
                            className="mt-1"
                          />
                        </div>
                        <div className="flex items-end gap-2">
                           <div className="flex-1">
                             <Label htmlFor={`staff-phone-${index}`}>Phone</Label>
                             <Input
                               id={`staff-phone-${index}`}
                               type="tel"
                               value={staff.phone || ''}
                               onChange={(e) => {
                                 const staffMembers = [...(businessData.staff_members || [])];
                                 staffMembers[index] = { ...staff, phone: e.target.value };
                                 handleInputChange('staff_members', staffMembers);
                               }}
                               placeholder="+44 7123 456789"
                               className="mt-1"
                             />
                           </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const staffMembers = [...(businessData.staff_members || [])];
                              if (staffMembers.length <= 1) {
                                toast.error('You must have at least one staff member');
                                return;
                              }
                              staffMembers.splice(index, 1);
                              handleInputChange('staff_members', staffMembers);
                            }}
                            disabled={(businessData.staff_members || []).length <= 1}
                            className="mb-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentStepConfig.title}</h2>
                <p className="text-gray-600 mt-1">{currentStepConfig.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="ai-greeting">AI Greeting Message *</Label>
                <Textarea
                  id="ai-greeting"
                  value={businessData.ai_configuration?.greeting || ''}
                  onChange={(e) => {
                    const updated = {
                      ...businessData.ai_configuration,
                      greeting: e.target.value
                    };
                    handleInputChange('ai_configuration', updated);
                  }}
                  placeholder="Hello! I'm your AI assistant. How can I help you book an appointment today?"
                  className="mt-1"
                  rows={3}
                />
                <p className="text-sm text-gray-500 mt-1">This message will greet customers when they call</p>
              </div>
              
              <div>
                <Label htmlFor="ai-instructions">Key Information for AI *</Label>
                <Textarea
                  id="ai-instructions"
                  value={businessData.ai_configuration?.key_information || ''}
                  onChange={(e) => {
                    const updated = {
                      ...businessData.ai_configuration,
                      key_information: e.target.value
                    };
                    handleInputChange('ai_configuration', updated);
                  }}
                  placeholder="Important details about your business, services, policies, or special instructions for the AI..."
                  className="mt-1"
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-1">Provide context to help the AI assist customers effectively</p>
              </div>

              <div>
                <Label htmlFor="ai-voice">AI Voice *</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Select
                    value={businessData.ai_configuration?.voice || 'aura-2-thalia-en'}
                    onValueChange={(value) => {
                      const updated = {
                        ...businessData.ai_configuration,
                        voice: value
                      };
                      handleInputChange('ai_configuration', updated);
                    }}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aura-2-thalia-en">Thalia (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-asteria-en">Asteria (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-luna-en">Luna (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-athena-en">Athena (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-hera-en">Hera (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-aurora-en">Aurora (American, feminine)</SelectItem>
                      <SelectItem value="aura-2-orion-en">Orion (American, masculine)</SelectItem>
                      <SelectItem value="aura-2-arcas-en">Arcas (American, masculine)</SelectItem>
                      <SelectItem value="aura-2-apollo-en">Apollo (American, masculine)</SelectItem>
                      <SelectItem value="aura-2-orpheus-en">Orpheus (American, masculine)</SelectItem>
                      <SelectItem value="aura-2-zeus-en">Zeus (American, masculine)</SelectItem>
                      <SelectItem value="aura-2-draco-en">Draco (British, masculine)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                    disabled={isPreviewLoading}
                    onClick={async () => {
                      const currentVoice = businessData.ai_configuration?.voice || 'aura-2-thalia-en';
                      setIsPreviewLoading(true);
                      try {
                        await previewVoice(currentVoice);
                      } finally {
                        setIsPreviewLoading(false);
                      }
                    }}
                  >
                    {isPreviewLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span>{isPreviewLoading ? 'Loading...' : 'Preview'}</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Choose the voice for your AI receptionist and preview each option</p>
              </div>

              <div>
                <Label htmlFor="bypass-phone">Human Handoff Phone Number *</Label>
                <Input
                  id="bypass-phone"
                  type="tel"
                  value={businessData.bypass_phone_number || ''}
                  onChange={(e) => handleInputChange('bypass_phone_number', e.target.value)}
                  placeholder="+1234567890"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">Phone number to transfer calls when human assistance is needed</p>
                {validationErrors.bypass_phone_number && (
                  <p className="text-sm text-red-500 mt-1">{validationErrors.bypass_phone_number}</p>
                )}
              </div>

              <div>
                <Label>Booking Policies</Label>
                <div className="mt-2 space-y-3">
                  <div>
                    <Label htmlFor="min-advance">Minimum Advance Booking (hours)</Label>
                    <Input
                      id="min-advance"
                      type="number"
                      value={businessData.booking_policies?.min_advance_hours || 24}
                      onChange={(e) => {
                        const updated = {
                          ...businessData.booking_policies,
                          min_advance_hours: parseInt(e.target.value) || 24
                        };
                        handleInputChange('booking_policies', updated);
                      }}
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="booking-confirmation"
                      checked={businessData.booking_policies?.booking_confirmation_required || false}
                      onCheckedChange={(checked) => {
                        const updated = {
                          ...businessData.booking_policies,
                          booking_confirmation_required: checked as boolean
                        };
                        handleInputChange('booking_policies', updated);
                      }}
                    />
                    <Label htmlFor="booking-confirmation">Require booking confirmation</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentStepConfig.title}</h2>
                <p className="text-gray-600 mt-1">{currentStepConfig.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Business Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={businessData.phone || 'Admin will assign'}
                  readOnly
                  className="mt-1 bg-gray-50 cursor-not-allowed"
                  placeholder="Admin will assign"
                />
                <p className="text-sm text-gray-500 mt-1">Your Twilio phone number will be configured by our team</p>
              </div>
              
              <div>
                <Label htmlFor="email">Business Email</Label>
                <div className="mt-1 p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700">
                  {user?.primaryEmailAddress?.emailAddress}
                </div>
                <p className="text-sm text-gray-500 mt-1">This email will be used for Google Calendar integration</p>
              </div>

              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  type="url"
                  value={businessData.website || ''}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://yourbusiness.com"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">Optional: Your business website</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 space-y-3 sm:space-y-0">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            className="w-full sm:w-auto px-4 sm:px-6 order-2 sm:order-1"
          >
            Previous
          </Button>
          
          {currentStep < setupWizardSteps.length ? (
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!isStepValid()}
              className="w-full sm:w-auto px-4 sm:px-6 order-1 sm:order-2"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || loading}
              className="w-full sm:w-auto px-4 sm:px-6 order-1 sm:order-2"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="hidden sm:inline">Creating Business...</span>
                  <span className="sm:hidden">Creating...</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Complete Setup</span>
                  <span className="sm:hidden">Complete</span>
                </>
              )}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}