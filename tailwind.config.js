/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

