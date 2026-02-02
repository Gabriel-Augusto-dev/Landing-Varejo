export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo externo com gradiente azul */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f2d5a" />
          <stop offset="100%" stopColor="#1e64c8" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e64c8" />
        </linearGradient>
      </defs>
      
      {/* Círculo de fundo */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        opacity="0.15"
      />
      
      {/* Anel externo (roda) */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="3"
      />
      
      {/* Chave inglesa estilizada */}
      <path
        d="M35,55 L45,45 L48,48 L52,44 L56,48 L59,45 L65,51 L62,54 L58,50 L54,54 L50,50 L47,53 L40,60 L35,55 Z"
        fill="url(#logoGradient2)"
      />
      
      {/* Detalhes da chave */}
      <circle
        cx="62"
        cy="48"
        r="3"
        fill="none"
        stroke="url(#logoGradient2)"
        strokeWidth="2"
      />
      
      {/* Raios da roda (5 raios) */}
      <line x1="50" y1="50" x2="50" y2="20" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="50" x2="77" y2="35" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="50" x2="77" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="50" x2="23" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="50" y1="50" x2="23" y2="35" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
      
      {/* Centro da roda */}
      <circle cx="50" cy="50" r="6" fill="url(#logoGradient2)" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" opacity="0.3" />
    </svg>
  );
}
