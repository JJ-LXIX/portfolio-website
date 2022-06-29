/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oneColor: "#010402", //#0d1212
        twoColor: "#9934f8", //#eeb34c
        threeColor: "#fdf5f4", //fff6f5
        fourColor: "#752b2b",
      },
    },
  },
  plugins: [],
};
