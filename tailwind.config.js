module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          purple: {
            light: '#42476E',
            dark:'#515575',
          }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }