# 🎨 Configuração de Fundos Animados - Template Rápido

Cole um destes blocos em `config/content.ts` para customizar os fundos!

---

## 🔵 TEMA AZUL (Padrão)
```typescript
animatedBackground: {
  enabled: true,
  orbs: [
    {
      position: "top-1/4 left-1/4",
      size: "w-96 h-96",
      color: "bg-theme-primary",
      opacity: 0.2,
      blur: "blur-3xl",
      parallax: 1,
      animation: true,
    },
    {
      position: "bottom-1/4 right-1/4",
      size: "w-96 h-96",
      color: "bg-theme-secondary",
      opacity: 0.2,
      blur: "blur-3xl",
      parallax: -1,
      animation: true,
    },
    {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-512 h-512",
      color: "bg-gradient-to-r from-theme-primary to-theme-secondary",
      opacity: 0.1,
      blur: "blur-3xl",
      parallax: 0.5,
      animation: false,
    },
  ],
  backgroundGradient: "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950",
  backgroundOpacity: 1,
  mouseParallax: true,
}
```

---

## 🔴 TEMA VERMELHO ENERGÉTICO
```typescript
animatedBackground: {
  enabled: true,
  orbs: [
    {
      position: "top-1/4 left-1/4",
      size: "w-96 h-96",
      color: "bg-red-500",
      opacity: 0.3,
      blur: "blur-3xl",
      parallax: 1,
      animation: true,
    },
    {
      position: "bottom-1/4 right-1/4",
      size: "w-96 h-96",
      color: "bg-orange-500",
      opacity: 0.3,
      blur: "blur-3xl",
      parallax: -1,
      animation: true,
    },
    {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-512 h-512",
      color: "bg-gradient-to-r from-red-500 to-orange-500",
      opacity: 0.1,
      blur: "blur-3xl",
      parallax: 0.5,
      animation: false,
    },
  ],
  backgroundGradient: "bg-linear-to-br from-red-950 via-red-900 to-red-950",
  backgroundOpacity: 1,
  mouseParallax: true,
}
```

---

## 🟣 TEMA ROXO MÍSTICO
```typescript
animatedBackground: {
  enabled: true,
  orbs: [
    {
      position: "top-1/4 left-1/4",
      size: "w-96 h-96",
      color: "bg-purple-500",
      opacity: 0.25,
      blur: "blur-3xl",
      parallax: 1,
      animation: true,
    },
    {
      position: "bottom-1/4 right-1/4",
      size: "w-96 h-96",
      color: "bg-pink-500",
      opacity: 0.25,
      blur: "blur-3xl",
      parallax: -1,
      animation: true,
    },
    {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-512 h-512",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      opacity: 0.1,
      blur: "blur-3xl",
      parallax: 0.5,
      animation: false,
    },
  ],
  backgroundGradient: "bg-linear-to-br from-purple-950 via-purple-900 to-purple-950",
  backgroundOpacity: 1,
  mouseParallax: true,
}
```

---

## 🟢 TEMA VERDE PROFISSIONAL
```typescript
animatedBackground: {
  enabled: true,
  orbs: [
    {
      position: "top-1/4 left-1/4",
      size: "w-96 h-96",
      color: "bg-green-500",
      opacity: 0.2,
      blur: "blur-3xl",
      parallax: 1,
      animation: true,
    },
    {
      position: "bottom-1/4 right-1/4",
      size: "w-96 h-96",
      color: "bg-emerald-500",
      opacity: 0.2,
      blur: "blur-3xl",
      parallax: -1,
      animation: true,
    },
    {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-512 h-512",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      opacity: 0.1,
      blur: "blur-3xl",
      parallax: 0.5,
      animation: false,
    },
  ],
  backgroundGradient: "bg-linear-to-br from-green-950 via-green-900 to-green-950",
  backgroundOpacity: 1,
  mouseParallax: true,
}
```

---

## ⚫ SEM FUNDO ANIMADO
```typescript
animatedBackground: {
  enabled: false,  // Desativa tudo
  // ... resto não importa
}
```

---

## 🎯 MINIMALISTA (Apenas gradiente, sem orbes)
```typescript
animatedBackground: {
  enabled: true,
  orbs: [],  // Array vazio = sem orbes
  backgroundGradient: "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950",
  backgroundOpacity: 1,
  mouseParallax: false,
}
```

---

**💡 Dica**: Copie e cole um dos blocos acima em `config/content.ts`, substituindo o bloco `animatedBackground` existente!
