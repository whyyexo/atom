# Tester l'application Atom sur votre téléphone

## Méthode 1 : Expo Go (Recommandé - Le plus simple)

### Étape 1 : Installer Expo Go

**Sur iPhone (iOS):**
- Ouvrez l'App Store
- Recherchez "Expo Go"
- Installez l'application

**Sur Android:**
- Ouvrez Google Play Store
- Recherchez "Expo Go"
- Installez l'application

### Étape 2 : Préparer votre environnement

1. **Assurez-vous que votre téléphone et votre ordinateur sont sur le même réseau WiFi**
   - ⚠️ Important : Les deux appareils doivent être sur le même réseau

2. **Lancez le serveur Expo :**
   ```bash
   cd mobile
   npm start
   ```

3. **Vous verrez un QR code dans le terminal**

### Étape 3 : Scanner le QR code

**Sur iPhone (iOS):**
- Ouvrez l'application **Appareil photo** native
- Pointez vers le QR code dans le terminal
- Un lien "Expo Go" apparaîtra en haut
- Appuyez dessus pour ouvrir dans Expo Go

**Sur Android:**
- Ouvrez l'application **Expo Go**
- Appuyez sur "Scan QR code"
- Scannez le QR code dans le terminal

### Étape 4 : Attendre le chargement

L'application va se charger sur votre téléphone. La première fois peut prendre quelques instants.

---

## Méthode 2 : Tunnel (Si vous n'êtes pas sur le même WiFi)

Si votre téléphone et votre ordinateur ne sont pas sur le même réseau WiFi, utilisez un tunnel :

```bash
npm start -- --tunnel
```

⚠️ Note : Le tunnel peut être plus lent que le WiFi local.

---

## Méthode 3 : Build de développement (Pour tester sur un appareil physique sans Expo Go)

Si vous voulez installer l'application directement sur votre téléphone sans Expo Go :

### Prérequis
- Compte EAS (gratuit) : https://expo.dev
- Expo CLI installé : `npm install -g eas-cli`

### Étapes

1. **Connectez-vous à EAS :**
   ```bash
   eas login
   ```

2. **Configurez EAS :**
   ```bash
   eas build:configure
   ```

3. **Créez un build de développement :**
   ```bash
   # Pour iOS (nécessite un compte Apple Developer)
   eas build --profile development --platform ios
   
   # Pour Android
   eas build --profile development --platform android
   ```

4. **Installez le build sur votre téléphone** via le lien fourni par EAS

---

## Dépannage

### Le QR code ne fonctionne pas
- Vérifiez que les deux appareils sont sur le même WiFi
- Essayez `npm start -- --tunnel`
- Vérifiez que le pare-feu n'bloque pas le port

### L'application ne se charge pas
- Vérifiez votre connexion internet
- Redémarrez le serveur Expo : `npm start -- --clear`
- Vérifiez les erreurs dans le terminal

### Erreur de connexion Supabase
- Vérifiez que votre fichier `.env` contient les bonnes clés
- Vérifiez que votre projet Supabase est actif
- Vérifiez que les RLS policies sont correctement configurées

### L'application se ferme immédiatement
- Vérifiez les logs dans le terminal
- Vérifiez que toutes les dépendances sont installées : `npm install`
- Essayez de nettoyer le cache : `npm start -- --clear`

---

## Commandes utiles

```bash
# Démarrer le serveur
npm start

# Démarrer avec tunnel
npm start -- --tunnel

# Nettoyer le cache et redémarrer
npm start -- --clear

# Démarrer sur iOS Simulator (Mac uniquement)
npm run ios

# Démarrer sur Android Emulator
npm run android
```

---

## Prochaines étapes

Une fois que l'application fonctionne sur votre téléphone :

1. ✅ Testez l'authentification (créer un compte, se connecter)
2. ✅ Testez les fonctionnalités (Tasks, Notes, AI Assistant)
3. ✅ Testez les Voice Notes (nécessite permissions microphone)
4. ✅ Testez le changement de thème dans Settings

Bon test ! 🚀

