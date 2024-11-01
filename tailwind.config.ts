import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "lg": "1312px",
        "xl": "1312px",

      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--color-primary), 1)',
          85: 'rgba(var(--color-primary), 0.85)',
          45: 'rgba(var(--color-primary), 0.45)',
          30: 'rgba(var(--color-primary), 0.30)',
          20: 'rgba(var(--color-primary), 0.20)',
          15: 'rgba(var(--color-primary), 0.15)',
          10: 'rgba(var(--color-primary), 0.10)',
          5: 'rgba(var(--color-primary), 0.05)',
        },
        secondary: {
          DEFAULT: 'rgba(var(--color-secondary), 1)',
        },
        bg: {
          DEFAULT: 'rgba(var(--color-bg), 1)',
          50: 'rgba(var(--color-bg), 0.5)',
          secondary: {
            DEFAULT: 'rgba(var(--color-bg-secondary), 1)',
            50: 'rgba(var(--color-bg-secondary), 0.5)',
            85: 'rgba(var(--color-bg-secondary), 0.85)',
          }
        },
        text: {
          DEFAULT: 'rgba(var(--color-text), 1)',
          85: 'rgba(var(--color-text), 0.85)',
          60: 'rgba(var(--color-text), 0.60)',
          45: 'rgba(var(--color-text), 0.45)',
          30: 'rgba(var(--color-text), 0.30)',
          20: 'rgba(var(--color-text), 0.20)',
          10: 'rgba(var(--color-text), 0.10)',
        },
        warning: { DEFAULT: 'rgba(var(--color-warning), 1)' },
        danger: { DEFAULT: 'rgba(var(--color-danger), 1)' },
        success: { DEFAULT: 'rgba(var(--color-success), 1)', 10: 'rgba(var(--color-success), 0.1)' },
        info: { DEFAULT: 'rgba(var(--color-info), 1)' },
        input: { DEFAULT: 'rgba(var(--color-input), 1)' },
      }
    },
  },
  corePlugins: {
    preflight: false
  }
};
export default config;
