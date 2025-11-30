import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../lib/theme/ThemeProvider';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
}

export function GlassCard({ children, style, intensity = 20 }: GlassCardProps) {
  const theme = useTheme();

  // Glassmorphism effect using opacity and backdrop blur simulation
  return (
    <View style={[styles.container, { borderRadius: theme.borderRadius.xl }, style]}>
      <View
        style={[
          styles.content,
          {
            borderRadius: theme.borderRadius.xl,
            backgroundColor: `rgba(255, 255, 255, ${0.7 + intensity / 100})`,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          theme.shadows.md,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
});
