/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#551790",
        mainBackgroundColor: "#fcfcfc",
        textColor: "#000000",
        projectsTextColor: "#fff",
        secondaryTextColor: "#797979",
        formColor: "#745690",
        linkedin: "#15487D",
        primaryColorLighter: "#7949A8",
      },
      fontFamily: {
        body: ["Nunito", "ui-sans-serif"],
        serif: ["Staatliches", "ui-serif"],
      },
    },
  },
  plugins: [],
};
