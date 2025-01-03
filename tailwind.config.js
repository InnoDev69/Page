/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5568',
        secondary: '#2D3748',
        accent: '#A0AEC0',
      },
    },
  },
  plugins: [],
}

