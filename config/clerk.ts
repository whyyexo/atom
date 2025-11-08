export const authAppearance = {
  layout: {
    logoPlacement: "inside",
    socialButtonsPlacement: "bottom",
  },
  variables: {
    colorPrimary: "#6366f1",
    borderRadius: "1rem",
    fontFamily: "var(--font-geist-sans)",
  },
  elements: {
    card: "shadow-2xl border border-border/60 backdrop-blur-xl !p-6 md:!p-10 bg-card/95",
    headerTitle: "text-2xl font-semibold text-foreground",
    headerSubtitle: "text-sm text-muted-foreground",
    formFieldInput:
      "bg-background/70 border border-border focus-visible:ring-2 focus-visible:ring-primary/60",
    formButtonPrimary:
      "bg-primary hover:bg-primary/90 text-primary-foreground transition-colors font-semibold",
    alternativeMethodsBlockButton:
      "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
    footerActionLink:
      "text-primary hover:text-primary/90 font-semibold transition-colors",
    logoImage: "h-10 w-auto",
  },
} as const;


