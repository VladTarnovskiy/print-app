const withMT = require('@material-tailwind/react/utils/withMT');

const config = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      base_green: '#25b6d2',
      base_blue: '#415e72',
      base_yellow: '#ffd07d',
    },
    fontSize: {
      sm: '1rem',
      base: '1.3rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.2rem',
    },
  },
  plugins: [],
});
export default config;
