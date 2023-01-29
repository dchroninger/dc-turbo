const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            light: colors.blue[500],
            dark: colors.blue[700]
          },
          secondary: {
            light: colors.blue[500],
            dark: colors.blue[700]
          }
        }
      }
    }
  },
  plugins: []
};
