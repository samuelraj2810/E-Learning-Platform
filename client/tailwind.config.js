/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // cursor: {
      //   Custom: ['url(../../src/Assets/Icons/cursor.png)', 'auto'], // Adjust path accordingly
      // },
      fontFamily:{
        Poppins:["Poppins", "serif"]
      }
    },
  },
  plugins: [],
};