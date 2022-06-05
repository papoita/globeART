
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
      },
      boxShadow: {
        'custom-sm': '1px 2px 2px hsl(220deg 60% 50% / 0.333),2px 4px 4px hsl(220deg 60% 50% / 0.333), 3px 6px 6px hsl(220deg 60% 50% / 0.333)',
        'custom-med': '1px 2px 2px hsl(220deg 60% 50% / 0.333),2px 4px 4px hsl(220deg 60% 50% / 0.333), 4px 8px 8px hsl(220deg 60% 50% / 0.333), 8px 16px 16px hsl(220deg 60% 50% / 0.333)',
        'custom-lg': '1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2),16px 32px 32px hsl(220deg 60% 50% / 0.2)',
      }
    },
  },
  plugins: [require("daisyui")],
}
