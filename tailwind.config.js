/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oneColor: "#000101",
        twoColor: "#e2a416",
        threeColor: "#e1f1f1", //fff6f5
        fourColor: "#ea5216",
      },
    },
  },
  plugins: [],
};
