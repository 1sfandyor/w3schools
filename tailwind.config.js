/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'karzinka': 'url("./assets/karzinka.svg")',
        'arrowUpIcon': 'url("../src/arrow-up-icon.svg")',
      },
      screens: {
        xs: '500px',
        sm: '601px',
        lt: '617px',
        xlt: '674px',
        smd: '689px',
        lmd: '748px',
        md: '768px',
        mmd: '829px',
        xmd: '887px',
        xslp: '955px',
        slp: '993px',
        llp: '1006px',
        lp: '1024px',
        mlp: '1119px',
        xlp: '1214px',
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
        
        // PURPLE
        purple: "#c5a5c5",
        darkPurple: '#9763f6',

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