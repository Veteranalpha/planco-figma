/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontSize: {
        'xxs': '0.313rem'
      },
      height:{
        '80vh': '80vh',
      },
      colors: {
        secondaryBlue: '#F0F5FA',  // secondary color
        primaryBlue: '#48BDED',    // primary color
        customOrange: '#E77551',   // orange color
        primaryblack: '#264653',   //black color
        orangeunderline: '#F0D3CC'
      },
      backgroundImage: {
        'hero-image': "url('src\assets\coverbg.png')",
      }
    },
  },
  plugins: [],
}

