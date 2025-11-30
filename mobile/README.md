# Atom Mobile App

Production-ready React Native (Expo) mobile app for Atom with iOS 26-inspired design, Supabase integration, and AI capabilities.

## Features

- 🎨 **iOS 26 Visual Language**: Glassmorphism, glossy panels, SF-Pro typography, soft shadows
- 🔐 **Supabase Auth**: Email/password, magic link, OAuth placeholders
- 🤖 **AI Assistant**: Chat interface with animated orb, voice/text input
- ✅ **Tasks**: CRUD operations with swipe actions
- 📝 **Notes**: Rich text editor with persistence
- 🎤 **Voice Notes**: Record, transcribe, and manage voice memos
- 🎨 **Dual Themes**: Apple (iOS) and Android (Material) themes
- 📱 **Mobile-First**: Optimized for iOS and Android

## Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- Supabase account and project
- iOS Simulator (Mac) or Android Emulator (optional, can use Expo Go)

## Setup

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```
EXPO_PUBLIC_SUPABASE_URL=your-supabase-project-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Set Up Supabase Database

Run the schema SQL in your Supabase SQL editor:

```bash
# Copy the contents of supabase/schema.sql and run in Supabase SQL Editor
```

Or use the Supabase CLI:
```bash
supabase db push
```

### 4. Seed Database (Optional)

Create a `.env.local` file with your Supabase service role key:
```
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Then run:
```bash
npm run seed
```

This creates a demo user:
- Email: `demo@atom.app`
- Password: `demo123456`

## Running the App

### Development Mode

```bash
npm start
```

Then:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app on your phone

### iOS Simulator (Mac)

```bash
npm run ios
```

### Android Emulator

```bash
npm run android
```

## Testing

Run unit tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Project Structure

```
mobile/
├── app/
│   ├── (auth)/          # Authentication screens
│   │   ├── EmailEntry.tsx
│   │   ├── PasswordEntry.tsx
│   │   ├── SignupNames.tsx
│   │   └── SignupPassword.tsx
│   └── (main)/          # Main app screens
│       ├── Home.tsx
│       ├── AI.tsx
│       ├── Tasks.tsx
│       ├── Notes.tsx
│       ├── VoiceNotes.tsx
│       ├── Settings.tsx
│       └── OpenApp.tsx
├── components/
│   └── ui/              # Reusable UI components
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── Input.tsx
│       ├── Avatar.tsx
│       ├── IconButton.tsx
│       ├── Panel.tsx
│       └── OrbAnimation.tsx
├── lib/
│   ├── api/             # API clients
│   │   └── ai.ts
│   ├── store/           # Zustand stores
│   │   ├── authStore.ts
│   │   └── themeStore.ts
│   ├── theme/           # Theme system
│   │   ├── ThemeProvider.tsx
│   │   └── tokens.ts
│   ├── utils/           # Utilities
│   │   └── validation.ts
│   └── supabase.ts      # Supabase client
├── supabase/
│   ├── schema.sql       # Database schema
│   └── seed.ts          # Seed script
└── App.tsx              # Root component
```

## AI Integration

The AI functionality uses placeholder implementations. To enable real AI:

1. Create a Supabase Edge Function or API route
2. Update `lib/api/ai.ts` to call your endpoint
3. Set `OPENAI_API_KEY` in your server environment (never in client)

Example Edge Function structure:
```typescript
// supabase/functions/ai-chat/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { message, userId } = await req.json()
  // Call OpenAI API
  // Return response
})
```

## Voice Notes

Voice notes use Expo AV for recording. Transcription is a placeholder - integrate with:
- OpenAI Whisper API (via Edge Function)
- AssemblyAI
- Deepgram
- Or other speech-to-text service

## Building for Production

### iOS

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

Requires EAS account and configuration in `app.json`.

## Troubleshooting

### Metro bundler cache issues
```bash
npm start -- --reset-cache
```

### Supabase connection errors
- Verify `.env` variables are correct
- Check Supabase project is active
- Ensure RLS policies are set correctly

### Audio recording permissions
- iOS: Check `Info.plist` microphone permission
- Android: Check `AndroidManifest.xml` permissions

## Security Notes

- Never commit `.env` files
- Use Supabase RLS policies for data security
- AI API keys should only exist server-side
- Voice note files should be stored in Supabase Storage (not implemented in seed)

## License

Proprietary - Atom Mobile App

