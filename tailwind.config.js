/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero' : "url('/images/bg-3.jpg')"
      },
      colors: {
        gray: {
          800: "#1F1E1D",
          200: "#F5F6F5"
        },
        green: {
          800: "#245867"
        }
      }
    },
  },
  plugins: [],
}
