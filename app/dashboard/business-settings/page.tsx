"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
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
} from "lucide-react";
import {
  ComprehensiveBusinessData,
  BusinessHours,
  Service,
  StaffMember,
  Holiday,
  PaymentMethod,
  paymentMethodLabels,
} from "@/lib/types";

export default function BusinessSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
      sunday: { open: "09:00", close: "17:00", closed: true },
    },
    holidays: [],
    timezone: "UTC",
    services: [],
    staff_members: [],
    ai_configuration: {
      greeting: "Thank you for calling, how can I help you today?",
      response_mode: "flexible",
    },
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
  });

  const [activeTab, setActiveTab] = useState<
    "basic" | "hours" | "services" | "staff" | "holidays" | "ai"
  >("basic");

  useEffect(() => {
    fetchBusinessData();
  }, []);

  const fetchBusinessData = async () => {
    try {
      const response = await fetch("/api/business/comprehensive");
      if (response.ok) {
        const data = await response.json();
        setBusinessData(data);
      }
    } catch {
      toast.error("Failed to load business data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/business/comprehensive", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(businessData),
      });

      if (response.ok) {
        toast.success("Business settings updated successfully!");
      } else {
        throw new Error("Failed to update business settings");
      }
    } catch {
      toast.error("Failed to save business settings");
    } finally {
      setSaving(false);
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
      duration: 30,
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading business settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-brand-primary-1">
                Business Settings
              </h1>
              <p className="text-brand-primary-2">
                Manage your business information and preferences
              </p>
            </div>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90"
            >
              {saving ? (
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
            <select
              value={activeTab}
              onChange={(e) =>
                setActiveTab(
                  e.target.value as
                    | "basic"
                    | "hours"
                    | "services"
                    | "staff"
                    | "holidays"
                    | "ai"
                )
              }
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              <option value="basic">📋 Basic Info</option>
              <option value="hours">🕐 Operating Hours</option>
              <option value="services">✂️ Services</option>
              <option value="staff">👥 Staff</option>
              <option value="holidays">📅 Holidays</option>
              <option value="ai">🤖 AI & Policies</option>
            </select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:flex space-x-2 lg:space-x-8 overflow-x-auto">
            {[
              { id: "basic", label: "Basic Info", icon: Settings },
              { id: "hours", label: "Operating Hours", icon: Clock },
              { id: "services", label: "Services", icon: Edit3 },
              { id: "staff", label: "Staff", icon: Users },
              { id: "holidays", label: "Holidays", icon: Calendar },
              { id: "ai", label: "AI & Policies", icon: Bot },
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
                    )
                  }
                  className={`flex items-center space-x-1 lg:space-x-2 py-4 px-2 lg:px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
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
            <Card className="p-6 shadow-sm border-0 bg-white">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  Operating Hours
                </h3>
                <p className="text-gray-600">
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
                      className={`p-4 rounded-lg border transition-all duration-200 ${
                        !hours.closed
                          ? "bg-blue-50 border-blue-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
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

                        <div className="flex items-center space-x-3">
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
                                className="w-24 h-9 text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <span className="text-gray-500 text-sm">
                                to
                              </span>
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
                                className="w-24 h-9 text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </>
                          ) : (
                            <span className="text-sm text-gray-500 font-medium">
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
                          Duration
                        </Label>
                        <div className="relative">
                          <Input
                            type="number"
                            value={service.duration}
                            onChange={(e) =>
                              updateService(
                                index,
                                "duration",
                                parseInt(e.target.value)
                              )
                            }
                            placeholder="60"
                            className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 pr-12"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            min
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-3">
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Price
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            $
                          </span>
                          <Input
                            type="number"
                            step="0.01"
                            value={service.price}
                            onChange={(e) =>
                              updateService(
                                index,
                                "price",
                                parseFloat(e.target.value)
                              )
                            }
                            placeholder="50.00"
                            className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 pl-8"
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
                          className="h-10 w-10 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 group-hover:opacity-100 opacity-70 transition-opacity"
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
                  <p className="text-gray-600">Manage special dates when your business is closed</p>
                </div>
                <Button onClick={addHoliday} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 h-auto">
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
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">Description</Label>
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
                    <h4 className="text-lg font-medium text-gray-900 mb-2">No holidays added yet</h4>
                    <p className="text-gray-500 mb-6">Add special dates when your business will be closed</p>
                    <Button onClick={addHoliday} className="bg-orange-600 hover:bg-orange-700 text-white">
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
          <div className="space-y-8">
            <Card className="p-8 shadow-sm border-0 bg-white">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Bot className="w-5 h-5 text-purple-600" />
                    </div>
                    AI & Policies
                  </h3>
                <p className="text-gray-600">Configure payment methods, AI behavior, and booking policies</p>
              </div>
              
              <div className="space-y-8">
                {/* Payment Methods Section */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                      <Settings className="w-4 h-4 text-green-600" />
                    </div>
                    Payment Methods
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(paymentMethodLabels).map(([method, label]) => (
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
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* AI Instructions Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-blue-600" />
                    </div>
                    <Label className="text-lg font-semibold text-gray-900">
                      AI Instructions
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-10">Provide specific instructions for how the AI assistant should behave when handling customer calls</p>
                  <Textarea
                    value={businessData.ai_configuration.greeting}
                    onChange={(e) =>
                      handleInputChange("ai_configuration", {
                        ...businessData.ai_configuration,
                        greeting: e.target.value,
                      })
                    }
                    placeholder="e.g., Always be polite and professional, ask for customer preferences, suggest popular services..."
                    className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 ml-10 resize-none"
                    rows={5}
                  />
                </div>

                {/* Booking Policies Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-amber-600" />
                    </div>
                    <Label className="text-lg font-semibold text-gray-900">
                      Booking Policies
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-10">Define your booking rules, cancellation terms, and customer policies</p>
                  <Textarea
                    value={businessData.booking_policies.cancellation_policy || ""}
                    onChange={(e) =>
                      handleInputChange("booking_policies", {
                        ...businessData.booking_policies,
                        cancellation_policy: e.target.value,
                      })
                    }
                    placeholder="e.g., 24-hour cancellation policy, 50% deposit required, no-show policy..."
                    className="min-h-[120px] border-gray-200 focus:border-amber-500 focus:ring-amber-500 ml-10 resize-none"
                    rows={5}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
