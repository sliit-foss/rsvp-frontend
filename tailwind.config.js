module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}v', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#121212',
      textBlack: '#202020',
      white: '#ffffff',
      blue: '#005BDC',
      bgWhite: '#F4F3F5',
      gradientBlue: '#21B3D0',
      gradientPurple: '#7B50A2',
      gray: {
        default: '#6C7075',
        light: '#DFDFDF',
      },
      colorIcon: '#BABABA',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      height: ['group-hover'],
      padding: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
