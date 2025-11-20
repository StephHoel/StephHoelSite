/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      brush: ['"Alex Brush"', 'cursive'],
      old: ['"Old Standard TT"', 'serif'],
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times'],
    },
    extend: {},
  },
  plugins: [],
}