/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'titillium': ['Titillium Web'],
        'bebas': ['Bebas Neue']
      },
      boxShadow: {
        'md': '0 4px 24px 0 rgba(0, 0, 0, 0.16)'
      }
    },
    colors: {
      gray: "#828282",
      black: "#2F2F2F",
      white: "#F5F5F5",
      orange: "#E0872C",
      green: "#008421"
    },
  },
  plugins: []
};

