// These imports must be at the top
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from './lib/store/authStore';
import { supabase } from './lib/supabase';
import { useThemeStore } from './lib/store/themeStore';
import { ThemeProvider } from './lib/theme/ThemeProvider';

// Auth Screens
import EmailEntryScreen from './app/(auth)/EmailEntry';
import PasswordEntryScreen from './app/(auth)/PasswordEntry';
import SignupNamesScreen from './app/(auth)/SignupNames';
import SignupPasswordScreen from './app/(auth)/SignupPassword';

// Main Screens
import HomeScreen from './app/(main)/Home';
import AIScreen from './app/(main)/AI';
import TasksScreen from './app/(main)/Tasks';
import NotesScreen from './app/(main)/Notes';
import VoiceNotesScreen from './app/(main)/VoiceNotes';
import SettingsScreen from './app/(main)/Settings';
import OpenAppScreen from './app/(main)/OpenApp';

const Stack = createNativeStackNavigator();

export default function App() {
  const { session, setSession, initializeAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar style={theme === 'apple' ? 'dark' : 'light'} />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
            >
              {!session ? (
                <>
                  <Stack.Screen name="EmailEntry" component={EmailEntryScreen} />
                  <Stack.Screen name="PasswordEntry" component={PasswordEntryScreen} />
                  <Stack.Screen name="SignupNames" component={SignupNamesScreen} />
                  <Stack.Screen name="SignupPassword" component={SignupPasswordScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="AI" component={AIScreen} options={{ presentation: 'modal' }} />
                  <Stack.Screen name="Tasks" component={TasksScreen} />
                  <Stack.Screen name="Notes" component={NotesScreen} />
                  <Stack.Screen name="VoiceNotes" component={VoiceNotesScreen} />
                  <Stack.Screen name="Settings" component={SettingsScreen} />
                  <Stack.Screen name="OpenApp" component={OpenAppScreen} />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

