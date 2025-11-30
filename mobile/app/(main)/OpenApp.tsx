import React from 'react';
import { View, Text, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { Panel } from '../../components/ui/Panel';
import { useTheme } from '../../lib/theme/ThemeProvider';

type MainStackParamList = {
  OpenApp: undefined;
};

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'OpenApp'>;

const WEB_APP_URL = 'https://atom.app'; // Replace with your actual web app URL

export default function OpenAppScreen() {
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();

  const handleOpenApp = async () => {
    const supported = await Linking.canOpenURL(WEB_APP_URL);
    if (supported) {
      await Linking.openURL(WEB_APP_URL);
    } else {
      Alert.alert('Error', 'Cannot open web app');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Panel style={styles.panel}>
          <Text style={[styles.title, { color: theme.colors.text }]}>Open Web App</Text>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
            Open Atom in your browser for the full desktop experience.
          </Text>
          <Button title="Open in Browser" onPress={handleOpenApp} fullWidth style={styles.button} />
        </Panel>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  panel: {
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  button: {
    marginTop: 16,
  },
});
