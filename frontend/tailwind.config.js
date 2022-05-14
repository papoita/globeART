module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
