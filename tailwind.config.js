/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx, css}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white : '#ffffff',
      black : '#1E2022',
      grey:'#F3F3F3',
      yellow: '#FFFF0B',
      lightYellow:'#F5C60B',
      darkYellow:'#FFEF2E',
      black: '#000000',
      lightBlack:'rgba(0, 0, 0, 0.5)',
      lightGrey:'#EDEDED',
     

    
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '13px',
      md: '14px',
      base: '16px',
      '1xl': '18px',
      '2xl': '24px',
      '4xl': '26px',
      '5xl': '40px',
      '6xl': '117px',

    },
    extend:
    {
      height: {
      hxl: '638px',
      hil:'700px',
        
      },
      backgroundImage: {
        blackGradient: 'radial-gradient(ellipse farthest-side at center bottom, #D8D8D8 0%, #E2DFDF 0%, #FFFFFF 0%, #FFFFFF 0%, #F3F3F2 60%, #FFFFFF 80%)',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'arial': ["Arial"],
      },
    },
  },
  plugins: [],
}

