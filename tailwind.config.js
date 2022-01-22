module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        sans: ['Poppins','sans-serif']
      },
      colors: {
        darkbg: "hsl(207, 26%, 17%)",
        darkelem: "hsl(209, 23%, 22%)",
        darktext: "hsl(0, 0%, 100%)",
        lightbg: "hsl(0, 0%, 98%)",
        lightelem: "hsl(0, 0%, 100%)",
        lighttext: "hsl(200, 15%, 8%)",
      }
    },
  },
  plugins: [],
}