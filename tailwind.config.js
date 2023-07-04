/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'green': '#229b50',
        'gold': '#c8b568',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

