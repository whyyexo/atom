/**
 * iOS 26 Size System
 * Consistent spacing and sizing
 */

export const sizes = {
  // Spacing scale (4px base)
  spacing: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
  },

  // Border radius
  radius: {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    full: "9999px",
  },

  // Component sizes
  button: {
    sm: {
      height: "32px",
      paddingX: "12px",
      fontSize: "14px",
    },
    md: {
      height: "44px",
      paddingX: "20px",
      fontSize: "16px",
    },
    lg: {
      height: "52px",
      paddingX: "24px",
      fontSize: "17px",
    },
  },

  input: {
    sm: {
      height: "36px",
      paddingX: "12px",
      fontSize: "14px",
    },
    md: {
      height: "44px",
      paddingX: "16px",
      fontSize: "16px",
    },
    lg: {
      height: "52px",
      paddingX: "20px",
      fontSize: "17px",
    },
  },

  // Icon sizes
  icon: {
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
  },
} as const;

export type SpacingKey = keyof typeof sizes.spacing;
export type RadiusKey = keyof typeof sizes.radius;
export type ButtonSize = keyof typeof sizes.button;
export type InputSize = keyof typeof sizes.input;
export type IconSize = keyof typeof sizes.icon;

