const colors = require("tailwindcss/colors");
const parrotColors = require("@parrot/config/parrotColors.json");

module.exports = {
  content: [
    "../../packages/components/**/*.tsx",
    "../../apps/**/**/*.tsx",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: "'Roboto', sans-serif",
    },
    colors: {
      ...colors,
      ...parrotColors,
    },
  },
  plugins: [require("flowbite/plugin")],
};
