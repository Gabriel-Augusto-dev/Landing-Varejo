export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="storeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fff7ed" />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="80" height="80" rx="28" fill="url(#storeGradient)" opacity="0.18" />
      <rect x="18" y="18" width="64" height="64" rx="22" fill="none" stroke="url(#storeGradient)" strokeWidth="3.5" />

      <path d="M27 34h46l-4 11H31l-4-11Z" fill="url(#storeGradient)" />
      <path d="M31 45h38v25H31V45Z" fill="#0f172a" fillOpacity="0.42" stroke="url(#leafGradient)" strokeWidth="3" />
      <path d="M37 34c0 5 3 8 7 8s7-3 7-8m0 0c0 5 3 8 7 8s7-3 7-8" stroke="#fff7ed" strokeWidth="3" strokeLinecap="round" />

      <path
        d="M50 61c8-1 13-7 13-14-7 0-13 5-13 12-1-7-6-12-13-12 0 8 5 13 13 14Z"
        fill="url(#leafGradient)"
      />
      <path d="M50 48v18" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
