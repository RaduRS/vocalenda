"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Phone, Mail } from "lucide-react";
import { format, parseISO } from "date-fns";
import { useAppointments } from "@/hooks/useAppointments";
import { AppointmentsSkeleton } from "@/components/ui/skeleton-loading";

function Appointments() {
  const { data, isLoading, error, refetch } = useAppointments();
  
  const appointments = data?.appointments || [];
  const stats = data?.stats || {
    todayAppointments: 0,
    thisWeekAppointments: 0,
    totalCustomers: 0
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

  if (isLoading) {
    return <AppointmentsSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {(error as Error).message}</p>
          <Button onClick={() => refetch()} className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
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
            <div className="flex items-center space-x-3">
              {/* Buttons removed as requested */}
            </div>
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
                Create Your First Appointment
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>

              </div>
              
              <div className="space-y-6">
                {appointments.map((appointment) => (
                  <Card key={appointment.id} className="p-6 hover:shadow-lg transition-all duration-200 border-l-4 border-l-brand-secondary-1">
                    {/* Header with Date, Time and Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 sm:mb-0">
                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-blue-900">
                            {formatDate(appointment.date)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-700 font-medium">
                            {formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}
                          </span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(appointment.status)} self-start sm:self-center`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                      </span>
                    </div>
                    
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Customer Information */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Customer</h4>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {appointment.customer?.name || 'Unknown Customer'}
                          </h3>
                          <div className="space-y-2">
                            {appointment.customer?.phone && (
                              <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <Phone className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="font-medium">{appointment.customer.phone}</span>
                              </div>
                            )}
                            {appointment.customer?.email && (
                              <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                  <Mail className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="font-medium truncate">{appointment.customer.email}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Information */}
                      <div className="space-y-4">
                        {appointment.service && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Service</h4>
                            <div className="bg-gradient-to-r from-brand-secondary-1/10 to-brand-primary-1/10 p-4 rounded-lg">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{appointment.service.name}</h3>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="bg-white px-3 py-1 rounded-full font-semibold text-gray-700">
                                  {appointment.service.duration} min
                                </span>
                                <span className="bg-white px-3 py-1 rounded-full font-semibold text-green-700">
                                  {appointment.service.currency === 'GBP' ? '£' : '$'}{appointment.service.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {appointment.notes && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Notes</h4>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                              <p className="text-gray-700 italic">
                                &ldquo;{appointment.notes}&rdquo;
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
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