/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '335px',
        '2xs': '424px',
        'xs': '550px',  // Extra small screens (less than 480px)
        'sm': '640px',  // Small screens (640px, default)
        'md': '768px',  // Medium screens (768px)
        'lg': '1024px', // Large screens (1024px)
        'xl': '1280px', // Extra large screens (1280px)
        '2xl': '1370px', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
