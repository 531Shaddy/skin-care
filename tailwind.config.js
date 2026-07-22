/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1ea',
        ivory: '#faf7f2',
        sand: '#e8dfd2',
        sage: '#8a9a86',
        'sage-dark': '#6b7a67',
        beige: '#d9c9b3',
        charcoal: '#2a2a28',
        'charcoal-soft': '#4a4a47',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42,42,40,0.04), 0 8px 24px rgba(42,42,40,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};