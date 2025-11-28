# Fix: Magic Link Redirige vers localhost

## Problème
Quand vous cliquez sur le lien de connexion dans l'email, ça redirige vers localhost au lieu de votre application.

## Solution

### 1. Configurer les URLs dans Supabase (CRUCIAL)

1. Allez dans votre **Supabase Dashboard**
2. Naviguez vers **Authentication** > **URL Configuration**
3. Dans **Redirect URLs**, ajoutez ces URLs :
   ```
   http://localhost:3000/auth/callback
   http://localhost:3000/**
   ```
   (Pour la production, ajoutez votre domaine)

4. Dans **Site URL**, définissez :
   ```
   http://localhost:3000
   ```
   (Pour la production, votre domaine complet)

5. **Sauvegardez** les modifications

### 2. Vérifier les Variables d'Environnement

Assurez-vous que votre `.env.local` contient :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Redémarrer le Serveur

Après avoir modifié les variables d'environnement :

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
npm run dev
```

### 4. Tester

1. Allez sur `http://localhost:3000/login`
2. Entrez votre email
3. Cliquez sur le lien dans l'email
4. Vous devriez être redirigé vers `/workspace/[slug]`

## Vérifications Supplémentaires

Si ça ne fonctionne toujours pas :

1. **Vérifier les cookies du navigateur** :
   - Ouvrez les DevTools (F12)
   - Onglet Application > Cookies
   - Vérifiez que les cookies Supabase sont présents après la connexion

2. **Vérifier la console du navigateur** :
   - Ouvrez les DevTools (F12)
   - Onglet Console
   - Regardez s'il y a des erreurs

3. **Vérifier les logs Supabase** :
   - Dashboard Supabase > Logs > Auth Logs
   - Vérifiez si la connexion apparaît

4. **Tester avec un nouvel email** :
   - Essayez avec un email différent
   - Parfois les liens expirent rapidement

## URLs de Production

Quand vous déployez en production, mettez à jour :

1. **Supabase Dashboard** > Authentication > URL Configuration :
   - Redirect URLs : `https://votre-domaine.com/auth/callback`
   - Site URL : `https://votre-domaine.com`

2. **Variables d'environnement** :
   ```env
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
   ```

## Support

Si le problème persiste, vérifiez :
- Que le port 3000 est bien utilisé (ou adaptez l'URL)
- Que votre pare-feu/antivirus ne bloque pas localhost
- Que vous utilisez la bonne URL de projet Supabase

