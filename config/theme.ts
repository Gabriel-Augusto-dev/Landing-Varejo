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
  primary: "96 165 250",        // Blue-400 (Azul muito brilhante)
  
  // Cor secundária (usado em botões CTA, links, badges)
  secondary: "255 255 255",     // Branco puro para tags
  
  // Cor de destaque/acento (warnings, notificações)
  accent: "191 219 254",        // Blue-200 (Azul quase branco)
  
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
  main: "10 15 25",             // Azul escuro profundo
  
  // Background de cards e superfícies elevadas
  card: "30 45 70",             // Azul médio com muito mais contraste
  
  // Background de elementos hover
  hover: "40 60 95",            // Azul hover visível
  
  // Background de seções alternadas
  alternate: "15 22 35",        // Azul escuro alternado
  
  // Background claro (se precisar de seções claras)
  light: "50 70 110",           // Azul médio claro
},

// ===== CORES DE TEXTO =====
text: {
  // Texto principal (títulos, corpo)
  primary: "255 255 255",       // Branco puro para máximo contraste
  
  // Texto secundário (subtítulos, descrições)
  secondary: "226 232 240",     // Slate-200 (Cinza muito claro)
  
  // Texto terciário (labels, metadados)
  tertiary: "203 213 225",      // Slate-300 (Cinza claro bem visível)
  
  // Texto muted (texto desabilitado, menos importante)
  muted: "148 163 184",         // Slate-400 (Cinza médio visível)
  
  // Texto invertido (para backgrounds claros)
  inverted: "15 23 42",         // Slate-900 (Azul escuro)
},


// ===== CORES DE BORDAS =====
borders: {
  // Borda padrão (divisores, cards)
  default: "60 85 130",         // Azul médio bem visível
  
  // Borda clara (hover, destaque)
  light: "80 110 170",          // Azul claro bem visível
  
  // Borda escura (sombras, profundidade)
  dark: "40 60 95",             // Azul escuro com contraste
  
  // Borda de foco (inputs, elementos interativos)
  focus: "59 130 246",          // Blue-500 (Azul brilhante)
},

// ===== GRADIENTES =====
gradients: {
  // Gradiente primário (hero, CTAs)
  primary: "linear-gradient(135deg, rgb(15 45 90) 0%, rgb(30 100 200) 100%)",
  
  // Gradiente secundário (cards, destaques)
  secondary: "linear-gradient(135deg, rgb(30 100 200) 0%, rgb(59 130 246) 100%)",
  
  // Gradiente de destaque
  accent: "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(30 100 200) 100%)",
  
  // Gradiente de background
  background: "linear-gradient(135deg, rgb(10 15 25) 0%, rgb(20 28 42) 50%, rgb(30 42 63) 100%)",
},

// ===== FUNDO ANIMADO (Canvas + Orbs) =====
animatedBackground: {
  // Cor do grid animado (formato RGB para canvas)
  gridColor: "30, 100, 200",         // Azul profissional
  gridOpacity: 0.02,  // Muito mais discreto
  
  // Cor das partículas (formato RGB para canvas)
  particleColor: "59, 130, 246",     // Azul céu
  particleOpacity: 0.15,  // Reduzido para ser mais sutil
  
  // Cor das linhas de conexão entre partículas
  connectionColor: "30, 100, 200",   // Azul profissional
  connectionOpacity: 0.05,  // Muito mais discreto
  
  // Cores dos orbs (formato hexadecimal)
  orb1Color: "#0f2d5a",              // Navy-900
  orb2Color: "#1e64c8",              // Blue-600
  orbCenterGradient: "linear-gradient(135deg, #0f2d5a 0%, #1e64c8 100%)",
  
  // Gradiente de fundo base
  backgroundGradient: "linear-gradient(135deg, rgb(10, 15, 25) 0%, rgb(20, 28, 42) 50%, rgb(10, 15, 25) 100%)",
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
  glow: "0 0 30px rgb(30 100 200 / 0.3)",        // Glow azul
  glowPrimary: "0 0 30px rgb(59 130 246 / 0.3)", // Glow azul primário
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

