import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">Last updated: 02-Sept-2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Vocalenda (&quot;the Service&quot;), you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Service Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Vocalenda provides an AI-powered phone agent service that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Handles incoming phone calls using artificial intelligence
                </li>
                <li>
                  Manages appointment bookings, updates, and cancellations
                </li>
                <li>Integrates with Google Calendar for schedule management</li>
                <li>Provides automated customer service for businesses</li>
                <li>
                  Processes voice interactions and converts them to actionable
                  tasks
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Account Security
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Maintain the confidentiality of your account credentials
                    </li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Ensure accurate and up-to-date account information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Proper Use
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Use the service only for legitimate business purposes
                    </li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect the rights and privacy of callers</li>
                    <li>
                      Provide accurate business information and availability
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                AI Service Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While our AI agent is designed to handle most common scenarios,
                you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AI responses may not always be perfect or complete</li>
                <li>Complex requests may require human intervention</li>
                <li>
                  The service may experience occasional downtime or technical
                  issues
                </li>
                <li>
                  Voice recognition accuracy may vary based on call quality and
                  accents
                </li>
                <li>
                  Integration with third-party services (like Google Calendar)
                  depends on their availability
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Google Calendar Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our Google Calendar integration, you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Grant Vocalenda permission to access and modify your Google
                  Calendar
                </li>
                <li>
                  Understand that calendar changes made by our AI are based on
                  voice instructions
                </li>
                <li>
                  Acknowledge that you can revoke calendar access at any time
                </li>
                <li>
                  Accept responsibility for verifying appointment accuracy
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Privacy and Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. By using our service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  You consent to the collection and processing of voice data as
                  described in our Privacy Policy
                </li>
                <li>
                  You understand that calls may be recorded for quality and
                  training purposes
                </li>
                <li>
                  You agree to inform callers that they are interacting with an
                  AI agent
                </li>
                <li>
                  You comply with applicable data protection laws in your
                  jurisdiction
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Prohibited Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our service to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Engage in illegal, fraudulent, or harmful activities</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or attempt to breach security</li>
                <li>Impersonate others or provide false information</li>
                <li>
                  Use the service for spam, harassment, or unsolicited
                  communications
                </li>
                <li>Attempt to reverse engineer or copy our AI technology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We strive to provide reliable service but cannot guarantee 100%
                uptime. We reserve the right to modify, suspend, or discontinue
                the service at any time with reasonable notice. Scheduled
                maintenance will be communicated in advance when possible.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Billing and Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fees are charged according to your selected plan</li>
                <li>Payment is due in advance for subscription services</li>
                <li>
                  Usage-based charges may apply for calls and integrations
                </li>
                <li>Refunds are provided according to our refund policy</li>
                <li>Accounts may be suspended for non-payment</li>
                <li>Price changes will be communicated with 30 days notice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Vocalenda shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to loss of profits, data, or business opportunities. Our
                total liability shall not exceed the amount paid by you for the
                service in the 12 months preceding the claim.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of Vocalenda, including
                but not limited to AI models, software, text, graphics, and
                logos, are owned by Vocalenda and are protected by copyright,
                trademark, and other intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Termination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>At any time with 30 days written notice</li>
                <li>Immediately for material breach of these terms</li>
                <li>Immediately if required by law or regulation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Upon termination, your access to the service will cease, and we
                will delete your data according to our data retention policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where Vocalenda is
                incorporated, without regard to conflict of law principles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
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
              <CardTitle className="text-2xl text-green-600">
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Material
                changes will be communicated via email or through the service.
                Your continued use of Vocalenda after such modifications
                constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
