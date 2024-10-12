/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'custom-yellow': '#ffffce',
        // 'custom-teal-dark': '#0d656d',
        // 'custom-teal-light': '#a2dfcb',
        // 'custom-gray': '#2b3039',
        // 'dark-blue': '#201E43',
        // 'medium-blue': '#134B70',
        // 'light-blue': '#508C9B',
        // 'off-white': '#EEEEEE',
        'rich-black': '#222831',
        'charcoal-gray': '#393E46',
        'teal': '#00ADB5',
        'off-white': '#EEEEEE',
      },
      textColor: {
        initial: 'initial',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        
      },
      animation: {
        blink: 'blink 0.7s infinite',
        scroll: 'scroll 20s linear infinite',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

