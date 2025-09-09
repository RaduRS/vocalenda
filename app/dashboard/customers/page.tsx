"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Phone, Mail, MapPin, User } from "lucide-react";
import { format } from "date-fns";
import { useCustomers } from "@/hooks/useCustomers";
import { CustomersSkeleton } from "@/components/ui/skeleton-loading";

// Customer interface imported from useCustomers hook

function Customers() {
  const { data, isLoading, error, refetch } = useCustomers();
  const customers = data?.customers || [];
  const stats = data?.stats || {
    totalCustomers: 0,
    phoneContacts: 0,
    emailContacts: 0,
    localCustomers: 0
  };



  if (isLoading) {
    return <CustomersSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-brand-primary-1">
                  Customer Directory
                </h1>
                <p className="text-brand-primary-2">
                  Manage your customer contacts and information
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
             <p className="text-red-600">Error: {error.message}</p>
             <Button onClick={() => refetch()} className="mt-4">
               Try Again
             </Button>
           </div>
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
                Customer Directory
              </h1>
              <p className="text-brand-primary-2">
                Manage your customer contacts and information
              </p>
            </div>
            {/* Refresh button removed as requested */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
                <p className="text-sm text-gray-600">Total Customers</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.phoneContacts}</p>
                <p className="text-sm text-gray-600">Phone Contacts</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.emailContacts}</p>
                <p className="text-sm text-gray-600">Email Contacts</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.localCustomers}</p>
                <p className="text-sm text-gray-600">Local Customers</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Customer List */}
        <Card className="p-6">
          {customers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Customers Yet
              </h3>
              <p className="text-gray-600 mb-6">
                Your customer directory will appear here as people book appointments and interact with your business.
              </p>
              <Button className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Customer
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Customer List ({customers.length})
                </h3>

              </div>
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex items-start space-x-3 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                            {(() => {
                              const firstName = customer.firstName?.trim();
                              const lastName = customer.lastName?.trim();
                              
                              if (firstName && lastName) {
                                return `${firstName} ${lastName}`;
                              } else if (firstName) {
                                return firstName;
                              } else if (lastName) {
                                return lastName;
                              } else {
                                return 'Unknown Customer';
                              }
                            })()
                            }
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mt-1">
                            {customer.phone && (
                              <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{customer.phone}</span>
                              </div>
                            )}
                            {customer.email && (
                              <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{customer.email}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right text-sm text-gray-600 flex-shrink-0">
                        <p className="font-medium">{customer.appointmentCount || 0} appointments</p>
                        <p>Added {customer.createdAt ? format(new Date(customer.createdAt), 'MMM d, yyyy') : 'N/A'}</p>
                      </div>
                    </div>
                    {customer.notes && (
                      <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                        <div className="break-words">{customer.notes}</div>
                      </div>
                    )}
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

export default Customers;