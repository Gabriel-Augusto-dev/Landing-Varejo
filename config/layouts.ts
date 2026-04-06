// ========================================
// 🎨 CONFIGURAÇÃO DE LAYOUTS
// ========================================
// ESTE ARQUIVO CONTROLA O VISUAL DE CADA SEÇÃO DA LANDING PAGE
// Basta trocar o nome do layout para mudar completamente a aparência!
//
// ⚡ COMO USAR:
// 1. Escolha uma seção abaixo (ex: hero, benefits, etc)
// 2. Troque o valor por uma das opções disponíveis
// 3. Salve o arquivo e veja a mudança instantânea!
//
// Exemplo: hero: "gradient" → hero: "split"
// ========================================

export const layouts = {
  
  // ========================================
  // 1️⃣ HERO - Chamar atenção + proposta de valor
  // ========================================
  // Esta é a PRIMEIRA coisa que o visitante vê
  // Escolha o layout que mais chama atenção!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌──────────────────┬────────────────────────────────────────────┐
  // │ "gradient"       │ ⭐ CLÁSSICO - Gradientes animados         │
  // │ "split"          │ Metade texto + metade visual com stats    │
  // │ "centered"       │ Tudo centralizado, simples e direto        │
  // │ "minimal"        │ Minimalista, tipografia gigante            │
  // │ "image"          │ Imagem background com overlay escuro       │
  // │ "imageSplit"     │ Texto esquerdo + imagem direito com glow   │
  // │ "videoFull"      │ 🆕 Vídeo fullscreen como background        │
  // │ "splitStats"     │ 🆕 Split com mini estatísticas integradas  │
  // │ "centeredCards"  │ 🆕 Centralizado com cards de features      │
  // │ "minimalTypo"    │ 🆕 Tipografia gigante e minimalista        │
  // │ "gridGallery"    │ 🆕 Split com grid de galeria de imagens    │
  // │ "gradientMesh"   │ 🆕 Gradient mesh animado + vídeo central   │
  // │ "sideFloat"      │ 🆕 Imagem flutuante lateral com glow       │
  // │ "twoColBenefits" │ 🆕 Duas colunas de benefícios integrados   │
  // │ "testimonial"    │ 🆕 Hero com depoimento em destaque         │
  // │ "process"        │ 🆕 Hero com processo passo a passo         │
  // └──────────────────┴────────────────────────────────────────────┘
  hero: "imageSplit",
  
  // ========================================
  // 2️⃣ AUTORIDADE/PROVA - "Por que confiar em você?"
  // ========================================
  // Mostra credibilidade, certificações e parceiros
  // Essencial para construir confiança logo no início!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌──────────────────────┬──────────────────────────────────────┐
  // │ "grid"               │ ⭐ Grid 4 colunas com badges grandes │
  // │ "stats"              │ Horizontal compacto com ícones       │
  // │ "minimal"            │ Clean e corporativo, simples         │
  // │ "video"              │ Vídeo direita + badges esquerda      │
  // │ "videoHero"          │ Vídeo grande destaque acima          │
  // │ "gridBadges"         │ 🆕 Grid puro só com badges           │
  // │ "videoLeft"          │ 🆕 Vídeo esquerda + lista direita    │
  // │ "centeredPartners"   │ 🆕 Centralizado com logos parceiros  │
  // │ "videoCenter"        │ 🆕 Vídeo centro + badges laterais    │
  // │ "minimalList"        │ 🆕 Lista minimalista com bordas      │
  // │ "imageBg"            │ 🆕 Imagem background com glassmorphism│
  // │ "horizontal"         │ 🆕 Scroll horizontal de cards        │
  // │ "splitStats"         │ 🆕 Split com estatísticas integradas │
  // │ "compact"            │ 🆕 Cards compactos + logos parceiros │
  // │ "banner"             │ 🆕 Banner full width com ícones      │
  // └──────────────────────┴──────────────────────────────────────┘
  authority: "splitStats",
  
  // ========================================
  // 3️⃣ SERVIÇOS/SOLUÇÃO - O que exatamente você faz
  // ========================================
  // Apresenta seus serviços de forma clara e atrativa
  // Cada serviço com CTA direto para WhatsApp!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────────┬────────────────────────────────────────────┐
  // │ "cards"         │ ⭐ Cards 3D interativos com hover         │
  // │ "accordion"     │ Lista expansível, economiza espaço        │
  // │ "grid"          │ Grid simples, todos visíveis              │
  // │ "withGallery"   │ Cards + galeria de fotos/vídeos abaixo    │
  // │ "galleryFull"   │ Apenas galeria visual, portfólio          │
  // │ "gridGallery"   │ 🆕 Grid cards + galeria integrada         │
  // │ "listImage"     │ 🆕 Lista esquerda + imagens direita       │
  // │ "tabs"          │ 🆕 Abas com detalhes de cada serviço      │
  // │ "carousel"      │ 🆕 Carrossel horizontal deslizante        │
  // │ "twoCol"        │ 🆕 Duas colunas compactas                 │
  // │ "minimal"       │ 🆕 Lista minimalista com bordas           │
  // │ "masonry"       │ 🆕 Layout masonry estilo Pinterest        │
  // │ "featured"      │ 🆕 Serviço em destaque + lista lateral    │
  // │ "pricing"       │ 🆕 Estilo pricing cards com botão         │
  // └─────────────────┴────────────────────────────────────────────┘
  services: "withGallery",
  
  // ========================================
  // 4️⃣ BENEFÍCIOS - O que a pessoa ganha
  // ========================================
  // Mostra o que o CLIENTE GANHA (não o que você faz)
  // Destaque os RESULTADOS e transformações!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────────┬────────────────────────────────────────────┐
  // │ "cards"         │ ⭐ CLÁSSICO - Cards flutuantes com         │
  // │                 │ badges no topo, ícones, tags coloridas,   │
  // │                 │ números grandes, hover effects 3D         │
  // ├─────────────────┼────────────────────────────────────────────┤
  // │ "horizontal"    │ 3 cards em linha horizontal, layout       │
  // │                 │ mais compacto e direto                     │
  // ├─────────────────┼────────────────────────────────────────────┤
  // │ "stacked"       │ Cards empilhados verticalmente,           │
  // │                 │ ótimo para ler todos os detalhes          │
  // ├─────────────────┼────────────────────────────────────────────┤
  // │ "withImage"     │ 🆕 MODERNO - Imagem lado esquerdo,        │
  // │                 │ benefícios lado direito, interativo       │
  // ├─────────────────┼────────────────────────────────────────────┤
  // │ "imageHero"     │ 🆕 MODERNO - Imagem grande + grid de      │
  // │                 │ benefits, visual premium moderno          │
  // ├─────────────────┼────────────────────────────────────────────┤
  // │ "imageCards"    │ 🆕 MODERNO - Imagem sticky + cards lado,  │
  // │                 │ layout split responsivo, elegante         │
  // └─────────────────┴────────────────────────────────────────────┘
  benefits: "imageCards",
  
  // ========================================
  // 5️⃣ COMO FUNCIONA - Remove dúvidas e atrito
  // ========================================
  // Mostra o passo a passo do seu atendimento
  // Transparência gera confiança e remove objeções!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────┬──────────────────────────────────────────┐
  // │ "timeline"  │ ⭐ RECOMENDADO - Timeline vertical com  │
  // │             │ linha central, layout zigzag alternado, │
  // │             │ números em círculos gradientes          │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "steps"     │ Horizontal progressivo, setas entre     │
  // │             │ etapas, visual de fluxo contínuo        │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "cards"     │ Grid de cards numerados, clean e        │
  // │             │ corporativo, fácil de escanear          │
  // └─────────────┴──────────────────────────────────────────┘
  process: "timeline",
  
  // ========================================
  // 6️⃣ PROVA SOCIAL - Depoimentos, casos
  // ========================================
  // PROVA SOCIAL - Mostre que outras pessoas confiam!
  // Essencial para conversão
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────┬──────────────────────────────────────────┐
  // │ "carousel"  │ ⭐ RECOMENDADO - Carrossel deslizante   │
  // │             │ com indicadores, auto-slide, interativo │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "grid"      │ Grade de 3 colunas, todos visíveis ao   │
  // │             │ mesmo tempo, bom para muitos depoimentos│
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "masonry"   │ Estilo Pinterest com alturas variadas,  │
  // │             │ visual mais dinâmico e criativo         │
  // └─────────────┴──────────────────────────────────────────┘
  testimonials: "masonry",
  
  // ========================================
  // 7️⃣ CTA FORTE - Direciona para ação
  // ========================================
  // MOMENTO DA CONVERSÃO - Direciona para o WhatsApp!
  // Seção crítica, escolha o mais impactante!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────┬──────────────────────────────────────────┐
  // │ "split"     │ ⭐ RECOMENDADO - Metade texto + metade  │
  // │             │ visual circular, 2 botões, bem completo │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "centered"  │ Card centralizado com foco total no CTA,│
  // │             │ mais minimalista e direto               │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "banner"    │ Banner horizontal verde chamativo,      │
  // │             │ urgência visual, alto contraste         │
  // └─────────────┴──────────────────────────────────────────┘
  cta: "split",
  
  // ========================================
  // 8️⃣ FAQ - Remove objeções finais
  // ========================================
  // REMOVE OBJEÇÕES - Responde dúvidas antes de perguntar
  // Última chance de convencer antes do CTA final!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────┬──────────────────────────────────────────┐
  // │ "accordion" │ ⭐ RECOMENDADO - Acordeon que abre e    │
  // │             │ fecha, economiza espaço, interativo     │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "grid"      │ Grade 2 colunas, todas as respostas     │
  // │             │ visíveis, melhor para poucas perguntas  │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "tabs"      │ Menu lateral com perguntas + conteúdo   │
  // │             │ à direita, layout mais sofisticado      │
  // └─────────────┴──────────────────────────────────────────┘
  faq: "accordion",
  
  // ========================================
  // 📄 FOOTER - Rodapé
  // ========================================
  // Última seção - Links adicionais e informações
  // Também importante para SEO!
  //
  // OPÇÕES DISPONÍVEIS:
  // ┌─────────────┬──────────────────────────────────────────┐
  // │ "multi-     │ ⭐ RECOMENDADO - 4 colunas com logo,    │
  // │ column"     │ links organizados, redes sociais        │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "centered"  │ Tudo centralizado, logo + WhatsApp +    │
  // │             │ redes sociais, mais simples             │
  // ├─────────────┼──────────────────────────────────────────┤
  // │ "minimal"   │ Uma linha só, super clean, ideal para   │
  // │             │ landing pages muito focadas             │
  // └─────────────┴──────────────────────────────────────────┘
  footer: "multi-column",
};

