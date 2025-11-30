import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../lib/theme/ThemeProvider';

interface PanelProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export function Panel({ children, style, padding }: PanelProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.borderRadius.lg,
          padding: padding ?? theme.spacing.md,
        },
        theme.shadows.md,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

