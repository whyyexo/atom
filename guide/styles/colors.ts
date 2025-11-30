/**
 * iOS 26 Color System
 * Apple-inspired color palette with dynamic theming
 */

export const colors = {
  // System Colors
  systemBlue: {
    light: "#007AFF",
    dark: "#0A84FF",
  },
  systemGreen: {
    light: "#34C759",
    dark: "#30D158",
  },
  systemRed: {
    light: "#FF3B30",
    dark: "#FF453A",
  },
  systemOrange: {
    light: "#FF9500",
    dark: "#FF9F0A",
  },
  systemYellow: {
    light: "#FFCC00",
    dark: "#FFD60A",
  },
  systemPurple: {
    light: "#AF52DE",
    dark: "#BF5AF2",
  },
  systemPink: {
    light: "#FF2D55",
    dark: "#FF375F",
  },
  systemIndigo: {
    light: "#5856D6",
    dark: "#5E5CE6",
  },
  systemTeal: {
    light: "#5AC8FA",
    dark: "#64D2FF",
  },

  // Glass & Translucency
  glass: {
    white: {
      light: "rgba(255, 255, 255, 0.7)",
      dark: "rgba(255, 255, 255, 0.1)",
    },
    black: {
      light: "rgba(0, 0, 0, 0.1)",
      dark: "rgba(0, 0, 0, 0.3)",
    },
    elevated: {
      light: "rgba(255, 255, 255, 0.8)",
      dark: "rgba(28, 28, 30, 0.8)",
    },
  },

  // Backgrounds
  background: {
    primary: {
      light: "#FDFDFD",
      dark: "#000000",
    },
    secondary: {
      light: "#F5F5F7",
      dark: "#1C1C1E",
    },
    tertiary: {
      light: "#FFFFFF",
      dark: "#2C2C2E",
    },
  },

  // Text
  text: {
    primary: {
      light: "#000000",
      dark: "#FFFFFF",
    },
    secondary: {
      light: "#3C3C43",
      dark: "#EBEBF5",
    },
    tertiary: {
      light: "#8E8E93",
      dark: "#8E8E93",
    },
    quaternary: {
      light: "#C7C7CC",
      dark: "#636366",
    },
  },

  // Separators
  separator: {
    light: "rgba(60, 60, 67, 0.29)",
    dark: "rgba(84, 84, 88, 0.65)",
  },

  // Fill
  fill: {
    primary: {
      light: "rgba(120, 120, 128, 0.2)",
      dark: "rgba(120, 120, 128, 0.36)",
    },
    secondary: {
      light: "rgba(120, 120, 128, 0.16)",
      dark: "rgba(120, 120, 128, 0.32)",
    },
    tertiary: {
      light: "rgba(120, 120, 128, 0.12)",
      dark: "rgba(120, 120, 128, 0.24)",
    },
  },
} as const;

export type ColorMode = "light" | "dark";

export function getColor(
  colorPath: string,
  mode: ColorMode = "light"
): string {
  const path = colorPath.split(".");
  let value: any = colors;

  for (const key of path) {
    value = value?.[key];
    if (!value) return "#000000";
  }

  if (typeof value === "object" && ("light" in value || "dark" in value)) {
    return value[mode] || value.light || "#000000";
  }

  return typeof value === "string" ? value : "#000000";
}

