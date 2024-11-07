/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0d9488",
        PrimaryDark: "#083344",
      },
      backgroundColor:{
        Primary: "#0d9488",
        PrimaryDark: "#083344",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        Title:["Koulen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
