"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  User,
  Download,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Bot,
  UserIcon,
} from "lucide-react";
// RefreshCw import removed as it's no longer used
import { useCallLogs } from "@/hooks/useCallLogs";
import { CallLogsSkeleton } from "@/components/ui/skeleton-loading";

// CallLog interface is now imported from the hook

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-brand-secondary-1/10 text-brand-secondary-1";
    case "in_progress":
      return "bg-brand-primary-1/10 text-brand-primary-1";
    case "failed":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case "incoming":
      return "bg-brand-primary-2/10 text-brand-primary-2";
    default:
      return "bg-brand-primary-2/10 text-brand-primary-2";
  }
};

const formatDuration = (seconds: number | null) => {
  if (!seconds) return "N/A";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  }
  return `${remainingSeconds}s`;
};

const formatPhoneNumber = (phone: string) => {
  // Format phone number for better readability
  if (phone.startsWith("+44")) {
    return phone.replace(/^\+44(\d{4})(\d{3})(\d{3})$/, "+44 $1 $2 $3");
  }
  if (phone.startsWith("+1")) {
    return phone.replace(/^\+1(\d{3})(\d{3})(\d{4})$/, "+1 ($1) $2-$3");
  }
  return phone;
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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
  const lines = transcript.split("\n").filter((line) => line.trim());
  return lines
    .map((line, index) => {
      // Remove timestamp from the beginning if present
      const cleanLine = line.replace(/^\[.*?\]\s*/, "");
      const [speaker, ...messageParts] = cleanLine.split(": ");
      const message = messageParts.join(": ");

      if (speaker && message) {
        return {
          speaker: speaker.trim(),
          message: message.trim(),
          id: index,
        };
      }
      return null;
    })
    .filter((entry): entry is TranscriptEntry => entry !== null);
};

const toggleTranscript = (
  callId: string,
  setExpandedTranscript: (id: string | null) => void,
  expandedTranscript: string | null
) => {
  setExpandedTranscript(expandedTranscript === callId ? null : callId);
};

export default function CallLogsPage() {
  const { data, isLoading, error, refetch } = useCallLogs();
  const callLogs = data?.callLogs || [];
  const [expandedTranscript, setExpandedTranscript] = useState<string | null>(
    null
  );

  const handleExport = () => {
    // Create CSV content
    const headers = [
      "Date",
      "Customer Name",
      "Phone Number",
      "Status",
      "Duration",
    ];
    const csvContent = [
      headers.join(","),
      ...callLogs.map((call) =>
        [
          formatTimestamp(call.started_at),
          call.customer_name?.trim() || "Unknown Caller",
          call.caller_phone,
          call.status,
          formatDuration(call.duration),
        ].join(",")
      ),
    ].join("\n");

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `call-logs-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return <CallLogsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-brand-primary-1">
                  AI Call History
                </h1>
                <p className="text-brand-primary-2">
                  Complete history of all AI-handled calls
                </p>
              </div>
              <div className="flex items-center space-x-3">
                {/* Refresh button removed as requested */}
                {callLogs.length > 0 && (
                  <Button
                    onClick={handleExport}
                    className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90 flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Export CSV
                  </Button>
                )}
              </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">

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
                <div className="text-red-600 mb-4">{error.message}</div>
                <Button onClick={() => refetch()}>
                  Try Again
                </Button>
              </div>
            ) : callLogs.length === 0 ? (
              <div className="text-center py-8 text-brand-primary-2">
                <Phone className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No calls yet</p>
                <p className="text-sm">
                  Call logs will appear here once customers start calling
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {callLogs.map((call) => (
                  <div
                    key={call.id}
                    className="border rounded-lg overflow-hidden"
                  >
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
                              {call.customer_name?.trim()
                                ? call.customer_name.trim().split(" ")[0]
                                : "Unknown Caller"}
                            </span>
                            <Badge className={getStatusColor(call.status)}>
                              {call.status.replace("_", " ")}
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
                            onClick={() =>
                              toggleTranscript(
                                call.id,
                                setExpandedTranscript,
                                expandedTranscript
                              )
                            }
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
                        <h4 className="font-medium text-brand-primary-1 mb-4 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Conversation with{" "}
                          {call.customer_name
                            ? call.customer_name.split(" ")[0]
                            : "Unknown Caller"}
                        </h4>
                        <div className="max-h-96 overflow-y-auto space-y-4">
                          {formatTranscript(call.transcript).length > 0 ? (
                            formatTranscript(call.transcript).map(
                              (entry: TranscriptEntry) => (
                                <div
                                  key={entry.id}
                                  className={`flex gap-3 ${
                                    entry.speaker === "User"
                                      ? "justify-end"
                                      : "justify-start"
                                  }`}
                                >
                                  {entry.speaker === "AI" && (
                                    <div className="flex-shrink-0">
                                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Bot className="h-4 w-4 text-green-600" />
                                      </div>
                                    </div>
                                  )}
                                  <div
                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                      entry.speaker === "User"
                                        ? "bg-blue-500 text-white rounded-br-none"
                                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                                    }`}
                                  >
                                    <div className="text-sm">
                                      {entry.message}
                                    </div>
                                  </div>
                                  {entry.speaker === "User" && (
                                    <div className="flex-shrink-0">
                                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <UserIcon className="h-4 w-4 text-blue-600" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            )
                          ) : (
                            <div className="text-sm text-gray-500 italic text-center py-8">
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
