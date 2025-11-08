export const authAppearance = {
  layout: {
    logoImageUrl: "/atom-mark.svg",
    logoPlacement: "outside",
    socialButtonsPlacement: "bottom",
  },
  variables: {
    colorPrimary: "#6366f1",
    colorBackground: "rgba(255,255,255,0.92)",
    borderRadius: "1rem",
    fontFamily: "var(--font-geist-sans)",
  },
  elements: {
    card: "shadow-2xl border border-border/60 backdrop-blur-xl !p-6 md:!p-10 bg-card/90",
    headerTitle: "text-2xl font-semibold text-foreground",
    headerSubtitle: "text-sm text-muted-foreground",
    formFieldInput:
      "bg-background/60 border border-border focus-visible:ring-2 focus-visible:ring-primary/60",
    formButtonPrimary:
      "bg-primary hover:bg-primary/90 text-primary-foreground transition-colors font-semibold",
    alternativeMethodsBlockButton:
      "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    footer: "hidden",
    socialButtonsBlockButton:
      "border border-border hover:bg-muted text-foreground",
  },
} as const;