// ========================================
// 📋 RESUMO DAS 8 SEÇÕES
// ========================================
// TODAS AS SEÇÕES SÃO CONFIGURÁVEIS! 🎉
// 
// 1️⃣ Hero → 4 opções: gradient, split, centered, minimal
// 2️⃣ Autoridade → 3 opções: grid, stats, minimal
// 3️⃣ Serviços → 3 opções: cards, accordion, grid
// 4️⃣ Benefícios → 3 opções: cards, horizontal, stacked
// 5️⃣ Como Funciona → 3 opções: timeline, steps, cards
// 6️⃣ Prova Social → 3 opções: carousel, grid, masonry
// 7️⃣ CTA → 3 opções: split, centered, banner
// 8️⃣ FAQ → 3 opções: accordion, grid, tabs
// + Footer → 3 opções: multi-column, centered, minimal
//
// TOTAL DE COMBINAÇÕES POSSÍVEIS: 4×3×3×3×3×3×3×3×3 = 26.244 layouts!

// ========================================
// 📋 EXEMPLOS DE COMBINAÇÕES PRONTAS
// ========================================
// Copie e cole UMA das combinações abaixo:

// ┌─────────────────────────────────────────────────────────┐
// │ 🚀 SUPER MODERNO E INTERATIVO (RECOMENDADO)             │
// ├─────────────────────────────────────────────────────────┤
// │ hero: "gradient"                                         │
// │ authority: "grid"                                        │
// │ services: "cards"                                        │
// │ benefits: "cards"                                        │
// │ process: "timeline"                                      │
// │ testimonials: "carousel"                                 │
// │ faq: "accordion"                                         │
// │ cta: "split"                                            │
// │ footer: "multi-column"                                   │
// └─────────────────────────────────────────────────────────┘

