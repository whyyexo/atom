/**
 * iOS 26 Shadow System
 * Natural, soft shadows with depth
 */

import type { ColorMode } from "./colors";

export const shadows = {
  // Elevation shadows
  sm: {
    light: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    dark: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
  },
  md: {
    light: "0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
    dark: "0 3px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.5)",
  },
  lg: {
    light: "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)",
    dark: "0 10px 20px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.4)",
  },
  xl: {
    light: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.1)",
    dark: "0 15px 25px rgba(0, 0, 0, 0.5), 0 5px 10px rgba(0, 0, 0, 0.4)",
  },

  // Colored shadows (for buttons, cards)
  blue: {
    light: "0 4px 14px rgba(0, 122, 255, 0.25)",
    dark: "0 4px 14px rgba(10, 132, 255, 0.3)",
  },
  purple: {
    light: "0 4px 14px rgba(175, 82, 222, 0.25)",
    dark: "0 4px 14px rgba(191, 90, 242, 0.3)",
  },

  // Inner shadows (for pressed states)
  inner: {
    light: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
    dark: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
  },

  // Glow effects
  glow: {
    blue: {
      light: "0 0 20px rgba(0, 122, 255, 0.3)",
      dark: "0 0 20px rgba(10, 132, 255, 0.4)",
    },
    purple: {
      light: "0 0 20px rgba(175, 82, 222, 0.3)",
      dark: "0 0 20px rgba(191, 90, 242, 0.4)",
    },
  },
} as const;

type ShadowValue = { light: string; dark: string } | string;

export function getShadow(
  shadowType: keyof typeof shadows,
  mode: ColorMode = "light"
): string {
  const shadow = shadows[shadowType] as ShadowValue;
  if (typeof shadow === "object" && shadow !== null && ("light" in shadow || "dark" in shadow)) {
    const shadowObj = shadow as { light: string; dark: string };
    return shadowObj[mode] || shadowObj.light || "";
  }
  if (typeof shadow === "string") {
    return shadow;
  }
  return "";
}

