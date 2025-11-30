import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Lock } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { GlassCard } from '../../components/ui/GlassCard';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../lib/store/authStore';

type AuthStackParamList = {
  EmailEntry: undefined;
  PasswordEntry: { email: string };
  SignupNames: { email: string };
  SignupPassword: { email: string; firstName: string; lastName: string };
};

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'PasswordEntry'>;
type RoutePropType = RouteProp<AuthStackParamList, 'PasswordEntry'>;

export default function PasswordEntryScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const theme = useTheme();
  const { email } = route.params;
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const { setSession } = useAuthStore();

  useEffect(() => {
    // Fetch user's first name from profile if available
    const fetchProfile = async () => {
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('first_name')
          .eq('email', email)
          .single();

        if (profile?.first_name) {
          setFirstName(profile.first_name);
        }
      } catch {
        // Ignore errors
      }
    };

    fetchProfile();
  }, [email]);

  const handleSignIn = async () => {
    setError('');

    if (!password) {
      setError('Please enter your password');
      return;
    }

    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message || 'Invalid password');
        return;
      }

      if (data.session) {
        setSession(data.session);
        // Navigation will automatically switch to main stack
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          {firstName ? (
            <>
              <Text style={[styles.title, { color: theme.colors.text }]}>
                Welcome back,
              </Text>
              <Text style={[styles.name, { color: theme.colors.primary }]}>
                {firstName}
              </Text>
            </>
          ) : (
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Sign in to your account
            </Text>
          )}
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Enter your password to continue
          </Text>

          <GlassCard style={styles.card}>
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="password"
              leftIcon={<Lock size={20} color={theme.colors.textSecondary} />}
              error={error}
            />

            <Button
              title="Sign In"
              onPress={handleSignIn}
              loading={loading}
              fullWidth
            />
          </GlassCard>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    marginTop: 24,
  },
});

