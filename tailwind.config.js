/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '476px',
        lt: '603px',
        smd: '617px',
        md: '768px',
        lp: '1024px',
        lg: '1300px',
        xl: '1440px',
      '2xl': '1990px',
      },

      fontFamily: {
        primary: ['Source Sans Pro', 'Arial', 'sans-serif']
      },

      colors: {
        // GRAY
        gray: '#38444d',
        grayer: "#282A35",
        darkgray: '#1d2a35',
        lightgray: '#f3ecea',
        grayText: '#ddd',

        // BLUE
        blue: '#80b6ff',
        darkBlue: '#0d1721',
        mBlue: '#15202b',

        // GREEN
        green: '#04AA6D',
        darkGreen: "#88c999",

        laym: "#D9EEE1",
        red: '#ff9999',
        yellow: "#FFF4A3",
        pink: '#ffc0c7',
        cyan: '#96D4D4',
        purple: "#c5a5c5",
        brown: "#a52a2a"
      },
    },


    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    }

  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '476px',
          },
          '@screen lt': {
            maxWidth: '603px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lp': {
            maxWidth: '1024px',
          },
          '@screen lg': {
            maxWidth: '1300px',
          },
          '@screen xl': {
            maxWidth: '1440px',
          },
          '@screen 2xl': {
            maxWidth: '1990px', 
          },
        }
      })
    }
  ],
}