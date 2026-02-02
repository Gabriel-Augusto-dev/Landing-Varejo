// ========================================
// 🎨 CONFIGURAÇÃO DE LAYOUTS
// ========================================
// EDITE ESTE ARQUIVO PARA ESCOLHER OS LAYOUTS DE CADA SEÇÃO
// Basta trocar o texto pelas opções disponíveis!

export const layouts = {
  // ========================================
  // 🎯 HERO (Primeira seção)
  // ========================================
  // Opções disponíveis:
  // - "gradient" → Gradientes animados com grid pattern (RECOMENDADO)
  // - "split" → Metade texto, metade imagem
  // - "centered" → Tudo centralizado, minimalista
  // - "minimal" → Super limpo, tipografia grande
  hero: "gradient",

  // ========================================
  // ✨ BENEFÍCIOS
  // ========================================
  // Opções disponíveis:
  // - "cards" → Cards flutuantes com badges no topo (RECOMENDADO)
  // - "horizontal" → 3 cards em linha horizontal
  // - "stacked" → Cards empilhados verticalmente
  benefits: "cards",

  // ========================================
  // ⭐ DEPOIMENTOS
  // ========================================
  // Opções disponíveis:
  // - "carousel" → Carrossel deslizante (RECOMENDADO)
  // - "grid" → Grade 3 colunas
  // - "masonry" → Estilo Pinterest (altura variada)
  testimonials: "carousel",

  // ========================================
  // ❓ FAQ
  // ========================================
  // Opções disponíveis:
  // - "accordion" → Acordeon que abre/fecha (RECOMENDADO)
  // - "grid" → Grade 2 colunas com tudo aberto
  // - "tabs" → Menu lateral com conteúdo à direita
  faq: "accordion",

  // ========================================
  // 📣 CTA (Chamada para ação)
  // ========================================
  // Opções disponíveis:
  // - "split" → Metade texto, metade imagem circular (RECOMENDADO)
  // - "centered" → Card centralizado
  // - "banner" → Banner horizontal verde
  cta: "split",

  // ========================================
  // 📄 FOOTER (Rodapé)
  // ========================================
  // Opções disponíveis:
  // - "multi-column" → 4 colunas com links (RECOMENDADO)
  // - "centered" → Tudo centralizado
  // - "minimal" → Super simples, uma linha
  footer: "multi-column",
};

// ========================================
// 📋 EXEMPLOS DE COMBINAÇÕES
// ========================================

// MODERNO E COMPLETO (recomendado):
// hero: "gradient"
// benefits: "cards"
// testimonials: "carousel"
// faq: "accordion"
// cta: "split"
// footer: "multi-column"

// MINIMALISTA E LIMPO:
// hero: "minimal"
// benefits: "horizontal"
// testimonials: "grid"
// faq: "grid"
// cta: "centered"
// footer: "minimal"

// TRADICIONAL E PROFISSIONAL:
// hero: "split"
// benefits: "stacked"
// testimonials: "masonry"
// faq: "tabs"
// cta: "banner"
// footer: "multi-column"

// ========================================
// 🎨 DICAS
// ========================================
// - Salve o arquivo e a página atualiza automaticamente
// - Teste diferentes combinações para ver qual prefere
// - Layouts "RECOMENDADO" são os mais modernos e interativos
// - Você pode mudar os layouts a qualquer momento!

export type LayoutOptions = {
  hero: "gradient" | "split" | "centered" | "minimal";
  benefits: "cards" | "horizontal" | "stacked";
  testimonials: "carousel" | "grid" | "masonry";
  faq: "accordion" | "grid" | "tabs";
  cta: "split" | "centered" | "banner";
  footer: "multi-column" | "centered" | "minimal";
};
