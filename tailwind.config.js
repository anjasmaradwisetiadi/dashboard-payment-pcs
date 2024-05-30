/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary' : '#014D81',
        'red-primary': '#f83723',
        'green-primary': '#16A34A',
        'green-secondary': '#a7f3d0'
      },
    },
  },
  plugins: [],
}

