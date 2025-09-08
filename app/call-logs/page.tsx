'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Clock, User, ArrowLeft, Download, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface CallLog {
  id: string;
  caller_phone: string;
  status: 'incoming' | 'in_progress' | 'completed' | 'failed';
  started_at: string;
  ended_at: string | null;
  duration: number | null;
  customer_name: string | null;
  twilio_call_sid: string | null;
  transcript: string | null;
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
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

interface TranscriptEntry {
  speaker: string;
  message: string;
  id: number;
}

const formatTranscript = (transcript: string | null): TranscriptEntry[] => {
  if (!transcript) return [];
  
  // Split transcript into conversation turns
  const lines = transcript.split('\n').filter(line => line.trim());
  return lines.map((line, index) => {
    const [speaker, ...messageParts] = line.split(': ');
    const message = messageParts.join(': ');
    
    if (speaker && message) {
      return {
        speaker: speaker.trim(),
        message: message.trim(),
        id: index
      };
    }
    return null;
  }).filter((entry): entry is TranscriptEntry => entry !== null);
};

const toggleTranscript = (callId: string, setExpandedTranscript: (id: string | null) => void, expandedTranscript: string | null) => {
  setExpandedTranscript(expandedTranscript === callId ? null : callId);
};

export default function CallLogsPage() {
  const { user } = useUser();
  const router = useRouter();
  const [callLogs, setCallLogs] = useState<CallLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedTranscript, setExpandedTranscript] = useState<string | null>(null);

  useEffect(() => {
    const fetchCallLogs = async () => {
      try {
        const response = await fetch('/api/call-logs', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setCallLogs(data.callLogs || []);
        } else {
          throw new Error('Failed to fetch call logs');
        }
      } catch (error) {
        console.error('Failed to fetch call logs:', error);
        setError('Failed to load call logs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCallLogs();
    }
  }, [user]);

  const handleExport = () => {
    // Create CSV content
    const headers = ['Date', 'Customer Name', 'Phone Number', 'Status', 'Duration'];
    const csvContent = [
      headers.join(','),
      ...callLogs.map(call => [
        formatTimestamp(call.started_at),
        call.customer_name || 'Unknown Caller',
        call.caller_phone,
        call.status,
        formatDuration(call.duration)
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `call-logs-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="h-8 bg-brand-primary-2/20 rounded w-48 mb-4 animate-pulse"></div>
            <div className="h-4 bg-brand-primary-2/20 rounded w-64 animate-pulse"></div>
          </div>
          <Card>
            <CardHeader>
              <div className="h-6 bg-brand-primary-2/20 rounded w-32 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-16 bg-brand-primary-2/20 rounded animate-pulse"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-brand-primary-1">AI Call History</h1>
              <p className="text-brand-primary-2">Complete history of all AI-handled calls</p>
            </div>
            {callLogs.length > 0 && (
              <Button 
                onClick={handleExport}
                className="flex items-center gap-2"
                variant="outline"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            )}
          </div>
        </div>

        {/* Call Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              All Calls ({callLogs.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="text-center py-8">
                <div className="text-red-600 mb-4">{error}</div>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            ) : callLogs.length === 0 ? (
              <div className="text-center py-8 text-brand-primary-2">
                <Phone className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No calls yet</p>
                <p className="text-sm">Call logs will appear here once customers start calling</p>
              </div>
            ) : (
              <div className="space-y-4">
                {callLogs.map((call) => (
                  <div key={call.id} className="border rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 hover:bg-brand-primary-2/5 transition-colors">
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
                      
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm text-brand-primary-2">
                            {formatTimestamp(call.started_at)}
                          </div>
                        </div>
                        
                        {call.transcript && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleTranscript(call.id, setExpandedTranscript, expandedTranscript)}
                            className="flex items-center gap-2"
                          >
                            <MessageSquare className="h-4 w-4" />
                            Transcript
                            {expandedTranscript === call.id ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {/* Expandable Transcript Section */}
                    {expandedTranscript === call.id && call.transcript && (
                      <div className="border-t bg-gray-50 p-4">
                        <h4 className="font-medium text-brand-primary-1 mb-3 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Conversation Transcript
                        </h4>
                        <div className="max-h-96 overflow-y-auto space-y-3">
                           {formatTranscript(call.transcript).length > 0 ? (
                             formatTranscript(call.transcript).map((entry: TranscriptEntry) => (
                               <div key={entry.id} className="flex gap-3">
                                 <div className={`px-2 py-1 rounded text-xs font-medium ${
                                   entry.speaker === 'User' 
                                     ? 'bg-blue-100 text-blue-800' 
                                     : 'bg-green-100 text-green-800'
                                 }`}>
                                   {entry.speaker}
                                 </div>
                                 <div className="flex-1 text-sm text-gray-700">
                                   {entry.message}
                                 </div>
                               </div>
                             ))
                           ) : (
                             <div className="text-sm text-gray-500 italic">
                               No transcript available
                             </div>
                           )}
                         </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}