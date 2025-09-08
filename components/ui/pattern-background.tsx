"use client";

export function PatternBackground() {
  return (
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
  );
}