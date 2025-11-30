import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { Lock } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { GlassCard } from '../../components/ui/GlassCard';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { validatePassword } from '../../lib/utils/validation';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../lib/store/authStore';

type AuthStackParamList = {
  EmailEntry: undefined;
  PasswordEntry: { email: string };
  SignupNames: { email: string };
  SignupPassword: { email: string; firstName: string; lastName: string };
};

type RoutePropType = RouteProp<AuthStackParamList, 'SignupPassword'>;

export default function SignupPasswordScreen() {
  const route = useRoute<RoutePropType>();
  const theme = useTheme();
  const { email, firstName, lastName } = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setSession } = useAuthStore();

  const handleSignUp = async () => {
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const validation = validatePassword(password);
    if (!validation.valid) {
      setError(validation.errors[0]);
      return;
    }

    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            full_name: `${firstName} ${lastName}`,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message || 'Failed to create account');
        return;
      }

      if (data.session) {
        setSession(data.session);
        // Create profile
        await supabase.from('profiles').insert({
          user_id: data.user.id,
          email,
          first_name: firstName,
          last_name: lastName,
        });
      } else {
        setError('Please check your email to verify your account');
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
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Set your password,
          </Text>
          <Text style={[styles.name, { color: theme.colors.primary }]}>
            {firstName}
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Create a secure password
          </Text>

          <GlassCard style={styles.card}>
            <Input
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="new-password"
              leftIcon={<Lock size={20} color={theme.colors.textSecondary} />}
            />

            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="new-password"
              leftIcon={<Lock size={20} color={theme.colors.textSecondary} />}
              error={error}
            />

            <Button
              title="Create Account"
              onPress={handleSignUp}
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

