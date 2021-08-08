module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        'myblue': '#42ACF2',
        'myviolet': '#B042F2',
        'light-blue': '#3bb4ff54'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }