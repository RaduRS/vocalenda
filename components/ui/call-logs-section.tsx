'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Clock, User } from 'lucide-react';

interface CallLog {
  id: string;
  caller_phone: string;
  status: 'incoming' | 'in_progress' | 'completed' | 'failed';
  started_at: string;
  ended_at: string | null;
  duration: number | null;
  customer_name: string | null;
  twilio_call_sid: string | null;
}

interface CallLogsSectionProps {
  recentCalls: CallLog[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-brand-secondary-1/10 text-brand-secondary-1';
    case 'in_progress':
      return 'bg-brand-primary-1/10 text-brand-primary-1';
    case 'failed':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'incoming':
      return 'bg-brand-primary-2/10 text-brand-primary-2';
    default:
      return 'bg-brand-primary-2/10 text-brand-primary-2';
  }
};

const formatDuration = (seconds: number | null) => {
  if (!seconds) return 'N/A';
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  }
  return `${remainingSeconds}s`;
};

const formatPhoneNumber = (phone: string) => {
  // Format phone number for better readability
  if (phone.startsWith('+44')) {
    return phone.replace(/^\+44(\d{4})(\d{3})(\d{3})$/, '+44 $1 $2 $3');
  }
  if (phone.startsWith('+1')) {
    return phone.replace(/^\+1(\d{3})(\d{3})(\d{4})$/, '+1 ($1) $2-$3');
  }
  return phone;
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours < 24) {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
  } else if (diffInHours < 168) { // Less than a week
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  } else {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
};

export function CallLogsSection({ recentCalls }: CallLogsSectionProps) {
  if (!recentCalls || recentCalls.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Recent Calls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-brand-primary-2">
            <Phone className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No calls yet</p>
            <p className="text-sm">Call logs will appear here once customers start calling</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Recent Calls ({recentCalls.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentCalls.map((call) => (
            <div
              key={call.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-brand-primary-2/5 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-brand-secondary-1/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-secondary-1" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-brand-primary-1">
                      {call.customer_name || 'Unknown Caller'}
                    </span>
                    <Badge className={getStatusColor(call.status)}>
                      {call.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-brand-primary-2">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {formatPhoneNumber(call.caller_phone)}
                    </span>
                    
                    {call.duration !== null && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDuration(call.duration)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 text-right">
                <div className="text-sm text-brand-primary-2">
                  {formatTimestamp(call.started_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {recentCalls.length >= 10 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-brand-primary-2">
              Showing last 10 calls
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}