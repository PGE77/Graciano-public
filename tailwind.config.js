/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx, css}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#1E2022",
      grey: "#F3F3F3",
      yellow: "#FFFF0B",
      lightYellow: "#F5C60B",
      darkYellow: "#FFEF2E",
      black: "#000000",
      lightBlack: "rgba(0, 0, 0, 0.5)",
      lightGrey: "#EDEDED",
      darkGrey:"#999999",
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "13px",
      md: "14px",
      base: "16px",
      "0xl":"17px",
      "1xl": "18px",
      "xl":"20px",
      "2xl": "24px",
      "3xl":"30px",
      "4xl": "26px",
      "5xl": "40px",
      "6xl": "117px",
    },
    extend: {
      height: {
        hxl: "626px",
        hil: "655px",
      },

      backgroundImage: {
        blackGradient:
          "radial-gradient(ellipse farthest-side at center bottom, #D8D8D8 0%, #E2DFDF 0%, #FFFFFF 0%, #FFFFFF 0%, #F3F3F2 60%, #FFFFFF 80%)",
        gradientYellowFrom:
          "linear-gradient(70.85deg, rgba(245, 198, 11, 0.1) -1.56%, rgba(234, 234, 234, 0.1) 36.2%)",
        gradientYellowTo:
          "linear-gradient(-70.82deg, rgba(245, 198, 11, 0.1) -1.57%, rgba(234, 234, 234, 0.1) 36.21%)",
      },
      boxShadow: {
        cardShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        arial: ["Arial"],
      },
    },
  },
  plugins: [],
};
