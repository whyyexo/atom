# 🔧 Fix: localhost n'autorise pas la connexion

## Problème

Quand vous cliquez sur le magic link dans l'email, vous obtenez:
```
Ce site est inaccessible
localhost n'autorise pas la connexion.
```

## Cause

La configuration Supabase pointe vers `localhost` au lieu de `http://localhost:3000`.

## Solution rapide (5 minutes)

### 1. Ouvrir Supabase Dashboard

1. Allez sur https://supabase.com
2. Ouvrez votre projet
3. Menu gauche → **Authentication**
4. Cliquez sur **URL Configuration**

### 2. Modifier Redirect URLs

Dans le champ **Redirect URLs**, supprimez tout et ajoutez:

```
http://localhost:3000/auth/callback
```

**Copiez-collez exactement** (avec le port 3000!)

### 3. Modifier Site URL

Dans le champ **Site URL**, écrivez:

```
http://localhost:3000
```

**Sans slash à la fin!**

### 4. Sauvegarder

Cliquez sur **Save** ou **Update**

### 5. Redémarrer votre serveur

```bash
# Arrêtez avec Ctrl+C
npm run dev
```

### 6. Demander un nouveau magic link

⚠️ Les anciens liens ne fonctionneront plus. Demandez-en un nouveau depuis `/login`

## Vérification

Après avoir cliqué sur le nouveau magic link, vous devriez être redirigé vers:
```
http://localhost:3000/auth/callback
```

Puis automatiquement vers votre workspace.

## Si ça ne fonctionne toujours pas

1. **Vérifiez que votre serveur tourne sur le port 3000**
   ```bash
   # Vous devriez voir:
   > Ready on http://localhost:3000
   ```

2. **Vérifiez vos variables d'environnement**
   
   Créez `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Videz les cookies du navigateur**
   - Ouvrez les DevTools (F12)
   - Application > Cookies
   - Supprimez tous les cookies de localhost

4. **Regardez la console du navigateur**
   - Ouvrez DevTools (F12)
   - Onglet Console
   - Cherchez les erreurs

## Aide supplémentaire

Voir `SUPABASE_CONFIGURATION_GUIDE.md` pour un guide complet.

