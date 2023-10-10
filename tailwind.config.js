/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oneColor: "#010402",
        twoColor: "#742cbd", // 441870 9934f8
        threeColor: "#fdf5f4",
        fourColor: "#752b2b",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
