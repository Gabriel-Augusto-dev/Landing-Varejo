# 🎨 Sistema de 10 Layouts por Seção

## ✅ Implementado

Criei **10 layouts diferentes** para cada seção principal. Agora você tem centenas de combinações possíveis!

## 📁 Estrutura Criada

### Hero (10 layouts)
**Arquivo:** `components/sections/hero/HeroLayouts.tsx`

1. **videoFull** - Vídeo fullscreen como background
2. **splitStats** - Split com mini estatísticas
3. **centeredCards** - Centralizado com cards de features
4. **minimalTypo** - Tipografia gigante e minimalista
5. **gridGallery** - Split com grid de galeria
6. **gradientMesh** - Gradient mesh animado + vídeo
7. **sideFloat** - Imagem flutuante lateral com glow
8. **twoColBenefits** - Duas colunas de benefícios
9. **testimonial** - Hero com depoimento em destaque
10. **process** - Hero com processo passo a passo

### Authority (10 layouts)
**Arquivo:** `components/sections/authority/AuthorityLayouts.tsx`

1. **gridBadges** - Grid puro só com badges
2. **videoLeft** - Vídeo esquerda + lista direita
3. **centeredPartners** - Centralizado com logos parceiros
4. **videoCenter** - Vídeo centro + badges laterais
5. **minimalList** - Lista minimalista com bordas
6. **imageBg** - Imagem background com glassmorphism
7. **horizontal** - Scroll horizontal de cards
8. **splitStats** - Split com estatísticas integradas
9. **compact** - Cards compactos + logos parceiros
10. **banner** - Banner full width com ícones

### Services (10 layouts)
**Arquivo:** `components/sections/services/ServicesLayouts.tsx`

1. **gridGallery** - Grid cards + galeria integrada
2. **listImage** - Lista esquerda + imagens direita
3. **tabs** - Abas com detalhes de cada serviço
4. **carousel** - Carrossel horizontal deslizante
5. **accordion** - Lista expansível (accordion)
6. **twoCol** - Duas colunas compactas
7. **minimal** - Lista minimalista com bordas
8. **masonry** - Layout masonry estilo Pinterest
9. **featured** - Serviço em destaque + lista lateral
10. **pricing** - Estilo pricing cards com botão

## 🚀 Como Usar

### 1. Edite o arquivo `config/layouts.ts`:

```typescript
export const layouts = {
  hero: "videoFull",        // Troque aqui!
  authority: "gridBadges",  // Troque aqui!
  services: "carousel",     // Troque aqui!
  // ...
};
```

### 2. Opções disponíveis por seção:

#### Hero:
- `gradient`, `split`, `centered`, `minimal`, `image`, `imageSplit`
- `videoFull`, `splitStats`, `centeredCards`, `minimalTypo`
- `gridGallery`, `gradientMesh`, `sideFloat`, `twoColBenefits`
- `testimonial`, `process`

#### Authority:
- `grid`, `stats`, `minimal`, `video`, `videoHero`
- `gridBadges`, `videoLeft`, `centeredPartners`, `videoCenter`
- `minimalList`, `imageBg`, `horizontal`, `splitStats`
- `compact`, `banner`

#### Services:
- `cards`, `accordion`, `grid`, `withGallery`, `galleryFull`
- `gridGallery`, `listImage`, `tabs`, `carousel`
- `twoCol`, `minimal`, `masonry`, `featured`, `pricing`

## 📊 Total de Combinações

Com 10 layouts por seção principal:
- **Hero**: 16 opções
- **Authority**: 15 opções  
- **Services**: 14 opções

**Total de combinações possíveis: 3.360 layouts únicos!**

## 🔧 Próximos Passos

Para implementar os 10 layouts nas seções restantes:
- Stats (10 layouts)
- Process (10 layouts)
- Features (10 layouts)
- Benefits (10 layouts)
- Testimonials (10 layouts)
- FAQ (10 layouts)
- CTA (10 layouts)

Todos seguem o mesmo padrão:
1. Criar arquivo `XxxLayouts.tsx` na pasta da seção
2. Exportar 10 funções com diferentes layouts
3. Atualizar o `index.tsx` da seção para exportar os novos layouts
4. Documentar no `config/layouts.ts`

## ✨ Recursos de Cada Layout

Cada layout inclui:
- ✅ Responsivo (mobile-first)
- ✅ Animações e hover effects
- ✅ Suporte a imagens E vídeos
- ✅ Cores do tema (theme.ts)
- ✅ Conteúdo do config (content.ts)
- ✅ Glassmorphism e efeitos modernos
- ✅ Acessibilidade

## 🎯 Exemplos de Uso

### Página Tech Moderna
```typescript
hero: "videoFull"
authority: "videoCenter"
services: "carousel"
```

### Página Minimalista
```typescript
hero: "minimalTypo"
authority: "minimalList"
services: "minimal"
```

### Página Conversão Máxima
```typescript
hero: "testimonial"
authority: "banner"
services: "pricing"
```

## 💡 Dicas

1. **Teste combinações**: Mude um layout por vez e veja o resultado
2. **Mantenha consistência**: Não misture estilos muito diferentes
3. **Mobile sempre funciona**: Todos os layouts são responsivos
4. **Performance**: Layouts com vídeo podem ser mais pesados

## 📝 Nota Importante

Este é um sistema escalável! Para adicionar mais layouts:

1. Crie nova função no arquivo `XxxLayouts.tsx`
2. Adicione no export do `index.tsx`
3. Documente no `config/layouts.ts`
4. Pronto! ✅

---

**🎨 Sistema criado em:** Janeiro 2026
**📍 Arquivos principais:**
- `components/sections/hero/HeroLayouts.tsx`
- `components/sections/authority/AuthorityLayouts.tsx`
- `components/sections/services/ServicesLayouts.tsx`
- `config/layouts.ts`
