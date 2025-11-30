/**
 * iOS 26 Transition System
 * Smooth, natural animations
 */

export const transitions = {
  // Duration
  duration: {
    instant: "0ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
  },

  // Easing curves (iOS style)
  easing: {
    // Standard iOS easing
    standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    // Decelerate (ease-out)
    decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    // Accelerate (ease-in)
    accelerate: "cubic-bezier(0.4, 0.0, 1, 1)",
    // Sharp (for quick interactions)
    sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
    // Spring-like
    spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  // Property transitions
  properties: {
    all: "all",
    colors: "color, background-color, border-color",
    transform: "transform",
    opacity: "opacity",
    shadow: "box-shadow",
  },

  // Common transition presets
  presets: {
    button: "all 150ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    card: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    modal: "all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    fade: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    slide: "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)",
  },
} as const;

export type DurationKey = keyof typeof transitions.duration;
export type EasingKey = keyof typeof transitions.easing;
export type PresetKey = keyof typeof transitions.presets;

export function getTransition(preset: PresetKey = "button"): string {
  return transitions.presets[preset] || transitions.presets.button;
}

