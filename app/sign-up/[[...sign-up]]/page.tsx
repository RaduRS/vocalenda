import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Get started today
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Create your Vocalenda account and start automating your bookings
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-8 border border-slate-200 dark:border-slate-700">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium rounded-md transition-colors duration-200',
                card: 'shadow-none border-0 bg-transparent',
                headerTitle: 'text-slate-900 dark:text-slate-100',
                headerSubtitle: 'text-slate-600 dark:text-slate-400',
                socialButtonsBlockButton: 
                  'border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-200',
                socialButtonsBlockButtonText: 'font-medium',
                formFieldLabel: 'text-slate-700 dark:text-slate-300 font-medium',
                formFieldInput: 
                  'border-slate-300 dark:border-slate-600 focus:border-[#6c47ff] focus:ring-[#6c47ff] dark:bg-slate-700 dark:text-slate-100',
                footerActionLink: 'text-[#6c47ff] hover:text-[#5a3dd9] font-medium',
                dividerLine: 'bg-slate-200 dark:bg-slate-600',
                dividerText: 'text-slate-500 dark:text-slate-400',
                formResendCodeLink: 'text-[#6c47ff] hover:text-[#5a3dd9]',
                identityPreviewText: 'text-slate-600 dark:text-slate-400',
                formFieldSuccessText: 'text-green-600 dark:text-green-400',
                formFieldErrorText: 'text-red-600 dark:text-red-400',
                alertText: 'text-red-600 dark:text-red-400',
                formFieldHintText: 'text-slate-500 dark:text-slate-400',
                formFieldOptionalText: 'text-slate-500 dark:text-slate-400',
              },
              layout: {
                socialButtonsPlacement: 'top',
                showOptionalFields: true,
              },
            }}
            redirectUrl="/setup"
            signInUrl="/sign-in"
          />
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link 
              href="/sign-in" 
              className="font-medium text-[#6c47ff] hover:text-[#5a3dd9] transition-colors duration-200"
            >
              Sign in
            </Link>
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            By signing up, you agree to our{' '}
            <a href="#" className="text-[#6c47ff] hover:text-[#5a3dd9] underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#6c47ff] hover:text-[#5a3dd9] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}