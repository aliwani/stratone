export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antonSC: ['AntonSC', 'sans-serif'], // ✅ EXACT name
      },
    },
  },
  plugins: [],
}