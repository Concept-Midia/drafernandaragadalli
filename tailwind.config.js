/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF6F2',
          100: '#F3EBE3',
          200: '#E4D4C8',
          300: '#CFB8A5',
          400: '#B5957E',
          500: '#9C775D', // Warm mocha brown
          600: '#845F46', // Primary luxury caramel/mocha brown
          700: '#6E4D37',
          800: '#4D3425',
          900: '#2E1E16',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE3',
          300: '#EAE0D3',
          400: '#DCCFBF',
        },
        gold: {
          300: '#E8D5B7',
          400: '#D8BF95',
          500: '#C5A880', // Champagne luxury gold
          600: '#A88B5E',
        },
        charcoal: {
          700: '#473935',
          800: '#2E2320',
          900: '#1F1714',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'carousel': 'carousel 40s linear infinite',
        'scroll-up': 'scrollUp 35s linear infinite',
        'scroll-up-slow': 'scrollUp 42s linear infinite',
        'scroll-up-fast': 'scrollUp 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333333%)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
