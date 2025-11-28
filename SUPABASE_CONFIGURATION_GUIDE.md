# Guide de Configuration Supabase pour Magic Link

## ❌ Problème: Redirection vers localhost sans port

Si vous recevez l'erreur "Ce site est inaccessible - localhost n'autorise pas la connexion", c'est que la configuration Supabase n'est pas correcte.

## ✅ Solution: Configuration dans Supabase Dashboard

### Étape 1: Accéder aux paramètres d'authentification

1. Allez sur https://supabase.com
2. Connectez-vous à votre projet
3. Dans le menu de gauche, cliquez sur **Authentication**
4. Puis cliquez sur **URL Configuration** (ou cherchez "Redirect URLs" dans les paramètres)

### Étape 2: Configurer les URLs de redirection

Dans la section **Redirect URLs**, vous devez ajouter EXACTEMENT ces URLs (une par ligne):

```
http://localhost:3000/auth/callback
http://localhost:3000/**
```

**⚠️ IMPORTANT:**
- Assurez-vous d'inclure le **port 3000**
- Utilisez **http** et non **https** pour le développement local
- Ajoutez les deux lignes (la première est précise, la deuxième avec wildcard)

### Étape 3: Configurer le Site URL

Dans le champ **Site URL**, écrivez EXACTEMENT:

```
http://localhost:3000
```

**⚠️ IMPORTANT:**
- Doit commencer par `http://`
- Doit inclure le port `:3000`
- Pas de slash à la fin

### Étape 4: Sauvegarder

1. Cliquez sur le bouton **Save** ou **Update**
2. Attendez la confirmation de sauvegarde

## 🔍 Vérification

### Vérifier dans votre navigateur

1. Ouvrez les DevTools (F12)
2. Allez dans l'onglet **Network**
3. Demandez un nouveau magic link
4. Cliquez sur le lien dans l'email
5. Regardez dans Network quelle URL est appelée

Le lien devrait ressembler à:
```
https://[votre-projet].supabase.co/auth/v1/verify?token=...&type=magiclink&redirect_to=http://localhost:3000/auth/callback
```

### Vérifier dans votre code

Ouvrez la console du navigateur (F12 > Console) et regardez le message qui dit:
```
🔗 Magic link redirect URL: http://localhost:3000/auth/callback
```

## 🐛 Dépannage

### Le problème persiste?

1. **Vérifiez les variables d'environnement**

   Créez ou modifiez `.env.local` à la racine du projet:
   
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://[votre-projet-id].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[votre-cle-anon]
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

2. **Redémarrez le serveur de développement**

   ```bash
   # Arrêtez le serveur (Ctrl+C)
   npm run dev
   ```

3. **Videz le cache du navigateur**

   - Chrome/Edge: Ctrl+Shift+Delete
   - Sélectionnez "Cookies et autres données de site"
   - Cliquez sur "Effacer les données"

4. **Demandez un nouveau magic link**

   Les anciens liens ne fonctionneront pas si la configuration a changé.

### Erreur: "Invalid redirect URL"

- Vérifiez que l'URL dans Redirect URLs correspond EXACTEMENT à `http://localhost:3000/auth/callback`
- Pas d'espace avant ou après
- Pas de slash à la fin (sauf pour le wildcard `/**`)

### Le lien fonctionne mais redirige vers une page d'erreur

- Vérifiez que votre serveur Next.js tourne sur le port 3000
- Vérifiez la console du serveur pour des erreurs
- Vérifiez que le fichier `app/auth/callback/route.ts` existe

## 📸 Exemple de configuration correcte

```
Redirect URLs:
  http://localhost:3000/auth/callback
  http://localhost:3000/**

Site URL:
  http://localhost:3000
```

## 🚀 Configuration pour la production

Quand vous déployez en production, mettez à jour:

**Redirect URLs:**
```
https://votre-domaine.com/auth/callback
https://votre-domaine.com/**
```

**Site URL:**
```
https://votre-domaine.com
```

Et dans `.env.local` (ou variables d'environnement de votre plateforme):
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

## 💡 Notes importantes

- Les URLs sont **sensibles à la casse** pour les domaines
- Le port est **obligatoire** pour localhost
- Utilisez toujours `http://` pour localhost (jamais `https://`)
- Le wildcard `/**` permet toutes les routes mais la route précise est préférée

