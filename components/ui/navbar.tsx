"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 50], [1, 1]);
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  // Check if we're on privacy or terms pages
  const isPrivacyOrTermsPage =
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/about" ||
    pathname === "/blog" ||
    pathname?.startsWith("/blog/") ||
    pathname?.startsWith("/auth");

  const textColor = useTransform(
    scrollY,
    [0, 50],
    isPrivacyOrTermsPage
      ? ["rgb(15, 23, 42)", "rgb(15, 23, 42)"] // Black text from start on privacy/terms
      : ["rgb(255, 255, 255)", "rgb(15, 23, 42)"] // White to black on other pages
  );
  const shadowValue = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 6px -1px rgba(0,0,0,0.1)"]
  );

  // Hide navbar on sign-in, sign-up, and dashboard pages
  if (
    pathname === "/sign-in" ||
    pathname === "/sign-up" ||
    pathname?.startsWith("/sign-in/") ||
    pathname?.startsWith("/sign-up/") ||
    pathname?.startsWith("/dashboard")
  ) {
    return null;
  }

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      style={{
        opacity: headerOpacity,
        backgroundColor: headerBackground,
        boxShadow: shadowValue,
      }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
          <div className="hidden md:flex items-center space-x-6">
            {/* Blog Link */}
            <Link href="/blog">
              <motion.div
                style={{ color: textColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer rounded-lg"
                >
                  Blog
                </Button>
              </motion.div>
            </Link>

            <SignedOut>
              <SignInButton>
                <motion.div
                  style={{ color: textColor }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer rounded-lg"
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
                    className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90 text-white font-medium transition-colors duration-200 cursor-pointer"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <motion.div
                  style={{ color: textColor }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer rounded-lg"
                  >
                    Dashboard
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                      userButtonPopoverCard:
                        "shadow-lg border border-slate-200 dark:border-slate-700",
                      userButtonPopoverActionButton:
                        "hover:bg-slate-50 dark:hover:bg-slate-800",
                    },
                  }}
                />
              </motion.div>
            </SignedIn>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Blog Link for Mobile */}
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                style={{ color: textColor }}
              >
                Blog
              </motion.button>
            </Link>

            <SignedOut>
              <SignInButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  style={{ color: textColor }}
                >
                  <User className="h-6 w-6" />
                </motion.button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-2">
                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    style={{ color: textColor }}
                  >
                    Dashboard
                  </motion.button>
                </Link>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard:
                          "shadow-lg border border-slate-200 dark:border-slate-700",
                        userButtonPopoverActionButton:
                          "hover:bg-slate-50 dark:hover:bg-slate-800",
                      },
                    }}
                  />
                </motion.div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
