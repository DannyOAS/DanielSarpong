/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  safelist: [
    'mt-16',
    'md:mt-20', 
    'lg:mt-24',
    'mt-20',
    'sm:mt-28',
    'md:mt-32',
    'mt-32',
    'sm:mt-36',
    'md:mt-40'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a', // Navy blue
        'primary-light': '#3b82f6', // Lighter blue
        'accent': '#0891b2', // Teal
        'accent-light': '#06b6d4', // Light teal
        'warm': '#f97316', // Orange
        'warm-light': '#fb923c', // Light orange
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.07), 0 20px 35px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}