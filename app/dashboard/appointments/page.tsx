"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
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
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Name</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Phone</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Date & Time</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Service</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-1">
                          <p className="font-medium text-gray-900 truncate">
                            {appointment.customer?.name || 'Unknown Customer'}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600 truncate">
                            {appointment.customer?.phone || '--'}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600">
                            {formatTime(appointment.startTime)} - {formatTime(appointment.endTime)}
                          </p>
                          <p className="text-xs text-gray-400">
                            {formatDate(appointment.date)}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600 truncate">
                            {appointment.service?.name || '--'}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {appointments.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-brand-primary-2">
                          <p>No appointments found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Appointments;