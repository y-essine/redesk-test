/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#201e2d',
        secondary: '#2a2839',
        tertiary: '#12111B',
        accent: '#e47373',
        'primary-t': '#cbd5e1',
        'secondary-t': '#A29CDE',
        'tertiary-t': '#5a567c'
      },
      screens: {
        smd: '880px',
        sm: '640px',
        xs: '560px',
        '2xs': '425px'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
      piazzolla: ['Piazzolla', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
