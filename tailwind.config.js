/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '9px',
      },
      colors: {
        'dark': "#181818",
        'dark-hover': '#282828',
        'dark-white': '#b3b3b3',
        'play-green': '#1fdf64',
      }
    },
  },
  plugins: [],
}

