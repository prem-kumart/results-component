/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens : {
       'desktop' : '1440px',
    },
    colors : {
       'yellow' : '#FFB21E',
       'blue'   : '#1125D6',
       'green'  : '#1125D6',
       'red'    : '#FF5555',
       'dark-navy' :' #303B59',
       'light-blue' : '#CAC9FF',
       'very-light-blue' : '#ECF2FF',
       'green-teal': 'hsl(166, 100%, 37%)',
       'white' : '#FFFFFF'
    },
    fontFamily : {
       'hanken' : ["Hanken Grotesk", 'serif']
    },
    extend: {},
  },
  plugins: [],
}

