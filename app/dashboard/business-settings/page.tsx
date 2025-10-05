"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { BusinessSettingsSkeleton } from "@/components/ui/skeleton-loading";
import { useBusinessSettings } from "@/hooks/useBusinessSettings";
import {
  Clock,
  MapPin,
  Users,
  Settings,
  Phone,
  Plus,
  Trash2,
  Calendar,
  Save,
  Edit3,
  FileText,
  Bot,
  MessageSquare,
  Play,
  Loader2,
  CreditCard,
} from "lucide-react";
import {
  ComprehensiveBusinessData,
  BusinessHours,
  Service,
  StaffMember,
  Holiday,
  PaymentMethod,
  paymentMethodLabels,
  defaultSMSConfiguration,
  validatePhoneNumber,
} from "@/lib/types";
import { previewVoice } from "@/lib/voice-preview";
import { SubscriptionTab } from "@/components/ui/subscription-tab";

export default function BusinessSettings() {
  const { businessData: hookBusinessData, isLoading, updateBusiness, isUpdating } = useBusinessSettings();
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [businessData, setBusinessData] = useState<ComprehensiveBusinessData>({
    name: "",
    business_type: "",
    address: "",
    payment_methods: [],
    business_hours: {
      monday: { open: "09:00", close: "17:00", closed: false },
      tuesday: { open: "09:00", close: "17:00", closed: false },
      wednesday: { open: "09:00", close: "17:00", closed: false },
      thursday: { open: "09:00", close: "17:00", closed: false },
      friday: { open: "09:00", close: "17:00", closed: false },
      saturday: { open: "09:00", close: "17:00", closed: false },
      sunday: { closed: true },
    },
    holidays: [],
    timezone: "UTC",
    services: [],
    staff_members: [],
    ai_configuration: {
      greeting: "Thank you for calling, how can I help you today?",
      response_mode: "flexible",
    },
    sms_configuration: defaultSMSConfiguration,
    customer_notes_enabled: true,
    booking_policies: {
      cancellation_policy:
        "Appointments can be cancelled up to 24 hours in advance",
      advance_booking_days: 30,
      min_advance_hours: 2,
      booking_confirmation_required: true,
    },
    slug: "",
    phone: "",
    email: "",
    website: "",
    bypass_phone_number: "",
  });

  const [activeTab, setActiveTab] = useState<
    "basic" | "hours" | "services" | "staff" | "holidays" | "ai" | "sms" | "subscription"
  >("basic");

  // State to track display values for price inputs
  const [priceDisplayValues, setPriceDisplayValues] = useState<{[key: number]: string}>({});

  // Update local state when hook data changes
  useEffect(() => {
    if (hookBusinessData) {
      setBusinessData(hookBusinessData as ComprehensiveBusinessData);
    }
  }, [hookBusinessData]);

  const handleSave = async () => {
    // Validate bypass phone number
    if (!businessData.bypass_phone_number || !businessData.bypass_phone_number.trim()) {
      toast.error("Human handoff phone number is required");
      return;
    }
    
    if (!validatePhoneNumber(businessData.bypass_phone_number)) {
      toast.error("Please enter a valid phone number (e.g., +1234567890)");
      return;
    }

    try {
      updateBusiness(businessData);
      toast.success("Business settings updated successfully!");
    } catch {
      toast.error("Failed to save business settings");
    }
  };

  const handleInputChange = (
    field: keyof ComprehensiveBusinessData,
    value: string | number | boolean | object
  ) => {
    setBusinessData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBusinessHoursChange = (
    day: keyof BusinessHours,
    field: "open" | "close" | "closed",
    value: string | boolean
  ) => {
    setBusinessData((prev) => ({
      ...prev,
      business_hours: {
        ...prev.business_hours,
        [day]: {
          ...prev.business_hours[day],
          [field]: value,
        },
      },
    }));
  };

  const addService = () => {
    const newService: Service = {
      name: "",
      duration: 15,
      price: 0,
    };
    setBusinessData((prev) => ({
      ...prev,
      services: [...prev.services, newService],
    }));
  };

  const updateService = (
    index: number,
    field: keyof Service,
    value: string | number
  ) => {
    setBusinessData((prev) => ({
      ...prev,
      services: prev.services.map((service, i) =>
        i === index ? { ...service, [field]: value } : service
      ),
    }));
  };

  const removeService = (index: number) => {
    setBusinessData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  const addStaffMember = () => {
    const newStaff: StaffMember = {
      name: "",
      email: "",
      phone: "",
    };
    setBusinessData((prev) => ({
      ...prev,
      staff_members: [...prev.staff_members, newStaff],
    }));
  };

  const updateStaffMember = (
    index: number,
    field: keyof StaffMember,
    value: string
  ) => {
    setBusinessData((prev) => ({
      ...prev,
      staff_members: prev.staff_members.map((staff, i) =>
        i === index ? { ...staff, [field]: value } : staff
      ),
    }));
  };

  const removeStaffMember = (index: number) => {
    if (businessData.staff_members.length <= 1) {
      toast.error("Cannot delete the last staff member. At least one staff member is required.");
      return;
    }
    setBusinessData((prev) => ({
      ...prev,
      staff_members: prev.staff_members.filter((_, i) => i !== index),
    }));
  };

  const addHoliday = () => {
    const newHoliday: Holiday = {
      date: "",
      description: "",
    };
    setBusinessData((prev) => ({
      ...prev,
      holidays: [...prev.holidays, newHoliday],
    }));
  };

  const updateHoliday = (
    index: number,
    field: keyof Holiday,
    value: string
  ) => {
    setBusinessData((prev) => ({
      ...prev,
      holidays: prev.holidays.map((holiday, i) =>
        i === index ? { ...holiday, [field]: value } : holiday
      ),
    }));
  };

  const removeHoliday = (index: number) => {
    setBusinessData((prev) => ({
      ...prev,
      holidays: prev.holidays.filter((_, i) => i !== index),
    }));
  };

  const togglePaymentMethod = (method: PaymentMethod) => {
    setBusinessData((prev) => ({
      ...prev,
      payment_methods: prev.payment_methods.includes(method)
        ? prev.payment_methods.filter((m) => m !== method)
        : [...prev.payment_methods, method],
    }));
  };

  if (isLoading) {
    return <BusinessSettingsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-brand-primary-1">
                Business Settings
              </h1>
              <p className="text-sm sm:text-base text-brand-primary-2">
                Manage your business information and preferences
              </p>
            </div>
            <Button
              onClick={handleSave}
              disabled={isUpdating}
              className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90 w-full sm:w-auto"
            >
              {isUpdating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="px-6">
          {/* Mobile Tab Selector */}
          <div className="sm:hidden py-4">
            <Select
              value={activeTab}
              onValueChange={(value) =>
                setActiveTab(
                  value as
                    | "basic"
                    | "hours"
                    | "services"
                    | "staff"
                    | "holidays"
                    | "ai"
                    | "sms"
                    | "subscription"
                )
              }
            >
              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900">
                <SelectValue>
                  <div className="flex items-center space-x-2">
                    {activeTab === "basic" && <><Settings className="w-4 h-4" /><span>Basic Info</span></>}
                    {activeTab === "hours" && <><Clock className="w-4 h-4" /><span>Operating Hours</span></>}
                    {activeTab === "services" && <><Edit3 className="w-4 h-4" /><span>Services</span></>}
                    {activeTab === "staff" && <><Users className="w-4 h-4" /><span>Staff</span></>}
                    {activeTab === "holidays" && <><Calendar className="w-4 h-4" /><span>Holidays</span></>}
                    {activeTab === "ai" && <><Bot className="w-4 h-4" /><span>AI & Policies</span></>}
                    {activeTab === "sms" && <><MessageSquare className="w-4 h-4" /><span>SMS Messages</span></>}
                    {activeTab === "subscription" && <><CreditCard className="w-4 h-4" /><span>Subscription</span></>}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Basic Info</span>
                  </div>
                </SelectItem>
                <SelectItem value="hours">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Operating Hours</span>
                  </div>
                </SelectItem>
                <SelectItem value="services">
                  <div className="flex items-center space-x-2">
                    <Edit3 className="w-4 h-4" />
                    <span>Services</span>
                  </div>
                </SelectItem>
                <SelectItem value="staff">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Staff</span>
                  </div>
                </SelectItem>
                <SelectItem value="holidays">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Holidays</span>
                  </div>
                </SelectItem>
                <SelectItem value="ai">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4" />
                    <span>AI & Policies</span>
                  </div>
                </SelectItem>
                <SelectItem value="sms">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>SMS Messages</span>
                  </div>
                </SelectItem>
                <SelectItem value="subscription">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Subscription</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
              {[
                { id: "basic", label: "Basic Info", icon: Settings },
                { id: "hours", label: "Operating Hours", icon: Clock },
                { id: "services", label: "Services", icon: Edit3 },
                { id: "staff", label: "Staff", icon: Users },
                { id: "holidays", label: "Holidays", icon: Calendar },
                { id: "ai", label: "AI & Policies", icon: Bot },
                { id: "sms", label: "SMS Messages", icon: MessageSquare },
                { id: "subscription", label: "Subscription", icon: CreditCard },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveTab(
                        tab.id as
                          | "basic"
                          | "hours"
                          | "services"
                          | "staff"
                          | "holidays"
                          | "ai"
                          | "sms"
                          | "subscription"
                      )
                    }
                    className={`flex items-center space-x-1 py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{tab.label}</span>
                    <span className="lg:hidden">{tab.label.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        {/* Basic Information Tab */}
        {activeTab === "basic" && (
          <div className="space-y-8">
            <Card className="p-8 shadow-sm border-0 bg-white">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  Basic Business Information
                </h3>
                <p className="text-gray-600">
                  Manage your core business details and contact information
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Business Name
                    </Label>
                    <Input
                      id="name"
                      value={businessData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your business name"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 mb-2 block flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={businessData.phone || "Admin will assign"}
                      readOnly
                      className="h-12 bg-gray-50 border-gray-200 cursor-not-allowed text-gray-500"
                      placeholder="Admin will assign"
                    />
                    <p className="text-xs text-gray-500 mt-2 flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      Contact support to update your phone number
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={businessData.email}
                      readOnly
                      className="h-12 bg-gray-50 border-gray-200 cursor-not-allowed text-gray-500"
                      placeholder="Email address from your account"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="address"
                      className="text-sm font-medium text-gray-700 mb-2 block flex items-center"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      Business Address
                    </Label>
                    <Textarea
                      id="address"
                      value={businessData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="Enter your complete business address"
                      rows={4}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>


                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Operating Hours Tab */}
        {activeTab === "hours" && (
          <div className="space-y-6">
            <Card className="p-4 sm:p-6 shadow-sm border-0 bg-white">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  Operating Hours
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Set your business hours for each day of the week
                </p>
              </div>

              <div className="space-y-3">
                {(
                  [
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                    "sunday",
                  ] as const
                ).map((day) => {
                  const hours = businessData.business_hours[day];
                  const isWeekend = day === "saturday" || day === "sunday";
                  return (
                    <div
                      key={day}
                      className={`p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                        !hours.closed
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={!hours.closed}
                            onChange={(e) =>
                              handleBusinessHoursChange(
                                day,
                                "closed",
                                !e.target.checked
                              )
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <Label className="capitalize text-sm font-medium text-gray-900 min-w-[80px] flex items-center">
                            {isWeekend && (
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            )}
                            {day}
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 ml-7 sm:ml-0">
                          {!hours.closed ? (
                            <>
                              <Input
                                type="time"
                                value={hours.open}
                                onChange={(e) =>
                                  handleBusinessHoursChange(
                                    day,
                                    "open",
                                    e.target.value
                                  )
                                }
                                className="w-20 sm:w-24 h-8 sm:h-9 text-xs sm:text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <span className="text-gray-500 text-xs sm:text-sm px-1">to</span>
                              <Input
                                type="time"
                                value={hours.close}
                                onChange={(e) =>
                                  handleBusinessHoursChange(
                                    day,
                                    "close",
                                    e.target.value
                                  )
                                }
                                className="w-20 sm:w-24 h-8 sm:h-9 text-xs sm:text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </>
                          ) : (
                            <span className="text-xs sm:text-sm text-gray-500 font-medium">
                              Closed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-8">
            <Card className="p-8 shadow-sm border-0 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Edit3 className="w-5 h-5 text-purple-600" />
                    </div>
                    Services & Pricing
                  </h3>
                  <p className="text-gray-600">
                    Manage your service offerings and pricing structure
                  </p>
                </div>
                <Button
                  onClick={addService}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 h-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Service
                </Button>
              </div>

              <div className="space-y-6">
                {businessData.services.map((service, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-5">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Service Name
                        </Label>
                        <Input
                          value={service.name}
                          onChange={(e) =>
                            updateService(index, "name", e.target.value)
                          }
                          placeholder="e.g., Haircut, Massage, Consultation"
                          className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>

                      <div className="lg:col-span-3">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-gray-500" />
                          Duration <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={service.duration.toString()}
                          onValueChange={(value) =>
                            updateService(index, "duration", parseInt(value))
                          }
                          required
                        >
                          <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500">
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

                      <div className="lg:col-span-3">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Price <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            £
                          </span>
                          <Input
                            type="text"
                            inputMode="decimal"
                            value={priceDisplayValues[index] !== undefined ? priceDisplayValues[index] : (service.price === 0 ? '' : service.price.toString())}
                            onChange={(e) => {
                              const value = e.target.value;
                              
                              // Allow empty input (user can clear everything)
                              if (value === '') {
                                setPriceDisplayValues(prev => ({ ...prev, [index]: '' }));
                                updateService(index, "price", 0);
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
                                    updateService(
                                      index,
                                      "price",
                                      !isNaN(numericValue) ? numericValue : 0
                                    );
                                  }
                                }
                              }
                            }}
                            onBlur={(e) => {
                              const value = e.target.value;
                              
                              // On blur, if empty or just a dot, set to 0
                              if (value === '' || value === '.') {
                                updateService(index, "price", 0);
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
                            placeholder="50.00"
                            className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 pl-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-1 flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeService(index)}
                          className="h-10 w-10 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 group-hover:opacity-100 opacity-70 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {businessData.services.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Edit3 className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No services added yet
                    </h4>
                    <p className="text-gray-500 mb-6">
                      Start by adding your first service offering
                    </p>
                    <Button
                      onClick={addService}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Service
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Staff Tab */}
        {activeTab === "staff" && (
          <div className="space-y-8">
            <Card className="p-8 shadow-sm border-0 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    Team Members
                  </h3>
                  <p className="text-gray-600">
                    Manage your team and staff member information
                  </p>
                </div>
                <Button
                  onClick={addStaffMember}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 h-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Team Member
                </Button>
              </div>

              <div className="space-y-6">
                {businessData.staff_members.map((staff, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-4">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                          <Users className="w-4 h-4 mr-1 text-gray-500" />
                          Full Name
                        </Label>
                        <Input
                          value={staff.name}
                          onChange={(e) =>
                            updateStaffMember(index, "name", e.target.value)
                          }
                          placeholder="e.g., John Smith"
                          className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="lg:col-span-3">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                          <Phone className="w-4 h-4 mr-1 text-gray-500" />
                          Phone Number
                        </Label>
                        <Input
                          value={staff.phone}
                          onChange={(e) =>
                            updateStaffMember(index, "phone", e.target.value)
                          }
                          placeholder="(555) 123-4567"
                          className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="lg:col-span-4">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                          <span className="w-4 h-4 mr-1 text-gray-500">@</span>
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          value={staff.email}
                          onChange={(e) =>
                            updateStaffMember(index, "email", e.target.value)
                          }
                          placeholder="john@example.com"
                          className="h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="lg:col-span-1 flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeStaffMember(index)}
                          disabled={businessData.staff_members.length <= 1}
                          className={`h-10 w-10 p-0 group-hover:opacity-100 opacity-70 transition-opacity ${
                            businessData.staff_members.length <= 1
                              ? "border-gray-200 text-gray-400 cursor-not-allowed"
                              : "border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                          }`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {businessData.staff_members.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No team members added yet
                    </h4>
                    <p className="text-gray-500 mb-6">
                      Start building your team by adding your first member
                    </p>
                    <Button
                      onClick={addStaffMember}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Team Member
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Holidays Tab */}
        {activeTab === "holidays" && (
          <div className="space-y-8">
            <Card className="p-8 shadow-sm border-0 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-5 h-5 text-orange-600" />
                    </div>
                    Holidays & Closures
                  </h3>
                  <p className="text-gray-600">
                    Manage special dates when your business is closed
                  </p>
                </div>
                <Button
                  onClick={addHoliday}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 h-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Holiday
                </Button>
              </div>

              <div className="space-y-6">
                {businessData.holidays.map((holiday, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-4">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                          Date
                        </Label>
                        <Input
                          type="date"
                          value={holiday.date}
                          onChange={(e) =>
                            updateHoliday(index, "date", e.target.value)
                          }
                          className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>

                      <div className="lg:col-span-7">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Description
                        </Label>
                        <Input
                          value={holiday.description}
                          onChange={(e) =>
                            updateHoliday(index, "description", e.target.value)
                          }
                          placeholder="e.g., Christmas Day, New Year's Day"
                          className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>

                      <div className="lg:col-span-1 flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeHoliday(index)}
                          className="h-10 w-10 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 group-hover:opacity-100 opacity-70 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {businessData.holidays.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No holidays added yet
                    </h4>
                    <p className="text-gray-500 mb-6">
                      Add special dates when your business will be closed
                    </p>
                    <Button
                      onClick={addHoliday}
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Holiday
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* AI & Policies Tab */}
        {activeTab === "ai" && (
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-sm border-0 bg-white">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  AI & Policies
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Configure payment methods, AI behavior, and booking policies
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* Payment Methods Section */}
                <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                      <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    Payment Methods
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {Object.entries(paymentMethodLabels).map(
                      ([method, label]) => (
                        <label
                          key={method}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={businessData.payment_methods.includes(
                              method as PaymentMethod
                            )}
                            onChange={() =>
                              togglePaymentMethod(method as PaymentMethod)
                            }
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 flex-shrink-0"
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {label}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <Label className="text-base sm:text-lg font-semibold text-gray-900">
                        AI Instructions
                      </Label>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      (businessData.ai_configuration.greeting || "").length > 100
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {(businessData.ai_configuration.greeting || "").length}/100
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Provide specific instructions for how the AI assistant
                    should behave when handling customer calls
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                    <strong>Available variables:</strong> {'{customer_name}'}, {'{business_name}'}
                  </p>
                  <Textarea
                    value={businessData.ai_configuration.greeting}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) {
                        handleInputChange("ai_configuration", {
                          ...businessData.ai_configuration,
                          greeting: e.target.value,
                        })
                      }
                    }}
                    placeholder="e.g., Hi {customer_name}! This is {business_name}. How can I help you today?"
                    className="min-h-[100px] sm:min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none text-sm"
                    rows={4}
                  />
                </div>
                

                {/* AI Voice Selection */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <Label className="text-base sm:text-lg font-semibold text-gray-900">
                      AI Voice
                    </Label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Choose the voice for your AI receptionist and preview each option
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                    <div className="flex-1">
                      <Select
                        value={businessData.ai_configuration.voice || 'aura-2-thalia-en'}
                        onValueChange={(value) => {
                          handleInputChange("ai_configuration", {
                            ...businessData.ai_configuration,
                            voice: value,
                          });
                        }}
                      >
                        <SelectTrigger className="w-full h-10 text-sm">
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
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 w-full sm:w-auto h-10"
                      disabled={isPreviewLoading}
                      onClick={async () => {
                        const currentVoice = businessData.ai_configuration.voice || 'aura-2-thalia-en';
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
                      <span className="text-sm">{isPreviewLoading ? 'Loading...' : 'Preview'}</span>
                    </Button>
                  </div>
                </div>

                {/* Booking Policies Section temporarily disabled */}
                {/**
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                    </div>
                    <Label className="text-base sm:text-lg font-semibold text-gray-900">
                      Booking Policies
                    </Label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Define your booking rules, cancellation terms, and customer
                    policies
                  </p>
                  <Textarea
                    value={
                      businessData.booking_policies.cancellation_policy || ""
                    }
                    onChange={(e) =>
                      handleInputChange("booking_policies", {
                        ...businessData.booking_policies,
                        cancellation_policy: e.target.value,
                      })
                    }
                    placeholder="e.g., 24-hour cancellation policy, 50% deposit required, no-show policy..."
                    className="min-h-[100px] sm:min-h-[120px] border-gray-200 focus:border-amber-500 focus:ring-amber-500 resize-none text-sm"
                    rows={4}
                  />
                </div>
                */}

                {/* Human Handoff Phone Number Section */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <Label className="text-base sm:text-lg font-semibold text-gray-900">
                      Human Handoff Phone Number
                    </Label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Phone number to connect customers to when they request to speak with a human or staff member during AI conversations
                  </p>
                  <Input
                    type="tel"
                    value={businessData.bypass_phone_number || ""}
                    onChange={(e) =>
                      handleInputChange("bypass_phone_number", e.target.value)
                    }
                    placeholder="+44 7123 456789"
                    className="h-10 text-sm border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SMS Messages Tab */}
        {activeTab === "sms" && (
          <div className="space-y-6">
            <Card className="p-8 bg-white shadow-sm border border-gray-200">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    SMS Messages
                  </h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessData.sms_configuration?.enabled || false}
                      onChange={(e) =>
                        handleInputChange("sms_configuration", {
                          ...businessData.sms_configuration,
                          enabled: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-600 mb-3">
                  Configure automated SMS messages for appointment confirmations, reminders, and cancellations
                </p>
                <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <strong>Available variables:</strong> {'{customer_name}'}, {'{business_name}'}, {'{date}'}, {'{time}'}, {'{service_name}'}, {'{duration}'}, {'{business_phone}'}
                </p>
              </div>

              <div className="space-y-6">

                {/* SMS Message Templates */}
                {businessData.sms_configuration?.enabled && (
                  <>
                    {/* Confirmation Message */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-3 h-3 text-green-600" />
                          </div>
                          <Label className="text-base font-semibold text-gray-900">
                            Confirmation Message
                          </Label>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          (businessData.sms_configuration?.confirmation_message || "").length > 320
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {(businessData.sms_configuration?.confirmation_message || "").length}/320
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Message sent when an appointment is confirmed.
                      </p>
                      <Textarea
                        value={businessData.sms_configuration?.confirmation_message || ""}
                        onChange={(e) => {
                          if (e.target.value.length <= 320) {
                            handleInputChange("sms_configuration", {
                              ...businessData.sms_configuration,
                              confirmation_message: e.target.value,
                            })
                          }
                        }}
                        placeholder="Hi {customer_name}, your appointment at {business_name} is confirmed for {date} at {time} for {service_name}. Duration: {duration} mins. Questions? Call {business_phone}"
                        className="min-h-[80px] border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                        rows={3}
                        maxLength={320}
                      />
                    </div>

                    {/* Reminder Message */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-3 h-3 text-amber-600" />
                          </div>
                          <Label className="text-base font-semibold text-gray-900">
                            Reminder Message
                          </Label>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Coming Soon</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          0/320
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Message sent as appointment reminder.
                      </p>
                      <Textarea
                        value={businessData.sms_configuration?.reminder_message || ""}
                        readOnly
                        placeholder="Coming soon - Reminder functionality will be available in a future update"
                        className="min-h-[80px] border-gray-200 bg-gray-50 text-gray-500 resize-none cursor-not-allowed"
                        rows={3}
                        maxLength={320}
                      />
                    </div>

                    {/* Cancellation Message */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-3 h-3 text-red-600" />
                          </div>
                          <Label className="text-base font-semibold text-gray-900">
                            Cancellation Message
                          </Label>
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Coming Soon</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          0/320
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Message sent when an appointment is cancelled.
                      </p>
                      <Textarea
                        value={businessData.sms_configuration?.cancellation_message || ""}
                        readOnly
                        placeholder="Coming soon - Cancellation functionality will be available in a future update"
                        className="min-h-[80px] border-gray-200 bg-gray-50 text-gray-500 resize-none cursor-not-allowed"
                        rows={3}
                        maxLength={320}
                      />
                    </div>


                  </>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Subscription Tab */}
        {activeTab === "subscription" && (
          <div className="space-y-6">
            <SubscriptionTab />
          </div>
        )}
      </div>
    </div>
  );
}
