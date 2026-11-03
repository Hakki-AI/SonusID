/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sonus: {
          dark: '#08090D',
          card: 'rgba(18, 20, 29, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#7928CA',
          neonCyan: '#00F2FE',
          neonPink: '#FF007F',
          neonPurple: '#8B5CF6'
        }
      }
    },
  },
  plugins: [],
}
