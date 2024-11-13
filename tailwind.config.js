/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./*.html" , "./public/js/**/*.js"],
  theme: {
    
  
    extend: {
      
      screens: {
        "mobail": "0px",
        "desktop":"1024px",

      },
      

    },
  },
  plugins: [],
}

