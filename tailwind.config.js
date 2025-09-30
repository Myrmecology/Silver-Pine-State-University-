/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spsu-blue': '#1e3a8a',
        'spsu-green': '#047857',
        'spsu-silver': '#94a3b8',
      },
    },
  },
  plugins: [],
}