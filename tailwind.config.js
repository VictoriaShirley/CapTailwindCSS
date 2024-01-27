/** @type {import('tailwindcss').Config} */
module.exports = {
  purgue:[],
  darkMode: 'media',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      
      colors: {
        brand: {
          100: '#fc92e9',
          200: '#f763dd',
          300: '#f23fd3',
          500: '#c712a7',
          800: '#8f0d78',
        }
      }
    },
  },
    plugins: [],
    safelist: [{ pattern: /^.*$/ }],
  }
