# Atom Mobile App - Run Instructions

## Quick Start

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Set Up Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:
```
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Set Up Supabase Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase/schema.sql`
4. Run the SQL script

### 4. Seed Database (Optional)

For testing, seed the database with demo data:

1. Get your Supabase Service Role Key from Project Settings > API
2. Create `.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
3. Run seed:
   ```bash
   npm run seed
   ```

Demo credentials:
- Email: `demo@atom.app`
- Password: `demo123456`

### 5. Start Development Server

```bash
npm start
```

Then:
- Press `i` to open iOS Simulator (Mac only)
- Press `a` to open Android Emulator
- Scan QR code with Expo Go app on your device

### 6. Run Tests

```bash
npm test
```

## Building for Production

### Prerequisites

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```

2. Login to EAS:
   ```bash
   eas login
   ```

3. Configure EAS:
   ```bash
   eas build:configure
   ```

### Build Commands

**iOS:**
```bash
eas build --platform ios
```

**Android:**
```bash
eas build --platform android
```

**Both:**
```bash
eas build --platform all
```

## Troubleshooting

### Metro Bundler Issues

Clear cache and restart:
```bash
npm start -- --reset-cache
```

### Supabase Connection Errors

1. Verify `.env` variables are correct
2. Check Supabase project is active
3. Ensure RLS policies are enabled
4. Verify network connectivity

### Audio Permissions

**iOS:**
- Permissions are configured in `app.json`
- Check `Info.plist` if issues persist

**Android:**
- Permissions are configured in `app.json`
- Check `AndroidManifest.xml` if issues persist

### TypeScript Errors

Clear TypeScript cache:
```bash
rm -rf node_modules/.cache
npm start -- --reset-cache
```

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `EXPO_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (for seeding only) | No |

## Next Steps

1. **AI Integration**: Update `lib/api/ai.ts` to call your Edge Function
2. **Voice Transcription**: Integrate speech-to-text service
3. **File Storage**: Set up Supabase Storage for voice notes
4. **Push Notifications**: Add Expo Notifications for alerts
5. **Analytics**: Integrate analytics service (optional)

## Support

For issues or questions:
- Check README.md for detailed documentation
- Review Supabase documentation
- Check Expo documentation

