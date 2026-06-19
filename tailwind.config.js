/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0066FF',
        ink: '#0A0A0A',
        mist: '#F4F7FB'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0, 102, 255, 0.18)'
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(0, 102, 255, 0.16), transparent 40%), linear-gradient(transparent 95%, rgba(148, 163, 184, 0.15) 95%), linear-gradient(90deg, transparent 95%, rgba(148, 163, 184, 0.15) 95%)'
      }
    }
  },
  plugins: []
};
