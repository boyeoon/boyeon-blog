import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },    
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage-grotesque)"],
        jetbrains: ["var(--font-jetbrains-mono)"],
      },
      typography: (theme: (key: string) => string) => ({
        DEFAULT: {
          css: {
            headings: {}, // h1, h2, h3, h4, th
            lead: {}, // [class~="lead"]
            h1: {
              fontSize: "4rem",
              fontWeight: "900",
              fontFamily: theme("fontFamily.bricolage"),
              // letterSpacing: theme("letterSpacing.tight"),
            },
            h2: {
              fontFamily: theme("fontFamily.bricolage"),
            },
            h3: {
              fontFamily: theme("fontFamily.bricolage"),
            },
            h4: {
              fontFamily: theme("fontFamily.bricolage"),
            },
            p: {},
            a: {
              padding: "0.25rem",
              borderRadius: "0.25rem",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: theme("colors.slate.400"), 
              },
            },
            blockquote: {},
            figure: {},
            figcaption: {},
            strong: {},
            em: {},
            kbd: {},
            code: {},
            pre: {},
            ol: {},
            ul: {},
            li: {},
            table: {},
            thead: {},
            tr: {},
            th: {},
            td: {},
            img: {
              width: "56rem",
              height: "30rem",
              objectFit: "cover",
            },
            video: {},
            hr: {},
          },        
        },
      }),
      letterSpacing: {
        tight: "-0.3rem",
        normal: "0rem",
        wide: "0.3rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
