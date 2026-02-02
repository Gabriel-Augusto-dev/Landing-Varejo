export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo externo com gradiente */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Círculo de fundo */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        opacity="0.1"
      />
      
      {/* Hexágono tecnológico */}
      <path
        d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letra T estilizada */}
      <path
        d="M35,35 L65,35 M50,35 L50,70"
        stroke="url(#logoGradient2)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Efeito de brilho */}
      <circle
        cx="40"
        cy="25"
        r="3"
        fill="#ffffff"
        opacity="0.6"
      />
      
      {/* Detalhes tecnológicos */}
      <circle cx="50" cy="50" r="3" fill="url(#logoGradient)" />
      <circle cx="35" cy="45" r="2" fill="#3b82f6" opacity="0.5" />
      <circle cx="65" cy="55" r="2" fill="#0ea5e9" opacity="0.5" />
    </svg>
  );
}
