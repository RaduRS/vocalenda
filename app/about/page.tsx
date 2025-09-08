import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'About Us - Vocalenda',
  description: 'Learn about the UK-based developer and entrepreneur behind Vocalenda, helping businesses automate their AI receptionist services.',
  openGraph: {
    title: 'About Us - Vocalenda',
    description: 'Learn about the UK-based developer and entrepreneur behind Vocalenda, helping businesses automate their AI receptionist services.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Vocalenda</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering businesses with intelligent voice automation solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Personal Story */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Story Behind Vocalenda
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hi, I&apos;m a UK-based developer and entrepreneur with a passion for creating technology that makes a real difference in people&apos;s lives. 
                After years of working in the tech industry, I noticed a common problem: businesses were struggling to manage their phone calls efficiently, 
                especially during busy periods or outside business hours.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                That&apos;s when the idea for Vocalenda was born. I wanted to create an AI-powered receptionist that could handle bookings, answer questions, 
                and provide excellent customer service 24/7. The goal was simple: help businesses never miss an opportunity while reducing their workload.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, Vocalenda serves businesses across the UK and beyond, from small local salons to growing wellness centers. 
                Every feature we build is designed with real business needs in mind, because I believe technology should work for you, not the other way around.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                To democratize AI technology for small and medium businesses, making advanced voice automation 
                accessible, affordable, and easy to implement. We&apos;re not just building software – we&apos;re building 
                the future of customer service.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🇬🇧 UK-Based Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built in the UK with a deep understanding of local business needs and compliance requirements.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🚀 Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly pushing the boundaries of what&apos;s possible with AI voice technology.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🤝 Customer Success
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your success is our success. We&apos;re committed to helping your business thrive.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🔒 Privacy & Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  GDPR compliant and built with privacy by design. Your data is always protected.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join hundreds of businesses already using Vocalenda to automate their customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/setup">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-3">
                <Link href="/">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}