/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#212121',
      white: '#F1F1F1',

      primary: '#F1F1F1',
      secondary: '#212121',
      // primary: '#212121',
      // secondary: '#F1F1F1',   
      headingBg: "#004D43",   // Green
      bg: '#CDEA68',     //Yellow
    },
    extend: {},
  },
  plugins: [],
}