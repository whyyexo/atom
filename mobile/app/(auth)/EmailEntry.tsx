import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Mail } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { GlassCard } from '../../components/ui/GlassCard';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { validateEmail } from '../../lib/utils/validation';
import { supabase } from '../../lib/supabase';

type AuthStackParamList = {
  EmailEntry: undefined;
  PasswordEntry: { email: string };
  SignupNames: { email: string };
  SignupPassword: { email: string; firstName: string; lastName: string };
};

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'EmailEntry'>;

export default function EmailEntryScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkUserExists = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: 'dummy', // This will fail but tells us if user exists
      });

      // If error is "Invalid login credentials", user exists
      return error?.message?.includes('Invalid login credentials') ?? false;
    } catch {
      return false;
    }
  };

  const handleContinue = async () => {
    setError('');

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Check if user exists
      const exists = await checkUserExists(email);

      if (exists) {
        navigation.navigate('PasswordEntry', { email });
      } else {
        navigation.navigate('SignupNames', { email });
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
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
            Welcome to Atom
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Enter your email to continue
          </Text>

          <GlassCard style={styles.card}>
            <Input
              label="Email"
              placeholder="your@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              leftIcon={<Mail size={20} color={theme.colors.textSecondary} />}
              error={error}
            />

            <Button
              title="Continue"
              onPress={handleContinue}
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
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    marginTop: 24,
  },
});

