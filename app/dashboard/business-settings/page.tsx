'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Clock, 
  MapPin, 
  Users, 
  Settings, 
  Phone, 
  Plus, 
  Trash2, 
  Calendar, 
  X,
  ArrowLeft,
  Save,
  Edit3
} from 'lucide-react';
import { 
  ComprehensiveBusinessData, 
  BusinessHours, 
  Service, 
  StaffMember, 
  Holiday,
  PaymentMethod,
  paymentMethodLabels
} from '@/lib/types';

export default function BusinessSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [businessData, setBusinessData] = useState<ComprehensiveBusinessData>({
    name: '',
    business_type: '',
    address: '',
    payment_methods: [],
    business_hours: {
      monday: { open: '09:00', close: '17:00', closed: false },
      tuesday: { open: '09:00', close: '17:00', closed: false },
      wednesday: { open: '09:00', close: '17:00', closed: false },
      thursday: { open: '09:00', close: '17:00', closed: false },
      friday: { open: '09:00', close: '17:00', closed: false },
      saturday: { open: '09:00', close: '17:00', closed: false },
      sunday: { open: '09:00', close: '17:00', closed: true }
    },
    holidays: [],
    timezone: 'UTC',
    services: [],
    staff_members: [],
    ai_configuration: {
      greeting: 'Thank you for calling, how can I help you today?',
      response_mode: 'flexible'
    },
    customer_notes_enabled: true,
    booking_policies: {
      cancellation_policy: 'Appointments can be cancelled up to 24 hours in advance',
      advance_booking_days: 30,
      min_advance_hours: 2,
      booking_confirmation_required: true
    },
    slug: '',
    phone: '',
    email: '',
    website: ''
  });

  const [activeTab, setActiveTab] = useState<'basic' | 'hours' | 'services' | 'staff' | 'holidays' | 'ai'>('basic');

  useEffect(() => {
    fetchBusinessData();
  }, []);

  const fetchBusinessData = async () => {
    try {
      const response = await fetch('/api/business/comprehensive');
      if (response.ok) {
        const data = await response.json();
        setBusinessData(data);
      }
    } catch (error) {
      toast.error('Failed to load business data');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/business/comprehensive', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
      });

      if (response.ok) {
        toast.success('Business settings updated successfully!');
      } else {
        throw new Error('Failed to update business settings');
      }
    } catch (error) {
      toast.error('Failed to save business settings');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof ComprehensiveBusinessData, value: string | number | boolean | object) => {
    setBusinessData(prev => ({ ...prev, [field]: value }));
  };

  const handleBusinessHoursChange = (day: keyof BusinessHours, field: 'open' | 'close' | 'closed', value: string | boolean) => {
    setBusinessData(prev => ({
      ...prev,
      business_hours: {
        ...prev.business_hours,
        [day]: {
          ...prev.business_hours[day],
          [field]: value
        }
      }
    }));
  };

  const addService = () => {
    const newService: Service = {
      name: '',
      duration: 30,
      price: 0
    };
    setBusinessData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const updateService = (index: number, field: keyof Service, value: string | number) => {
    setBusinessData(prev => ({
      ...prev,
      services: prev.services.map((service, i) => 
        i === index ? { ...service, [field]: value } : service
      )
    }));
  };

  const removeService = (index: number) => {
    setBusinessData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const addStaffMember = () => {
    const newStaff: StaffMember = {
      name: '',
      email: '',
      phone: ''
    };
    setBusinessData(prev => ({
      ...prev,
      staff_members: [...prev.staff_members, newStaff]
    }));
  };

  const updateStaffMember = (index: number, field: keyof StaffMember, value: string) => {
    setBusinessData(prev => ({
      ...prev,
      staff_members: prev.staff_members.map((staff, i) => 
        i === index ? { ...staff, [field]: value } : staff
      )
    }));
  };

  const removeStaffMember = (index: number) => {
    setBusinessData(prev => ({
      ...prev,
      staff_members: prev.staff_members.filter((_, i) => i !== index)
    }));
  };

  const addHoliday = () => {
    const newHoliday: Holiday = {
      date: '',
      description: ''
    };
    setBusinessData(prev => ({
      ...prev,
      holidays: [...prev.holidays, newHoliday]
    }));
  };

  const updateHoliday = (index: number, field: keyof Holiday, value: string) => {
    setBusinessData(prev => ({
      ...prev,
      holidays: prev.holidays.map((holiday, i) => 
        i === index ? { ...holiday, [field]: value } : holiday
      )
    }));
  };

  const removeHoliday = (index: number) => {
    setBusinessData(prev => ({
      ...prev,
      holidays: prev.holidays.filter((_, i) => i !== index)
    }));
  };

  const togglePaymentMethod = (method: PaymentMethod) => {
    setBusinessData(prev => ({
      ...prev,
      payment_methods: prev.payment_methods.includes(method)
        ? prev.payment_methods.filter(m => m !== method)
        : [...prev.payment_methods, method]
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-6 gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push('/dashboard')}
                className="self-start"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="w-full sm:w-auto">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Business Settings</h1>
                <p className="text-sm sm:text-base text-gray-600">Manage your business information and preferences</p>
              </div>
            </div>
            <Button 
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  <span className="hidden sm:inline">Saving...</span>
                  <span className="sm:hidden">Save</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Save Changes</span>
                  <span className="sm:hidden">Save</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Tab Selector */}
          <div className="sm:hidden py-4">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as 'basic' | 'hours' | 'services' | 'staff' | 'holidays' | 'ai')}
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
              { id: 'basic', label: 'Basic Info', icon: Settings },
              { id: 'hours', label: 'Operating Hours', icon: Clock },
              { id: 'services', label: 'Services', icon: Edit3 },
              { id: 'staff', label: 'Staff', icon: Users },
              { id: 'holidays', label: 'Holidays', icon: Calendar },
              { id: 'ai', label: 'AI & Policies', icon: Settings }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'basic' | 'hours' | 'services' | 'staff' | 'holidays' | 'ai')}
                  className={`flex items-center space-x-1 lg:space-x-2 py-4 px-2 lg:px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Basic Information Tab */}
        {activeTab === 'basic' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Basic Business Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="name">Business Name</Label>
                <Input
                  id="name"
                  value={businessData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={businessData.phone || 'Admin will assign'}
                  readOnly
                  className="bg-gray-50 cursor-not-allowed"
                  placeholder="Admin will assign"
                />
                <p className="text-sm text-gray-500 mt-1">Contact support to update your phone number</p>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={businessData.email}
                  readOnly
                  className="bg-gray-50 cursor-not-allowed"
                  placeholder="Email address from your account"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address" className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Business Address
                </Label>
                <Textarea
                  id="address"
                  value={businessData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter complete business address"
                  rows={3}
                />
              </div>
            </div>
          </Card>
        )}

        {/* Operating Hours Tab */}
        {activeTab === 'hours' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Operating Hours
            </h3>
            <div className="space-y-4">
              {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const).map((day) => {
                const hours = businessData.business_hours[day];
                return (
                  <div key={day} className="flex items-center space-x-4">
                    <div className="w-24">
                      <Label className="capitalize">{day}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={!hours.closed}
                        onChange={(e) => handleBusinessHoursChange(day, 'closed', !e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-600">Open</span>
                    </div>
                    {!hours.closed && (
                      <>
                        <Input
                          type="time"
                          value={hours.open}
                          onChange={(e) => handleBusinessHoursChange(day, 'open', e.target.value)}
                          className="w-32"
                        />
                        <span className="text-gray-500">to</span>
                        <Input
                          type="time"
                          value={hours.close}
                          onChange={(e) => handleBusinessHoursChange(day, 'close', e.target.value)}
                          className="w-32"
                        />
                      </>
                    )}
                    {hours.closed && (
                      <span className="text-gray-500 italic">Closed</span>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Edit3 className="w-5 h-5 mr-2" />
                Services
              </h3>
              <Button onClick={addService} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
            <div className="space-y-4">
              {businessData.services.map((service, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 border rounded-lg">
                  <div className="flex-1 w-full sm:w-auto">
                    <Input
                      value={service.name}
                      onChange={(e) => updateService(index, 'name', e.target.value)}
                      placeholder="Service name"
                    />
                  </div>
                  <div className="flex space-x-2 w-full sm:w-auto">
                    <div className="flex-1 sm:w-32">
                      <Input
                        type="number"
                        value={service.duration}
                        onChange={(e) => updateService(index, 'duration', parseInt(e.target.value))}
                        placeholder="Duration (min)"
                      />
                    </div>
                    <div className="flex-1 sm:w-32">
                      <Input
                        type="number"
                        step="0.01"
                        value={service.price}
                        onChange={(e) => updateService(index, 'price', parseFloat(e.target.value))}
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeService(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {businessData.services.length === 0 && (
                <p className="text-gray-500 text-center py-8">No services added yet. Click &quot;Add Service&quot; to get started.</p>
              )}
            </div>
          </Card>
        )}

        {/* Staff Tab */}
        {activeTab === 'staff' && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Staff Members
              </h3>
              <Button onClick={addStaffMember} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Staff Member
              </Button>
            </div>
            <div className="space-y-4">
              {businessData.staff_members.map((staff, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <Input
                      value={staff.name}
                      onChange={(e) => updateStaffMember(index, 'name', e.target.value)}
                      placeholder="Staff member name"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="email"
                      value={staff.email}
                      onChange={(e) => updateStaffMember(index, 'email', e.target.value)}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      value={staff.phone}
                      onChange={(e) => updateStaffMember(index, 'phone', e.target.value)}
                      placeholder="Phone number"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeStaffMember(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {businessData.staff_members.length === 0 && (
                <p className="text-gray-500 text-center py-8">No staff members added yet. Click &quot;Add Staff Member&quot; to get started.</p>
              )}
            </div>
          </Card>
        )}

        {/* Holidays Tab */}
        {activeTab === 'holidays' && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Holidays & Closures
              </h3>
              <Button onClick={addHoliday} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Holiday
              </Button>
            </div>
            <div className="space-y-4">
              {businessData.holidays.map((holiday, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="w-48">
                    <Input
                      type="date"
                      value={holiday.date}
                      onChange={(e) => updateHoliday(index, 'date', e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      value={holiday.description}
                      onChange={(e) => updateHoliday(index, 'description', e.target.value)}
                      placeholder="Holiday description"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeHoliday(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {businessData.holidays.length === 0 && (
                <p className="text-gray-500 text-center py-8">No holidays added yet. Click &quot;Add Holiday&quot; to get started.</p>
              )}
            </div>
          </Card>
        )}

        {/* AI & Policies Tab */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Payment Methods
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(paymentMethodLabels).map(([method, label]) => (
                  <label key={method} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessData.payment_methods.includes(method as PaymentMethod)}
                      onChange={() => togglePaymentMethod(method as PaymentMethod)}
                      className="rounded"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">AI Instructions</h3>
              <Textarea
                value={businessData.ai_configuration.greeting}
                onChange={(e) => handleInputChange('ai_configuration', {
                  ...businessData.ai_configuration,
                  greeting: e.target.value
                })}
                placeholder="Provide specific instructions for the AI assistant when handling customer calls..."
                rows={6}
              />
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Booking Policies</h3>
              <Textarea
                value={businessData.booking_policies.cancellation_policy || ''}
                onChange={(e) => handleInputChange('booking_policies', {
                  ...businessData.booking_policies,
                  cancellation_policy: e.target.value
                })}
                placeholder="Enter your booking policies, cancellation terms, and other important information..."
                rows={6}
              />
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}