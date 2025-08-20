/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fdfdfd",
        ink: "#111111",
        accent: "#E9D8C5"
      },
      fontFamily: {
        display: ["ui-serif","Georgia","serif"],
        body: ["ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif"]
      },
      backgroundImage: {
        "paper-grid": "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 24px)"
      }
    },
  },
  plugins: [],
};
