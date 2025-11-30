import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronRight, LogOut, Globe } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Panel } from '../../components/ui/Panel';
import { Avatar } from '../../components/ui/Avatar';
import { useTheme } from '../../lib/theme/ThemeProvider';
import { useAuthStore } from '../../lib/store/authStore';
import { useThemeStore } from '../../lib/store/themeStore';

type MainStackParamList = {
  Settings: undefined;
  OpenApp: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Settings'>;

export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const { profile, signOut } = useAuthStore();
  const { theme: currentTheme, setTheme } = useThemeStore();

  useEffect(() => {
    useThemeStore.getState().initializeTheme();
  }, []);

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          await signOut();
        },
      },
    ]);
  };

  const SettingItem = ({
    icon,
    title,
    subtitle,
    onPress,
    rightElement,
  }: {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    rightElement?: React.ReactNode;
  }) => (
    <TouchableOpacity onPress={onPress} disabled={!onPress} activeOpacity={0.7}>
      <Panel style={styles.settingItem}>
        <View style={styles.settingContent}>
          {icon && <View style={styles.settingIcon}>{icon}</View>}
          <View style={styles.settingText}>
            <Text style={[styles.settingTitle, { color: theme.colors.text }]}>{title}</Text>
            {subtitle && (
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {rightElement || (onPress && <ChevronRight size={20} color={theme.colors.textSecondary} />)}
      </Panel>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Settings</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Panel style={styles.profileSection}>
          <Avatar
            name={`${profile?.first_name} ${profile?.last_name}`}
            size={80}
          />
          <Text style={[styles.profileName, { color: theme.colors.text }]}>
            {profile?.first_name} {profile?.last_name}
          </Text>
          <Text style={[styles.profileEmail, { color: theme.colors.textSecondary }]}>
            {profile?.email}
          </Text>
        </Panel>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>
            Appearance
          </Text>
          <SettingItem
            title="Theme"
            subtitle={currentTheme === 'apple' ? 'iOS Style' : 'Material Design'}
            rightElement={
              <View style={styles.themeToggle}>
                <Text style={[styles.themeLabel, { color: theme.colors.textSecondary }]}>iOS</Text>
                <Switch
                  value={currentTheme === 'android'}
                  onValueChange={(value) => setTheme(value ? 'android' : 'apple')}
                  trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                  thumbColor="#FFFFFF"
                />
                <Text style={[styles.themeLabel, { color: theme.colors.textSecondary }]}>Material</Text>
              </View>
            }
          />
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>General</Text>
          <SettingItem
            icon={<Globe size={20} color={theme.colors.text} />}
            title="Open Web App"
            subtitle="Open Atom in your browser"
            onPress={() => navigation.navigate('OpenApp')}
          />
        </View>

        <View style={styles.section}>
          <SettingItem
            icon={<LogOut size={20} color={theme.colors.error} />}
            title="Sign Out"
            onPress={handleSignOut}
            rightElement={null}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 32,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 15,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  settingItem: {
    marginBottom: 8,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 15,
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  themeLabel: {
    fontSize: 15,
  },
});

