'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, userId } = useAuth();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const handleCallback = async () => {
      if (!isLoaded) {
      return;
    }
      
      if (!userId) {
        console.error('❌ No userId found, user not authenticated');
        setError('You must be signed in to connect Google Calendar');
        setStatus('error');
        return;
      }

      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const error = searchParams.get('error');

      if (error) {
        setError(`Google OAuth error: ${error}`);
        setStatus('error');
        return;
      }

      if (!code || !state) {
        setError('Missing authorization code or state parameter');
        setStatus('error');
        return;
      }

      try {

        
        // Send the authorization code and state to our API
        const response = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            state
          })
        });

        const data = await response.json();

        if (response.ok && data.success) {

          setStatus('success');
          // Redirect to integrations page with calendar parameter after a short delay
          setTimeout(() => {
             router.push('/dashboard/integrations?calendar=connected');
           }, 1000);
        } else {
          console.error('❌ OAuth API error:', data);
          setError(data.error || 'Failed to connect Google Calendar');
          setStatus('error');
        }
      } catch (err) {
        console.error('Callback processing error:', err);
        setError('Failed to process Google Calendar connection');
        setStatus('error');
      }
    };

    handleCallback();
  }, [isLoaded, userId, searchParams, router]);

  const handleRetry = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {status === 'processing' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6c47ff] mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Connecting Google Calendar
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Please wait while we set up your calendar integration...
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Calendar Connected!
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Your Google Calendar has been successfully connected. Redirecting to dashboard...
            </p>
            <button
              onClick={() => router.push('/dashboard/integrations?calendar=connected')}
              className="bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Go to Integrations
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Connection Failed
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {error}
            </p>
            <button
              onClick={handleRetry}
              className="bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Return to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <GoogleCallbackContent />
    </Suspense>
  );
}