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
        display: ["Bebas Neue", "sans-serif"],
        body: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial": "var(--gradient-hero)",
        "panel-shine": "var(--gradient-panel)",
        "web-pattern": "var(--pattern-web)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "web-swing": {
          "0%": { opacity: "0", transform: "translate3d(-18px, -26px, 0) scale(0.95)" },
          "60%": { opacity: "1", transform: "translate3d(8px, 6px, 0) scale(1.02)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0) rotate(0deg)" },
        },
        "spider-sense": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--glow) / 0.2), 0 0 0 1px hsl(var(--primary) / 0.22)" },
          "50%": { boxShadow: "0 0 0 18px hsl(var(--glow) / 0), 0 0 28px hsl(var(--glow) / 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        crawl: {
          "0%": { transform: "translate(-50%, -50%) scaleX(0.96) rotate(-4deg)" },
          "50%": { transform: "translate(-50%, -56%) scaleX(1.04) rotate(3deg)" },
          "100%": { transform: "translate(-50%, -50%) scaleX(0.96) rotate(-4deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "web-swing": "web-swing 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
        "spider-sense": "spider-sense 2.2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        crawl: "crawl 2.8s linear infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        panel: "0 24px 70px -32px hsl(var(--hero) / 0.88)",
        glow: "0 0 0 1px hsl(var(--border)), 0 0 30px hsl(var(--glow) / 0.26)",
        hero: "0 36px 90px -34px hsl(var(--primary) / 0.32)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
