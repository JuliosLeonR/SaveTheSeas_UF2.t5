/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./html/**/*.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#4B86B4",
        textColor: "#EDF6F9",
        "sts-dark-blue": "#2A4D69",
        "sts-sky-blue": "#ADCBE3",
        "sts-blue": "#43A8EC",
        "sts-white": "#E7EFF6",
      },
    },
  },
  plugins: [],
};
