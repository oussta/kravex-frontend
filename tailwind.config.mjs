/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-gold': '#D4AF37',
        'brand-white': '#FFFFFF',
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#252525',
        'bg-elevated': '#2C2C2C',
        'gold-primary': '#D4AF37',
        'gold-dark': '#B8941F',
        'gold-light': '#E5C158',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};