import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '../../lib/theme/ThemeProvider';

interface OrbAnimationProps {
  size?: number;
  state?: 'idle' | 'listening' | 'speaking';
  audioLevel?: number; // 0-1 for waveform visualization
}

export function OrbAnimation({
  size = 200,
  state = 'idle',
  audioLevel = 0,
}: OrbAnimationProps) {
  const theme = useTheme();
  const pulseScale = useSharedValue(1);
  const pulseOpacity = useSharedValue(0.3);
  const waveScale = useSharedValue(1);

  useEffect(() => {
    if (state === 'idle') {
      // Gentle pulsing animation
      pulseScale.value = withRepeat(
        withTiming(1.1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
      pulseOpacity.value = withRepeat(
        withTiming(0.6, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    } else if (state === 'listening') {
      // React to audio level
      waveScale.value = withSpring(1 + audioLevel * 0.3, {
        damping: 15,
        stiffness: 150,
      });
      pulseOpacity.value = withTiming(0.8, { duration: 100 });
    } else if (state === 'speaking') {
      // Gentle pulsing when AI is speaking
      pulseScale.value = withRepeat(
        withTiming(1.15, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
      pulseOpacity.value = withRepeat(
        withTiming(0.7, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    }
  }, [state, audioLevel]);

  const outerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
    opacity: pulseOpacity.value,
  }));

  const innerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: waveScale.value }],
  }));

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Outer glow */}
      <Animated.View
        style={[
          styles.orb,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: theme.colors.primary,
          },
          outerStyle,
        ]}
      />
      {/* Inner core */}
      <Animated.View
        style={[
          styles.orb,
          styles.inner,
          {
            width: size * 0.7,
            height: size * 0.7,
            borderRadius: (size * 0.7) / 2,
            backgroundColor: theme.colors.primaryDark,
          },
          innerStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  orb: {
    position: 'absolute',
  },
  inner: {
    opacity: 0.9,
  },
});

