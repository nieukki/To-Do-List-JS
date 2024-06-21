/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        color1: "#F44336",
        color2: "#64E291",
        color3: "#F1BC31",
        color4: "#7A7E82",
        color5: "#F7847B",
      },
      fontFamily: {
        family1: " 'Poppins', sans-serif;",
      },
      screens: {
        lg: "1200px",
        xs: "400px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
        },
      },
    },
  },
  plugins: [],
};
