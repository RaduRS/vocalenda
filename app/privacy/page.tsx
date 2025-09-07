import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: 02-Sept-2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Vocalenda (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our AI-powered phone agent service that
                handles appointment booking, updates, and cancellations through
                Google Calendar integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Name and contact information (phone number, email address)
                  </li>
                  <li>Appointment details and preferences</li>
                  <li>
                    Voice recordings during phone interactions with our AI agent
                  </li>
                  <li>Business information for service providers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Technical Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>IP address and device information</li>
                  <li>Usage data and interaction logs</li>
                  <li>Google Calendar integration data</li>
                  <li>Call metadata (duration, timestamp, phone numbers)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Provide AI-powered phone agent services for appointment
                  management
                </li>
                <li>
                  Process appointment bookings, updates, and cancellations
                </li>
                <li>Integrate with Google Calendar to manage schedules</li>
                <li>Improve our AI models and service quality</li>
                <li>Send appointment confirmations and reminders</li>
                <li>Provide customer support and resolve issues</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Voice Data and AI Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our AI agent processes voice calls to understand and respond to
                appointment requests. Voice recordings may be temporarily stored
                for processing and quality improvement purposes. We use
                industry-standard encryption and security measures to protect
                this sensitive data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Voice data is processed using third-party AI services under
                strict data processing agreements:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>
                  <strong>Deepgram</strong>: AI voice agent processing (handles
                  full voice interactions)
                </li>
                <li>
                  <strong>OpenAI</strong>: Natural language understanding and
                  response generation
                </li>
                <li>
                  All third-party processors operate under strict
                  confidentiality agreements
                </li>
                <li>No voice data is stored permanently by these services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Google Services Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  OAuth Permissions and Limited Use
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our application integrates with Google services and strictly
                  complies with Google&apos;s Limited Use requirements. We
                  request only the minimum necessary permissions:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>
                    <strong>Calendar Access</strong> (
                    <code className="bg-gray-100 px-1 rounded text-sm">
                      https://www.googleapis.com/auth/calendar
                    </code>
                    ): Used exclusively to manage appointments on your behalf,
                    including creating, updating, and canceling calendar events
                  </li>
                  <li>
                    <strong>Email Access</strong> (
                    <code className="bg-gray-100 px-1 rounded text-sm">
                      https://www.googleapis.com/auth/userinfo.email
                    </code>
                    ): Used only for account identification and service-related
                    communication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Data Use Restrictions
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Your Google user data is used exclusively for providing our
                    appointment management services
                  </li>
                  <li>
                    We do not sell, transfer, or use your Google data for
                    advertising or other commercial purposes
                  </li>
                  <li>
                    Data access is limited to what is necessary for core
                    functionality
                  </li>
                  <li>
                    You can revoke access at any time through your Google
                    account settings or on your Vocalenda dashboard
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Information Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may
                share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With your explicit consent</li>
                <li>
                  With trusted service providers who assist in our operations
                  (Deepgram for speech processing, OpenAI for AI responses,
                  under strict confidentiality agreements)
                </li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>
                  <strong>Google Data</strong>: Never shared with third parties
                  except as required for core service functionality
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                This includes encryption, secure data transmission, and regular
                security assessments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of certain data processing activities</li>
                <li>
                  Withdraw consent for Google Calendar integration (through your
                  Google account settings or on your Vocalenda dashboard)
                </li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only as long as necessary to
                provide our services and comply with legal obligations. Voice
                recordings are typically deleted within 30 days unless required
                for quality improvement or legal compliance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@vocalenda.com
                </p>
                <p className="text-gray-700">
                  <strong>General Inquiries:</strong> socials@vocalenda.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new Privacy
                Policy on this page and updating the &quot;Last updated&quot;
                date. Your continued use of our services after such
                modifications constitutes acceptance of the updated Privacy
                Policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
