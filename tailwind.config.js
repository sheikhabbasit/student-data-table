const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    screens: {
      mobile: "430px",
      tablet: "1024px",
    },
    extend: {
      colors: {
        body: {
          main: `#0F0F13`,
        },
        primary: {
          main: "#ED1C24",
          alternate: "#ee201c",
          black: "#000000",
          white: "#FFFFFF",
          link: "#2F80ED",
          mainGradient:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #f7b0c1 100%)",
        },
        secondary: {
          main: "#121212",
          main2: "#171717",
          main3: "#131313",
          main4: "#222222",
          charcoal: "#2C2C2C",
          charcoalDark: "#272727",
          charcoalLight: "#333333",
          charcoalLight2: "#3e3e3e",
          darkGray: "#D9D9D9",
          normalGray: "#E9E9E9",
          lightGray: "#EFEFEF",
          extraLightGray: "#F0F0F0",
        },
        supportive: {
          green_main: "#00AB1B",
          orange_main: "#dfa510",
          pink_main: "#FF4E64",
        },
        error: {
          main: "#FF4E64",
        },
        background: {
          main: "#FFFFFF",
        },
        font: {
          main: "#111111",
          white: "#FFFFFF",
          lightGray: "#B0B0B0",
          lighterGray: "#a3a3a3",
          gray: "#575757",
          darkGray: "#7D7D7D",
          whiteGray: "#DCDCDC",
          grey: "#909090",
        },
        border: {
          grey: "#4e4e4e",
          grey2: "#545454",
          grey3: "#b6b6b6",
        },
      },
      backgroundImage: {
        categoryGradient: "linear-gradient(180deg, #ED1C24 0%, #FF6B71 100%)",
      },
      fontFamily: {
        sans: ['"PlusJakartaSans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Heading
        large: [
          "128px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        large2: [
          "64px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        title: [
          "48px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        title2: [
          "40px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        title3: [
          "32px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        title4: [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        // Paragraph
        largeParagraph: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        mediumParagraph: [
          "18px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        normalParagraph: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        smallParagraph: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        xsParagraph: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        exsParagraph: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        // Accent
        accent: [
          "20px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent2: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent3: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent4: [
          "12px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
        accent5: [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "600",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [],
};
