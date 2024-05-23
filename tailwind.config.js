const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(91, 90, 251, 0.2)',
        'custom-white': 'white'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5B5AFB, #1F1FA7)',
        'custom-blueish': 'linear-gradient(to right, #5A117B, #36044D)'
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

