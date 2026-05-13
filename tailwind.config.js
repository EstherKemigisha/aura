/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'deep-brown': '#3D1F0A',
        gold: '#C9A84C',
        'soft-green': '#7A9E7E',
        'pale-green': '#E8F5F0',
        'warm-cream': '#FAF8F3',
        'light-gold': '#E8D5A7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(201, 168, 76, 0.15)',
        'float': '0 20px 60px rgba(61, 31, 10, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
