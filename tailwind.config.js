/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Red-Hat': ['"Red Hat Display", serif'],
      },
  
   
      boxShadow: {
       hero: ' 0px 4px 3px 0px #00000040',
       todo: ' 0px -1px 0px 0px #9A9FBF1A inset',
       chillbay: ' 0px 8px 18px 0px #171E370D'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

