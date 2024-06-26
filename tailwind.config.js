/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem'
      },
      height:{
        '80vh': '80vh',
      },
      colors: {
        secondaryBlue: '#F0F5FA',  // secondary color
        primaryBlue: '#48BDED',    // primary color
        customOrange: '#E77551',   // orange color
        primaryblack: '#264653',   //black color
      },
      backgroundImage: {
        'hero-image': "url('src\img@2x.png')",
      }
    },
  },
  plugins: [],
}

