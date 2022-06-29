/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oneColor: "#0d1212",
        twoColor: "#eeb34c",
        threeColor: "#e1f1f1", //fff6f5
        fourColor: "#ea5216",
      },
    },
  },
  plugins: [],
};
