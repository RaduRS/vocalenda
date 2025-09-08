"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  currency: string;
}

interface Appointment {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  notes?: string;
  createdAt: string;
  customer: Customer | null;
  service: Service | null;
}

interface AppointmentStats {
  todayAppointments: number;
  thisWeekAppointments: number;
  totalCustomers: number;
}

function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState<AppointmentStats>({
    todayAppointments: 0,
    thisWeekAppointments: 0,
    totalCustomers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/appointments');
      
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      
      const data = await response.json();
      setAppointments(data.appointments);
      setStats(data.stats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'no_show': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (timeString: string) => {
    try {
      const [hours, minutes] = timeString.split(':');
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));
      return format(date, 'h:mm a');
    } catch {
      return timeString;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMM d, yyyy');
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-secondary-1 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchAppointments} className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
            Try Again
          </Button>
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
                Appointments
              </h1>
              <p className="text-brand-primary-2">
                Manage your upcoming and past appointments
              </p>
            </div>
            <Button className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
                <p className="text-sm text-gray-600">Today&apos;s Appointments</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.thisWeekAppointments}</p>
                <p className="text-sm text-gray-600">This Week</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
                <p className="text-sm text-gray-600">Total Customers</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Appointments List */}
        <Card className="p-6">
          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Appointments Yet
              </h3>
              <p className="text-gray-600 mb-6">
                Your appointments will appear here once customers start booking.
              </p>
              <Button className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Appointment
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
                <Button className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
                  <Plus className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </div>
              
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="font-medium text-gray-900">
                              {formatDate(appointment.date)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">
                              {formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {appointment.customer?.name || 'Unknown Customer'}
                            </h3>
                            {appointment.customer?.phone && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                <Phone className="w-3 h-3" />
                                <span>{appointment.customer.phone}</span>
                              </div>
                            )}
                            {appointment.customer?.email && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-3 h-3" />
                                <span>{appointment.customer.email}</span>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            {appointment.service && (
                              <div className="mb-2">
                                <p className="font-medium text-gray-900">{appointment.service.name}</p>
                                <p className="text-sm text-gray-600">
                                  {appointment.service.duration} minutes • 
                                  {appointment.service.currency === 'GBP' ? '£' : '$'}{appointment.service.price}
                                </p>
                              </div>
                            )}
                            {appointment.notes && (
                               <p className="text-sm text-gray-600 italic">
                                 &ldquo;{appointment.notes}&rdquo;
                               </p>
                             )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Appointments;