import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        panel: "hsl(var(--panel))",
        glow: "hsl(var(--glow))",
        hero: "hsl(var(--hero))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 0.5rem)",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial": "var(--gradient-hero)",
        "panel-shine": "var(--gradient-panel)",
        "web-pattern": "var(--pattern-web)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "web-swing": {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.97)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.01)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "spider-sense": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--glow) / 0.15), 0 0 0 1px hsl(var(--primary) / 0.2)" },
          "50%": { boxShadow: "0 0 0 14px hsl(var(--glow) / 0), 0 0 28px hsl(var(--glow) / 0.25)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        crawl: {
          "0%": { transform: "translate(-50%, -50%) scale(0.96) rotate(-4deg)" },
          "50%": { transform: "translate(-50%, -56%) scale(1.02) rotate(4deg)" },
          "100%": { transform: "translate(-50%, -50%) scale(0.96) rotate(-4deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        morph: {
          "0%, 100%": { borderRadius: "28% 72% 57% 43% / 41% 40% 60% 59%" },
          "50%": { borderRadius: "58% 42% 31% 69% / 43% 63% 37% 57%" },
        },
        "sharingan-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "amaterasu-flicker": {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 8px hsl(var(--primary) / 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 24px hsl(var(--primary) / 0.6), 0 0 48px hsl(var(--accent) / 0.2)" },
        },
        "tsukuyomi-fade": {
          "0%": { filter: "brightness(1) saturate(1)" },
          "50%": { filter: "brightness(0.7) saturate(1.4)" },
          "100%": { filter: "brightness(1) saturate(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "web-swing": "web-swing 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "spider-sense": "spider-sense 2.4s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        crawl: "crawl 3s linear infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        pulse: "pulse 2.5s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        "sharingan-spin": "sharingan-spin 8s linear infinite",
        "amaterasu-flicker": "amaterasu-flicker 3s ease-in-out infinite",
        "tsukuyomi-fade": "tsukuyomi-fade 6s ease-in-out infinite",
      },
      boxShadow: {
        panel: "0 26px 80px -36px hsl(var(--hero) / 0.7)",
        glow: "0 0 0 1px hsl(var(--border)), 0 0 24px hsl(var(--glow) / 0.2)",
        hero: "0 40px 96px -34px hsl(var(--primary) / 0.24)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
