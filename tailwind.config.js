module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        black: '#121212',
        textBlack: '#202020',
        textBlackSecondary: '#3D3D3D',
        textBlackTertiary: '#4F4F4F',
        white: '#ffffff',
        blue: '#005BDC',
        lightBlue: '#21B3D0',
        lightBlueAccent: '#66a1ff',
        redAccent: '#ff5454',
        bgWhite: '#F4F3F5',
        gradientBlue: '#21B3D0',
        gradientPurple: '#7B50A2',
        purple: {
          light: '#626CAF',
          dark: '#4A56A6',
        },

        gray: {
          default: '#6C7075',
          light: '#DFDFDF',
          dark: '#363636',
          login: '#9E9E9E',
        },
        colorIcon: '#BABABA',
      },
      boxShadow: {
        ds1: '10px 4px 20px rgba(0, 0, 0, 0.25)',
        ds2: '0px 0px 20px rgba(155, 155, 155, 0.4)',
        ds3: '0px 0px 40px rgba(120, 120, 100, 0.4)',
        infoCard: ' 0px 0px 20px rgba(110, 110, 110, 0.4)',
        infoCardHover: ' 0px 0px 35px rgba(0, 0, 0, 0.3)',
      },
      scale: {
        103: '1.03',
      },
      margin: {
        '20vw': '20vw',
        '20vh': '20vh',
        '25vh': '25vh',
      },
      height: {
        '85vh-50': 'calc(85vh - 50px)',
        '85vh': '85vh',
        '95vh': '95vh',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      height: ['group-hover'],
      padding: ['group-hover'],
      brightness: ['hover'],
      borderWidth: ['focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
