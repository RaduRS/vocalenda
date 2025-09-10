import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@clerk/nextjs', 'lucide-react', '@supabase/supabase-js', 'date-fns'],
  },

  // Turbopack configuration (replaces deprecated experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 200000, // 200KB max chunk size
        cacheGroups: {
          default: false,
          vendors: false,
          // React and React DOM
          react: {
            test: /[\/]node_modules[\/](react|react-dom)[\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Clerk authentication
          clerk: {
            test: /[\/]node_modules[\/]@clerk[\/]/,
            name: 'clerk',
            chunks: 'all',
            priority: 15,
          },
          // Supabase
          supabase: {
            test: /[\/]node_modules[\/]@supabase[\/]/,
            name: 'supabase',
            chunks: 'all',
            priority: 15,
          },
          // Radix UI components
          radix: {
            test: /[\/]node_modules[\/]@radix-ui[\/]/,
            name: 'radix',
            chunks: 'all',
            priority: 12,
          },
          // Date utilities
          dates: {
            test: /[\/]node_modules[\/](date-fns|date-fns-tz)[\/]/,
            name: 'dates',
            chunks: 'all',
            priority: 10,
          },
          // Animation libraries
          animations: {
            test: /[\/]node_modules[\/](framer-motion)[\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 10,
          },
          // Google APIs
          google: {
            test: /[\/]node_modules[\/](googleapis)[\/]/,
            name: 'google',
            chunks: 'all',
            priority: 10,
          },
          // Other vendor libraries
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 5,
            minChunks: 2,
          },
          // UI components
          ui: {
            test: /[\/]components[\/]ui[\/]/,
            name: 'ui',
            chunks: 'all',
            priority: 8,
          },
        },
      };
    }
    return config;
  },
  
  // Headers for static asset caching
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Script sources - 'unsafe-inline' required for Next.js and component functionality
              `script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://clerk.vocalenda.com https://*.clerk.accounts.dev https://challenges.cloudflare.com`,
              // Style sources - 'unsafe-inline' required for Clerk components
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://www.google-analytics.com https://ssl.google-analytics.com https://img.clerk.com https://images.clerk.dev blob:",
              // Connect sources - restricted to necessary domains only
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://clerk.vocalenda.com https://api.clerk.com https://*.clerk.accounts.dev https://img.clerk.com https://images.clerk.dev",
              "frame-src 'self' https://*.clerk.accounts.dev https://challenges.cloudflare.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
              // Additional security directives
              "manifest-src 'self'",
              "media-src 'self'"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off'
          }
        ]
      }
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
