/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coffee: {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn .6s ease-in-out',
      },
      backgroundImage: {
        slider: "url('/assets/slider-bg.jpeg')",
        'magazine-1': "url('/assets/magazine-image-01.jpeg')",
        'magazine-2': "url('/assets/magazine-image-02.jpeg')",
        'magazine-3': "url('/assets/magazine-image-03.jpeg')",
        'parallax-1': "url('/assets/bg-parallax-01.jpeg')",
      },
    },
  },
  plugins: [],
};
