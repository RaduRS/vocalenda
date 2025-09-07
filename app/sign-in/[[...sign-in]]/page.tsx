import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Vocalenda",
  description:
    "Sign in to your Vocalenda account to manage your AI voice booking automation.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Mobile Layout - Pattern Background */}
      <div className="lg:hidden min-h-screen w-full bg-gradient-to-br from-[#6c47ff] via-[#8b7aff] to-[#a855f7] relative flex items-center justify-center p-4">
        {/* Mobile Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="mobileGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#mobileGrid)" />
          <circle cx="20" cy="20" r="15" fill="white" opacity="0.1" />
          <circle cx="80" cy="30" r="10" fill="white" opacity="0.15" />
          <circle cx="60" cy="70" r="20" fill="white" opacity="0.08" />
          <polygon
            points="10,80 30,60 50,80 30,100"
            fill="white"
            opacity="0.1"
          />
          <polygon
            points="70,10 90,30 70,50 50,30"
            fill="white"
            opacity="0.12"
          />
        </svg>

        {/* Mobile Modal */}
        <div className="relative z-10 max-w-sm w-full">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-white text-[#6c47ff] hover:bg-slate-50 font-medium rounded-md transition-colors duration-200",
                card: "shadow-none border-0 bg-transparent",
                headerTitle: "text-white",
                headerSubtitle: "text-slate-200",
                socialButtonsBlockButton:
                  "border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200",
                socialButtonsBlockButtonText: "font-medium text-white",
                formFieldLabel: "text-white font-medium",
                formFieldInput:
                  "border-white/30 bg-white/10 focus:border-white focus:ring-white text-white placeholder-slate-300",
                footerActionLink: "text-white hover:text-slate-200 font-medium",
                dividerLine: "bg-white/30",
                dividerText: "text-slate-200",
                formResendCodeLink: "text-white hover:text-slate-200",
                identityPreviewText: "text-slate-200",
                formFieldSuccessText: "text-green-300",
                formFieldErrorText: "text-red-300",
                alertText: "text-red-300",
              },
              layout: {
                socialButtonsPlacement: "top",
                showOptionalFields: false,
              },
            }}
            fallbackRedirectUrl="/setup"
            signUpUrl="/sign-up"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-screen">
        {/* Left Side - Modal */}
        <div className="w-1/2 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-8 lg:p-12 flex-col">
          <div className="max-w-md">
            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium rounded-md transition-colors duration-200",
                  card: "shadow-none border-0 bg-transparent",
                  headerTitle: "text-white",
                  headerSubtitle: "text-slate-300",
                  socialButtonsBlockButton:
                    "border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200",
                  socialButtonsBlockButtonText: "font-medium text-white",
                  formFieldLabel: "text-white font-medium",
                  formFieldInput:
                    "border-white/30 bg-white/10 focus:border-[#6c47ff] focus:ring-[#6c47ff] text-white placeholder-slate-400",
                  footerActionLink:
                    "text-[#8b7aff] hover:text-[#6c47ff] font-medium",
                  dividerLine: "bg-white/30",
                  dividerText: "text-slate-400",
                  formResendCodeLink: "text-[#8b7aff] hover:text-[#6c47ff]",
                  identityPreviewText: "text-slate-300",
                  formFieldSuccessText: "text-green-400",
                  formFieldErrorText: "text-red-400",
                  alertText: "text-red-400",
                },
                layout: {
                  socialButtonsPlacement: "top",
                  showOptionalFields: false,
                },
              }}
              fallbackRedirectUrl="/setup"
              signUpUrl="/sign-up"
            />
          </div>
        </div>

        {/* Right Side - Geometric Pattern */}
        <div className="w-1/2 bg-gradient-to-br from-[#6c47ff] via-[#8b7aff] to-[#a855f7] relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="desktopGrid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </pattern>
              <linearGradient
                id="circleGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                <stop offset="100%" stopColor="white" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#desktopGrid)" />

            {/* Floating geometric shapes */}
            <circle
              cx="25"
              cy="25"
              r="12"
              fill="url(#circleGradient)"
              className="animate-pulse"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 2,1; 0,0"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="75"
              cy="20"
              r="8"
              fill="url(#circleGradient)"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -1,2; 0,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="60"
              cy="60"
              r="15"
              fill="url(#circleGradient)"
              className="animate-pulse"
              style={{ animationDelay: "4s" }}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 1,-1; 0,0"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="20"
              cy="75"
              r="10"
              fill="url(#circleGradient)"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -2,1; 0,0"
                dur="9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="85"
              cy="70"
              r="6"
              fill="url(#circleGradient)"
              className="animate-pulse"
              style={{ animationDelay: "3s" }}
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 1,2; 0,0"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Geometric polygons */}
            <polygon
              points="15,85 25,70 35,85 25,100"
              fill="white"
              opacity="0.1"
              className="animate-pulse"
              style={{ animationDelay: "2.5s" }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 25 85; 5 25 85; 0 25 85"
                dur="10s"
                repeatCount="indefinite"
              />
            </polygon>
            <polygon
              points="70,15 85,25 70,35 55,25"
              fill="white"
              opacity="0.15"
              className="animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 70 25; -3 70 25; 0 70 25"
                dur="12s"
                repeatCount="indefinite"
              />
            </polygon>
            <polygon
              points="40,10 50,5 60,10 50,20"
              fill="white"
              opacity="0.08"
              className="animate-pulse"
              style={{ animationDelay: "4.5s" }}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 12; 8 50 12; 0 50 12"
                dur="8s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
        </div>
      </div>
    </div>
  );
}
