Write-Host "`n🔴 APLICANDO TEMA VERMELHO...`n" -ForegroundColor Red

Write-Host "📋 Checando arquivos..." -ForegroundColor Yellow
if (Test-Path "app/globals.css") {
    Write-Host "  ✅ globals.css encontrado" -ForegroundColor Green
} else {
    Write-Host "  ❌ globals.css não encontrado!" -ForegroundColor Red
    exit 1
}

Write-Host "`n🧹 Limpando cache do Next.js..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force
    Write-Host "  ✅ Pasta .next deletada" -ForegroundColor Green
} else {
    Write-Host "  ℹ️  Pasta .next já não existe" -ForegroundColor Cyan
}

Write-Host "`n🎨 Tema vermelho está configurado em globals.css:" -ForegroundColor Yellow
Write-Host "  • Botões: Vermelho vibrante (239 68 68)" -ForegroundColor White
Write-Host "  • Backgrounds: Preto suave (23 23 23)" -ForegroundColor White
Write-Host "  • Textos: Branco puro (255 255 255)" -ForegroundColor White

Write-Host "`n🚀 Próximos passos:" -ForegroundColor Cyan
Write-Host "  1. Rode: npm run dev" -ForegroundColor White
Write-Host "  2. Abra: http://localhost:3000" -ForegroundColor White
Write-Host "  3. Pressione Ctrl+Shift+R no navegador" -ForegroundColor White

Write-Host "`n✅ PRONTO! Agora rode 'npm run dev'`n" -ForegroundColor Green
