/**
 * iOS 26 Gradient System
 * Aurora and accent gradients
 */

import type { ColorMode } from "./colors";

export const gradients = {
  // System gradients
  blue: {
    light: "linear-gradient(135deg, #007AFF 0%, #5856D6 100%)",
    dark: "linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)",
  },
  purple: {
    light: "linear-gradient(135deg, #AF52DE 0%, #FF2D55 100%)",
    dark: "linear-gradient(135deg, #BF5AF2 0%, #FF375F 100%)",
  },
  sunset: {
    light: "linear-gradient(135deg, #FF9500 0%, #FF2D55 100%)",
    dark: "linear-gradient(135deg, #FF9F0A 0%, #FF375F 100%)",
  },
  ocean: {
    light: "linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)",
    dark: "linear-gradient(135deg, #64D2FF 0%, #0A84FF 100%)",
  },
  aurora: {
    light: "linear-gradient(135deg, #5AC8FA 0%, #AF52DE 50%, #FF2D55 100%)",
    dark: "linear-gradient(135deg, #64D2FF 0%, #BF5AF2 50%, #FF375F 100%)",
  },

  // Glass gradients
  glass: {
    light: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
    dark: "linear-gradient(135deg, rgba(28, 28, 30, 0.9) 0%, rgba(28, 28, 30, 0.7) 100%)",
  },

  // Overlay gradients
  overlay: {
    light: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)",
    dark: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
  },
} as const;

export type GradientType = keyof typeof gradients;

type GradientValue = { light: string; dark: string } | string;

export function getGradient(
  gradientType: GradientType,
  mode: ColorMode = "light"
): string {
  const gradient = gradients[gradientType] as GradientValue;
  if (typeof gradient === "object" && gradient !== null && ("light" in gradient || "dark" in gradient)) {
    const gradientObj = gradient as { light: string; dark: string };
    return gradientObj[mode] || gradientObj.light || "";
  }
  if (typeof gradient === "string") {
    return gradient;
  }
  return "";
}

