/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        secondary: "#767676",
        pure: "#fff",
        fade: "#FFFFFFB2",
        flat: "#F5F5F3",
        palet: "#F3F3F3",
        rare: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
