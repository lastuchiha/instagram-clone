/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Arial']
      // }
      colors: {
        blue: "#0095F6",
        lightBlue: "#4DB5F9",
        link: '#00376B',
        red: '#F04956',
        lightGray: "#FAFAFA"
      },

    },
  },
  plugins: [],
}
