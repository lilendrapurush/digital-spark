// tailwind.config.js
module.exports = {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
      }// tailwind.config.js
module.exports = {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
  ],
  theme: {
    extend: {
      colors: {
        // Add your brand colors to Tailwind's palette
        primary: {
          50: '#FFF8E6',
          100: '#FFEECC',
          200: '#FFDD99',
          300: '#FFCC66',
          400: '#FFBB33',
          500: '#FFC107', // Golden Yellow
          600: '#E6AC00',
          700: '#B38800',
          800: '#806000',
          900: '#4D3700',
        },
        navy: {
          50: '#F0F3F8',
          100: '#D9E0EB',
          200: '#B8C5D6',
          300: '#91A4BE',
          400: '#6A82A6',
          500: '#1B263B', // Navy Blue
          600: '#161F2E',
          700: '#111822',
          800: '#0C1016',
          900: '#07080A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 193, 7, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 193, 7, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
    },
  },
  plugins: [],
}