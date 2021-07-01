module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}v', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#121212',
      textBlack: '#202020',
      textBlackSecondary: '#3D3D3D',
      textBlackTertiary: '#4F4F4F',
      white: '#ffffff',
      blue: '#005BDC',
      lightBlue: '#21B3D0',
      bgWhite: '#F4F3F5',
      gradientBlue: '#21B3D0',
      gradientPurple: '#7B50A2',
      gray: {
        default: '#6C7075',
        light: '#DFDFDF',
        login: '#9E9E9E',
      },
      colorIcon: '#BABABA',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    boxShadow:{
      'ds1': '10px 4px 20px rgba(0, 0, 0, 0.25)',
      'ds2': '0px 0px 20px rgba(155, 155, 155, 0.4)'
    },
    extend: {

    },
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
