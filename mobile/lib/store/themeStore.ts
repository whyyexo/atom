import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Theme = 'apple' | 'android';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => Promise<void>;
  initializeTheme: () => Promise<void>;
}

const THEME_STORAGE_KEY = '@atom_theme';

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'apple',

  setTheme: async (theme: Theme) => {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
    set({ theme });
  },

  initializeTheme: async () => {
    try {
      const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'apple' || stored === 'android') {
        set({ theme: stored });
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  },
}));

