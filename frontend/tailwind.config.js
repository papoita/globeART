
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'shrikhand': ['shrikhand', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}
