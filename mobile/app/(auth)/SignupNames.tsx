import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { User } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { GlassCard } from '../../components/ui/GlassCard';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { validateName } from '../../lib/utils/validation';

type AuthStackParamList = {
  EmailEntry: undefined;
  PasswordEntry: { email: string };
  SignupNames: { email: string };
  SignupPassword: { email: string; firstName: string; lastName: string };
};

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignupNames'>;
type RoutePropType = RouteProp<AuthStackParamList, 'SignupNames'>;

export default function SignupNamesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const theme = useTheme();
  const { email } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    setError('');

    if (!validateName(firstName)) {
      setError('First name can only contain letters');
      return;
    }

    if (!validateName(lastName)) {
      setError('Last name can only contain letters');
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter both first and last name');
      return;
    }

    navigation.navigate('SignupPassword', {
      email,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    });
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
            Let's create your account
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            Tell us your name
          </Text>

          <GlassCard style={styles.card}>
            <Input
              label="First Name"
              placeholder="John"
              value={firstName}
              onChangeText={(value) => {
                if (value === '' || /^[a-zA-Z\s'-]*$/.test(value)) {
                  setFirstName(value);
                  setError('');
                }
              }}
              autoCapitalize="words"
              autoComplete="given-name"
              leftIcon={<User size={20} color={theme.colors.textSecondary} />}
              error={error.includes('First') ? error : undefined}
            />

            <Input
              label="Last Name"
              placeholder="Doe"
              value={lastName}
              onChangeText={(value) => {
                if (value === '' || /^[a-zA-Z\s'-]*$/.test(value)) {
                  setLastName(value);
                  setError('');
                }
              }}
              autoCapitalize="words"
              autoComplete="family-name"
              leftIcon={<User size={20} color={theme.colors.textSecondary} />}
              error={error.includes('Last') || error.includes('both') ? error : undefined}
            />

            <Button title="Continue" onPress={handleContinue} fullWidth />
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