// ┌─────────────────────────────────────────────────────────┐
// │ 🎨 MINIMALISTA E ELEGANTE                               │
// ├─────────────────────────────────────────────────────────┤
// │ hero: "minimal"                                          │
// │ authority: "minimal"                                     │
// │ services: "grid"                                         │
// │ benefits: "horizontal"                                   │
// │ process: "cards"                                         │
// │ testimonials: "grid"                                     │
// │ faq: "grid"                                             │
// │ cta: "centered"                                         │
// │ footer: "minimal"                                        │
// └─────────────────────────────────────────────────────────┘

// ┌─────────────────────────────────────────────────────────┐
// │ 💼 PROFISSIONAL E CORPORATIVO                           │
// ├─────────────────────────────────────────────────────────┤
// │ hero: "split"                                            │
// │ authority: "stats"                                       │
// │ services: "accordion"                                    │
// │ benefits: "stacked"                                      │
// │ process: "steps"                                         │
// │ testimonials: "masonry"                                  │
// │ faq: "tabs"                                             │
// │ cta: "banner"                                           │
// │ footer: "multi-column"                                   │
// └─────────────────────────────────────────────────────────┘

// ┌─────────────────────────────────────────────────────────┐
// │ ⚡ CONVERSÃO MÁXIMA (FOCO TOTAL EM VENDAS)              │
// ├─────────────────────────────────────────────────────────┤
// │ hero: "gradient"                                         │
// │ authority: "grid"                                        │
// │ services: "cards"                                        │
// │ benefits: "cards"                                        │
// │ process: "timeline"                                      │
// │ testimonials: "carousel"                                 │
// │ faq: "accordion"                                         │
// │ cta: "banner"                                           │
// │ footer: "centered"                                       │
// └─────────────────────────────────────────────────────────┘

// ========================================
// 🎯 DICAS IMPORTANTES
// ========================================
// ✅ Salve o arquivo e a página atualiza automaticamente
// ✅ Teste diferentes combinações até encontrar a ideal
// ✅ "gradient" + "grid" + "cards" = combo mais moderno
// ✅ Use layouts consistentes (não misture demais)
// ✅ Mobile sempre fica bom independente do layout!
//
// ⚠️ LEMBRE-SE:
// - TODAS as 8 seções são configuráveis agora!
// - Mude SÓ O NOME entre aspas
// - Respeite as aspas e vírgulas
// - Teste em diferentes dispositivos
// - Para alterar CONTEÚDO, edite config/content.ts
//
// 🚀 Experimente e veja qual converte mais!
// ========================================

export type LayoutOptions = {
  hero: "gradient" | "split" | "centered" | "minimal";
  authority: "grid" | "stats" | "minimal";
  services: "cards" | "accordion" | "grid";
  benefits: "cards" | "horizontal" | "stacked";
  process: "timeline" | "steps" | "cards";
  testimonials: "carousel" | "grid" | "masonry";
  faq: "accordion" | "grid" | "tabs";
  cta: "split" | "centered" | "banner";
  footer: "multi-column" | "centered" | "minimal";
};
