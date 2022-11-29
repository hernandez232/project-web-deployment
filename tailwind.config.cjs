/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'sm': {'max': '1023px'},
        // => @media (max-width: 767px) { ... }
  
        'md': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      

      

      colors: {
        'backblue': '#1F232C',
        'newpink' : '#FC5C65',
        'newblue' : '#3A6AD4',
        'newpurple' : '#963EEF',
        'newgolden' : '#F1A615',
        'background' : '#6B7280'
      },

      fontFamily:{
        Lato : ['Lato'],
        Dm : ['DM Sans']

      },


      backgroundImage: {
        'dog': "url('./src/assets/backdog.jpg')",
        'rabbit': "url('./src/assets/backrabbit.jpg')",
        'dog1': "url('./src/assets/backgrouddog1.jpg')",
      },
      
     },
     
   },
   plugins: [],
 };