
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shrikhand': ['shrikhand', 'cursive'],
        'urbanist': ['urbanist', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 2.3s linear infinite',
      },
      scale: {
        '10003': '1.003',
        '102': '1.02',
      }
    },
  },
  plugins: [require("daisyui")],
}
