/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'RobotoFlex': ['"Roboto flex"', 'system-ui, sans-serif'],
        'RobotoCondensed': ['"Roboto Condensed"', 'system-ui, sans-serif'],
        'BebasNeue': ['"Bebas Neue"', 'system-ui, sans-serif']
      }
    },
    colors: {
      "mainDark": "#0147FF",
      "mainLight": "#F7F7F7",
      "white": "#fff",
      "gray": "#f1f1f1"
    },
    screens: {
      'xs': "540px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

