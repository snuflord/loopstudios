/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
       screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
       },
        fontFamily: {
          sans: ['Josefin Sans', 'sans-serif'],
          alata: ['Alata'],
        },
        letterSpacing: {
          bigboi: '0.3em',
        }
    },
  },
  plugins: [],
}
