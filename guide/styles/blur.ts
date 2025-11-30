/**
 * iOS 26 Blur System
 * Glassmorphism and backdrop blur effects
 */

export const blur = {
  // Backdrop blur intensities
  none: "blur(0px)",
  sm: "blur(10px)",
  md: "blur(20px)",
  lg: "blur(30px)",
  xl: "blur(40px)",
  "2xl": "blur(60px)",

  // Tailwind classes mapping
  classes: {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
  },
} as const;

export type BlurIntensity = keyof typeof blur.classes;

export function getBlurClass(intensity: BlurIntensity = "lg"): string {
  return blur.classes[intensity] || blur.classes.lg;
}

