# Script de nettoyage complet pour résoudre les erreurs TurboModuleRegistry
Write-Host "🧹 Nettoyage complet en cours..." -ForegroundColor Yellow

# Arrêter tous les processus Metro/Expo
Write-Host "`n1. Arrêt des processus Metro/Expo..." -ForegroundColor Cyan
Get-Process | Where-Object {$_.ProcessName -like "*node*" -or $_.ProcessName -like "*expo*"} | Stop-Process -Force -ErrorAction SilentlyContinue

# Supprimer les caches
Write-Host "`n2. Suppression des caches..." -ForegroundColor Cyan
Remove-Item -Recurse -Force .expo -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .metro -ErrorAction SilentlyContinue

# Réinstaller les dépendances
Write-Host "`n3. Réinstallation des dépendances..." -ForegroundColor Cyan
npm install

Write-Host "`n✅ Nettoyage terminé!" -ForegroundColor Green
Write-Host "`n🚀 Lancez maintenant: npm start -- --clear" -ForegroundColor Green

