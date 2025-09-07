'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 1]);
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  // Check if we're on privacy or terms pages
  const isPrivacyOrTermsPage = pathname === '/privacy' || pathname === '/terms';
  
  const textColor = useTransform(
    scrollY,
    [0, 50],
    isPrivacyOrTermsPage 
      ? ['rgb(15, 23, 42)', 'rgb(15, 23, 42)'] // Black text from start on privacy/terms
      : ['rgb(255, 255, 255)', 'rgb(15, 23, 42)'] // White to black on other pages
  );
  const shadowValue = useTransform(
    scrollY,
    [0, 50],
    ['0 0 0 rgba(0,0,0,0)', '0 4px 6px -1px rgba(0,0,0,0.1)']
  );

  // Hide navbar on sign-in and sign-up pages
  if (pathname === '/sign-in' || pathname === '/sign-up' || pathname?.startsWith('/sign-in/') || pathname?.startsWith('/sign-up/')) {
    return null;
  }

  return (
    <motion.header 
      className="fixed top-0 z-50 w-full"
      style={{
        opacity: headerOpacity,
        backgroundColor: headerBackground,
        boxShadow: shadowValue
      }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/vocalenda-logo.jpg"
              alt="Vocalenda Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <motion.div 
              className="text-xl font-bold"
              style={{ color: textColor }}
            >
              Vocalenda
            </motion.div>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <SignedOut>
              <SignInButton>
                <motion.div
                  style={{ color: textColor }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="transition-colors duration-300 hover:bg-white/10"
                  >
                    Sign In
                  </Button>
                </motion.div>
              </SignInButton>
              <SignUpButton>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium transition-colors duration-200"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                      userButtonPopoverCard:
                        'shadow-lg border border-slate-200 dark:border-slate-700',
                      userButtonPopoverActionButton:
                        'hover:bg-slate-50 dark:hover:bg-slate-800',
                    },
                  }}
                />
              </motion.div>
            </SignedIn>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <SignedOut>
              <SignInButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md"
                  style={{ color: textColor }}
                >
                  <User className="h-6 w-6" />
                </motion.button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8',
                      userButtonPopoverCard:
                        'shadow-lg border border-slate-200 dark:border-slate-700',
                      userButtonPopoverActionButton:
                        'hover:bg-slate-50 dark:hover:bg-slate-800',
                    },
                  }}
                />
              </motion.div>
            </SignedIn>
          </div>
        </div>
      </div>
    </motion.header>
  );
}