/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "3fr 2fr",
        mobile_layout: "1fr",
      },
    },
    //#1e3a8a
    //#152863
    //#07b4d5
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}