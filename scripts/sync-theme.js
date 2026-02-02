#!/usr/bin/env node

/**
 * Script para sincronizar config/theme.ts com app/globals.css
 * Uso: npm run sync-theme
 */

const fs = require('fs');
const path = require('path');

const THEME_PATH = path.join(__dirname, '../config/theme.ts');
const CSS_PATH = path.join(__dirname, '../app/globals.css');

function extractBlock(themeContent, blockName) {
  const startIndex = themeContent.indexOf(`${blockName}:`);
  if (startIndex === -1) {
    return null;
  }

  const braceStart = themeContent.indexOf('{', startIndex);
  if (braceStart === -1) {
    return null;
  }

  let depth = 0;
  for (let i = braceStart; i < themeContent.length; i++) {
    const char = themeContent[i];
    if (char === '{') depth += 1;
    if (char === '}') depth -= 1;
    if (depth === 0) {
      return themeContent.slice(braceStart + 1, i);
    }
  }

  return null;
}

function extractKeyValues(blockContent) {
  const values = {};
  if (!blockContent) return values;

  const lines = blockContent.split('\n');
  for (const line of lines) {
    const match = line.match(/(\w+):\s*"([^"]+)"/);
    if (match) {
      const [, key, value] = match;
      values[key] = value;
    }
  }

  return values;
}

function extractTheme(themeContent) {
  const colorsBlock = extractBlock(themeContent, 'colors');
  const backgroundsBlock = extractBlock(themeContent, 'backgrounds');
  const textBlock = extractBlock(themeContent, 'text');
  const bordersBlock = extractBlock(themeContent, 'borders');

  return {
    colors: extractKeyValues(colorsBlock),
    backgrounds: extractKeyValues(backgroundsBlock),
    text: extractKeyValues(textBlock),
    borders: extractKeyValues(bordersBlock),
  };
}

function updateGlobalsCss(theme) {
  let css = fs.readFileSync(CSS_PATH, 'utf-8');
  
  // Atualizar variáveis no :root
  const varsToUpdate = {
    // Cores principais
    '--primary': theme.colors.primary,
    '--secondary': theme.colors.secondary,
    '--accent': theme.colors.accent,
    '--success': theme.colors.success,
    '--warning': theme.colors.warning,
    '--error': theme.colors.error,

    // Backgrounds
    '--bg-main': theme.backgrounds.main,
    '--bg-card': theme.backgrounds.card,
    '--bg-hover': theme.backgrounds.hover,
    '--bg-alternate': theme.backgrounds.alternate,
    '--bg-light': theme.backgrounds.light,

    // Textos
    '--text-primary': theme.text.primary,
    '--text-secondary': theme.text.secondary,
    '--text-tertiary': theme.text.tertiary,
    '--text-muted': theme.text.muted,
    '--text-inverted': theme.text.inverted,

    // Bordas
    '--border-default': theme.borders.default,
    '--border-light': theme.borders.light,
    '--border-dark': theme.borders.dark,
    '--border-focus': theme.borders.focus,

    // Aliases para compatibilidade
    '--bg': theme.backgrounds.main,
    '--bg-dark': theme.backgrounds.main,
    '--border': theme.borders.default,
  };
  
  for (const [varName, value] of Object.entries(varsToUpdate)) {
    if (!value) continue;
    const regex = new RegExp(`(${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}):\\s*[^;]+;`, 'g');
    css = css.replace(regex, `$1: ${value};`);
  }
  
  fs.writeFileSync(CSS_PATH, css, 'utf-8');
}

try {
  console.log('\n🎨 Sincronizando cores do theme.ts para globals.css...\n');
  
  const themeContent = fs.readFileSync(THEME_PATH, 'utf-8');
  const theme = extractTheme(themeContent);
  
  console.log('Cores encontradas no theme.ts:');
  Object.entries(theme.colors).forEach(([key, value]) => {
    console.log(`  colors.${key}: rgb(${value})`);
  });
  Object.entries(theme.backgrounds).forEach(([key, value]) => {
    console.log(`  backgrounds.${key}: rgb(${value})`);
  });
  Object.entries(theme.text).forEach(([key, value]) => {
    console.log(`  text.${key}: rgb(${value})`);
  });
  Object.entries(theme.borders).forEach(([key, value]) => {
    console.log(`  borders.${key}: rgb(${value})`);
  });
  
  updateGlobalsCss(theme);
  
  console.log('\n✅ Sincronização concluída!');
  console.log('As cores do globals.css foram atualizadas.');
  console.log('\n⚠️  Reinicie o servidor (npm run dev) para ver as mudanças.\n');
  
} catch (error) {
  console.error('\n❌ Erro:', error.message);
  process.exit(1);
}
