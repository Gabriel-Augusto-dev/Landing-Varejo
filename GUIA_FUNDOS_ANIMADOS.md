# 🎨 Guia Completo: Fundos Animados Configuráveis

Todos os fundos animados agora estão **100% centralizados** em `config/content.ts`. Você pode alterar tudo sem mexer no código!

---

## 📍 Localização da Configuração

Arquivo: `config/content.ts` (linhas 1-45)

```typescript
export const content = {
  animatedBackground: {
    enabled: true,
    orbs: [ ... ],
    backgroundGradient: "...",
    backgroundOpacity: 1,
    mouseParallax: true,
  },
  // ... resto das configurações
}
```

---

## 🎯 Como Usar (Passo a Passo)

### 1️⃣ **Ativar/Desativar o Fundo Animado**

```typescript
animatedBackground: {
  enabled: true,  // ✅ Mostra fundo animado
  // enabled: false,  // ❌ Desativa fundo animado
}
```

---

### 2️⃣ **Alterar a Cor dos Orbes**

Cada orbe tem 3 propriedades de cor:

#### Exemplo 1: Alterar cor do primeiro orbe (azul → vermelho)

```typescript
orbs: [
  {
    position: "top-1/4 left-1/4",
    size: "w-96 h-96",
    color: "bg-red-500",  // ← Alterou de bg-theme-primary para vermelho
    opacity: 0.2,
    blur: "blur-3xl",
    parallax: 1,
    animation: true,
  },
  // ... outros orbes
]
```

#### Cores disponíveis no tema (em `config/theme.ts`):

```typescript
// Usar as cores do tema:
color: "bg-theme-primary"     // Azul principal
color: "bg-theme-secondary"   // Azul claro
color: "bg-theme-accent"      // Azul mais claro

// Ou cores Tailwind padrão:
color: "bg-red-500"
color: "bg-green-500"
color: "bg-purple-500"
color: "bg-pink-500"
color: "bg-yellow-500"
// ... qualquer cor Tailwind
```

---

### 3️⃣ **Alterar a Opacidade (Transparência)**

```typescript
orbs: [
  {
    opacity: 0.5,  // 0 = invisível | 1 = opaco | 0.5 = meio transparente
    // Valores recomendados: 0.1, 0.2, 0.3, 0.4, 0.5
  }
]
```

---

### 4️⃣ **Alterar o Tamanho dos Orbes**

```typescript
orbs: [
  {
    size: "w-96 h-96",    // Tamanho atual
    // Opções:
    // size: "w-64 h-64",   // Pequeno
    // size: "w-128 h-128", // Médio-pequeno
    // size: "w-256 h-256", // Médio
    // size: "w-384 h-384", // Grande
    // size: "w-512 h-512", // Muito grande
  }
]
```

---

### 5️⃣ **Alterar a Posição dos Orbes**

```typescript
orbs: [
  {
    position: "top-1/4 left-1/4",  // Posição atual
    // Outras opções:
    // position: "top-0 left-0",          // Canto superior esquerdo
    // position: "top-0 right-0",         // Canto superior direito
    // position: "bottom-0 left-0",       // Canto inferior esquerdo
    // position: "bottom-0 right-0",      // Canto inferior direito
    // position: "top-1/2 left-1/2",      // Centro
    // position: "top-1/3 right-1/3",     // Personalizado
  }
]
```

---

### 6️⃣ **Alterar o Desfoque (Blur)**

```typescript
orbs: [
  {
    blur: "blur-3xl",  // Desfoque atual (muito desfocado)
    // Opções:
    // blur: "blur-sm",     // Pouco desfoque
    // blur: "blur-md",     // Médio
    // blur: "blur-lg",     // Grande
    // blur: "blur-xl",     // Muito grande
    // blur: "blur-2xl",    // Gigante
    // blur: "blur-3xl",    // Máximo (recomendado)
  }
]
```

---

### 7️⃣ **Ativar/Desativar Animação de Pulso**

```typescript
orbs: [
  {
    animation: true,   // ✅ Orbe pulsa suavemente
    // animation: false,  // ❌ Orbe fica estático
  }
]
```

---

### 8️⃣ **Alterar Efeito de Parallax (Movimento do Mouse)**

```typescript
orbs: [
  {
    parallax: 1,    // Movimento normal
    parallax: -1,   // Movimento inverso
    parallax: 0.5,  // Movimento lento
    parallax: 2,    // Movimento rápido
  }
]
```

Desativar parallax do mouse completamente:

```typescript
mouseParallax: false,  // Desativa movimento do mouse em todos os orbes
```

---

### 9️⃣ **Alterar Gradiente de Fundo Base**

```typescript
animatedBackground: {
  // Fundo atual (escuro)
  backgroundGradient: "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950",

  // Opções de gradientes:
  // Gradiente claro:
  backgroundGradient: "bg-linear-to-br from-blue-50 via-blue-100 to-blue-50",

  // Gradiente roxo:
  backgroundGradient: "bg-linear-to-br from-purple-950 via-purple-900 to-purple-950",

  // Gradiente verde:
  backgroundGradient: "bg-linear-to-br from-green-950 via-green-900 to-green-950",

  // Gradiente vermelho:
  backgroundGradient: "bg-linear-to-br from-red-950 via-red-900 to-red-950",

  // Gradiente personalizado (3 cores):
  backgroundGradient: "bg-linear-to-br from-[cor1] via-[cor2] to-[cor3]",
}
```

---

### 🔟 **Alterar Opacidade do Fundo Base**

```typescript
animatedBackground: {
  backgroundOpacity: 1,     // Fundo totalmente visível
  backgroundOpacity: 0.8,   // Um pouco transparente
  backgroundOpacity: 0.5,   // Meio transparente
  backgroundOpacity: 0.2,   // Muito transparente
}
```

---

## 🎨 Exemplos Pré-configurados

### Tema Vermelho Energético
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

### Tema Roxo Místico
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

### Tema Verde Profissional
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

## 🚀 Dica Final: Copiar e Colar Rápido

Para usar um dos temas pré-configurados:

1. Abra `config/content.ts`
2. Encontre a seção `animatedBackground`
3. Apague tudo dentro de `animatedBackground: { ... }`
4. Cole um dos exemplos acima
5. Salve o arquivo

**Pronto!** O fundo vai mudar instantaneamente (com hot reload do Next.js).

---

## ❓ Dúvidas Frequentes

**P: Como desativar o fundo animado completamente?**
R: Altere `enabled: false` em `animatedBackground`

**P: O efeito do mouse não está funcionando?**
R: Verifique se `mouseParallax: true` está definido

**P: Como adicionar um 4º orbe?**
R: Copie um dos 3 orbes existentes e cole um novo dentro de `orbs: [ ... ]`

**P: Qual é a diferença entre `parallax: 1` e `parallax: -1`?**
R: `1` move na mesma direção do mouse, `-1` move na direção oposta

---

**Tudo pronto! Agora você controla totalmente os fundos animados via `config/content.ts`! 🎉**
