/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: {
          DEFAULT: 'var(--color-text)',
          offset: 'var(--color-text-offset)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          offset: 'var(--color-background-offset)',
        },
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
