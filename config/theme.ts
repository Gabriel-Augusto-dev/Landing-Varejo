export const theme = {
  colors: {
    primary: "245 158 11",
    secondary: "249 115 22",
    accent: "252 211 77",
    success: "234 88 12",
    warning: "250 204 21",
    error: "239 68 68",
  },

  backgrounds: {
    main: "7 11 22",
    card: "15 23 42",
    hover: "30 41 59",
    alternate: "10 16 30",
    light: "243 244 246",
  },

  text: {
    primary: "255 255 255",
    secondary: "226 232 240",
    tertiary: "203 213 225",
    muted: "148 163 184",
    inverted: "15 23 42",
  },

  borders: {
    default: "51 65 85",
    light: "100 116 139",
    dark: "30 41 59",
    focus: "245 158 11",
  },

  gradients: {
    primary: "linear-gradient(135deg, rgb(249 115 22) 0%, rgb(245 158 11) 100%)",
    secondary: "linear-gradient(135deg, rgb(245 158 11) 0%, rgb(252 211 77) 100%)",
    accent: "linear-gradient(135deg, rgb(249 115 22) 0%, rgb(252 211 77) 100%)",
    background: "linear-gradient(135deg, rgb(7 11 22) 0%, rgb(10 16 30) 45%, rgb(15 23 42) 100%)",
  },

  animatedBackground: {
    gridColor: "245, 158, 11",
    gridOpacity: 0.02,
    particleColor: "249, 115, 22",
    particleOpacity: 0.14,
    connectionColor: "245, 158, 11",
    connectionOpacity: 0.05,
    orb1Color: "#f59e0b",
    orb2Color: "#f97316",
    orbCenterGradient: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
    backgroundGradient: "linear-gradient(135deg, rgb(7, 11, 22) 0%, rgb(10, 16, 30) 45%, rgb(15, 23, 42) 100%)",
  },

  typography: {
    fontFamily: {
      sans: "var(--font-sans), system-ui, sans-serif",
      heading: "var(--font-heading), system-ui, sans-serif",
      mono: "var(--font-mono), ui-monospace, monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
  },

  spacing: {
    section: {
      mobile: "3rem",
      tablet: "4rem",
      desktop: "6rem",
    },
    container: {
      mobile: "1rem",
      tablet: "1.5rem",
      desktop: "2rem",
    },
  },

  borderRadius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.15)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.2)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.35)",
    glow: "0 0 30px rgb(249 115 22 / 0.25)",
    glowPrimary: "0 0 30px rgb(245 158 11 / 0.25)",
  },

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

  opacity: {
    disabled: "0.5",
    hover: "0.8",
    active: "0.9",
  },
};
