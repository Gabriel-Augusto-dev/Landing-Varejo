// ========================================
// 🎨 CONFIGURAÇÃO COMPLETA DE TEMA
// ========================================
// TODAS as cores do projeto são alteráveis aqui!
// Formato: "R G B" (sem vírgulas, valores de 0-255)
// Exemplo: "37 99 235" = rgb(37, 99, 235)

export const theme = {
  // ===== CORES PRINCIPAIS =====
colors: {
  // Cor primária (usado em títulos, destaques principais)
  primary: "59 130 246",        // Blue-500 (Azul tecnológico profissional)
  
  // Cor secundária (usado em botões CTA, links, badges)
  secondary: "14 165 233",      // Sky-500 (Azul céu vibrante)
  
  // Cor de destaque/acento (warnings, notificações)
  accent: "99 102 241",         // Indigo-500 (Roxo-azulado destaque)
  
  // Cor de sucesso (mensagens positivas, confirmações)
  success: "34 197 94",         // Green-500 (Verde sucesso)
  
  // Cor de aviso (alertas, atenção)
  warning: "251 191 36",        // Amber-400 (Amarelo aviso)
  
  // Cor de erro (erros, validações)
  error: "239 68 68",           // Red-500 (Vermelho erro)
},

// ===== CORES DE BACKGROUND =====
backgrounds: {
  // Background principal da página
  main: "15 23 42",             // Slate-900 (Cinza azulado profundo)
  
  // Background de cards e superfícies elevadas
  card: "30 41 59",             // Slate-800 (Cinza azulado cards)
  
  // Background de elementos hover
  hover: "51 65 85",            // Slate-700 (Cinza hover)
  
  // Background de seções alternadas
  alternate: "17 24 39",        // Slate-900 (Cinza profundo alternado)
  
  // Background claro (se precisar de seções claras)
  light: "45 55 72",            // Cinza azulado claro
},

// ===== CORES DE TEXTO =====
text: {
  // Texto principal (títulos, corpo)
  primary: "248 250 252",       // Branco puro
  
  // Texto secundário (subtítulos, descrições)
  secondary: "226 232 240",     // Cinza claro brilhante
  
  // Texto terciário (labels, metadados)
  tertiary: "148 163 184",      // Cinza médio visível
  
  // Texto muted (texto desabilitado, menos importante)
  muted: "100 116 139",         // Cinza com contraste
  
  // Texto invertido (para backgrounds claros)
  inverted: "23 15 15",         // Cinza escuro avermelhado
},


// ===== CORES DE BORDAS =====
borders: {
  // Borda padrão (divisores, cards)
  default: "71 85 105",         // Slate-600 (Cinza neutro)
  
  // Borda clara (hover, destaque)
  light: "100 116 139",         // Slate-500 (Cinza claro)
  
  // Borda escura (sombras, profundidade)
  dark: "51 65 85",             // Slate-700 (Cinza escuro)
  
  // Borda de foco (inputs, elementos interativos)
  focus: "59 130 246",          // Blue-500 (Azul primário)
},

// ===== GRADIENTES =====
gradients: {
  // Gradiente primário (hero, CTAs)
  primary: "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(37 99 235) 100%)",
  
  // Gradiente secundário (cards, destaques)
  secondary: "linear-gradient(135deg, rgb(14 165 233) 0%, rgb(59 130 246) 100%)",
  
  // Gradiente de destaque
  accent: "linear-gradient(135deg, rgb(99 102 241) 0%, rgb(59 130 246) 100%)",
  
  // Gradiente de background
  background: "linear-gradient(135deg, rgb(15 23 42) 0%, rgb(30 41 59) 50%, rgb(51 65 85) 100%)",
},

// ===== FUNDO ANIMADO (Canvas + Orbs) =====
animatedBackground: {
  // Cor do grid animado (formato RGB para canvas)
  gridColor: "59, 130, 246",         // Azul tecnológico
  gridOpacity: 0.08,
  
  // Cor das partículas (formato RGB para canvas)
  particleColor: "14, 165, 233",     // Azul céu
  particleOpacity: 0.5,
  
  // Cor das linhas de conexão entre partículas
  connectionColor: "59, 130, 246",   // Azul tecnológico
  connectionOpacity: 0.15,
  
  // Cores dos orbs (formato hexadecimal)
  orb1Color: "#3b82f6",              // Blue-500
  orb2Color: "#0ea5e9",              // Sky-500
  orbCenterGradient: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)",
  
  // Gradiente de fundo base
  backgroundGradient: "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)",
},


// ===== TIPOGRAFIA =====
typography: {
  fontFamily: {
    sans: "system-ui, -apple-system, sans-serif",
    heading: "system-ui, -apple-system, sans-serif",
    mono: "ui-monospace, monospace",
  },
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
},


// ===== ESPAÇAMENTOS =====
spacing: {
  section: {
    mobile: "3rem",     // 48px
    tablet: "4rem",     // 64px
    desktop: "6rem",    // 96px
  },
  container: {
    mobile: "1rem",     // 16px
    tablet: "1.5rem",   // 24px
    desktop: "2rem",    // 32px
  },
},


// ===== BORDER RADIUS =====
borderRadius: {
  sm: "0.5rem",     // 8px
  md: "0.75rem",    // 12px
  lg: "1rem",       // 16px
  xl: "1.5rem",     // 24px
  "2xl": "2rem",    // 32px
  full: "9999px",   // Círculo completo
},


// ===== SOMBRAS =====
shadows: {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  glow: "0 0 30px rgb(239 68 68 / 0.3)",        // Glow vermelho (secondary)
  glowPrimary: "0 0 30px rgb(220 38 38 / 0.3)", // Glow vermelho (primary)
},


// ===== ANIMAÇÕES =====
animations: {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
},

  // ===== OPACIDADES =====
  opacity: {
    disabled: "0.5",
    hover: "0.8",
    active: "0.9",
  },
};

// ===== EXEMPLO DE TEMAS PRONTOS =====
// Descomente um desses para testar cores diferentes!

// TEMA AZUL/VERDE (padrão)
// Já está ativo acima

// TEMA VERMELHO/LARANJA
/*
export const theme = {
  colors: {
    primary: "220 38 38",        // Vermelho
    secondary: "234 88 12",      // Laranja
    accent: "251 191 36",        // Amarelo
    success: "22 163 74",
    warning: "234 179 8",
    error: "153 27 27",
  },
  // ... resto igual
};
*/

// TEMA ROXO/ROSA
/*
export const theme = {
  colors: {
    primary: "147 51 234",       // Roxo
    secondary: "236 72 153",     // Rosa
    accent: "244 114 182",       // Rosa claro
    success: "22 163 74",
    warning: "234 179 8",
    error: "220 38 38",
  },
  // ... resto igual
};
*/

// TEMA VERDE/AZUL
/*
export const theme = {
  colors: {
    primary: "5 150 105",        // Verde
    secondary: "14 165 233",     // Azul claro
    accent: "34 211 238",        // Ciano
    success: "22 163 74",
    warning: "234 179 8",
    error: "220 38 38",
  },
  // ... resto igual
};
*/

