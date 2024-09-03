// default app theme and colors
const fontFamily =
  "'PlusJakartaSans', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important";

export const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 430,
      tablet: 1024,
    },
  },
  palette: {
    primary: {
      main: "#ed1c24",
      black: "#000000",
      white: "#ffffff",
      mainGradient:
        "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(241,249,246,1) 35%, #f7b0c1 100%)",
    },
    secondary: {
      main: "#fff",
    },
    accents: {
      cards: "#171717",
      overlayBar: "#2e2e2e",
      dividerDark: "#333333",
      grey: "#909090",
      strokes: "#e9e9e9",
      neutral: "#fafafa",
    },
    status: {
      error: "#ff0e14",
      caution: "#dfa510",
      success: "#1a932e",
      critical: "#e85f11",
    },
    background: {
      main: "#0f0f13",
    },
    text: {
      greyText: "#909090",
      placeholder: "#b3b3b3",
      main: "#111111",
      white: "#EEEEEE",
    },
  },

  typography: {
    fontFamily,
    title1: {
      fontFamily,
      fontSize: 48,
      lineHeight: 74 / 34,
      fontWeight: 600,
      color: "#FFFFFF",
    },
    title: {
      fontFamily,
      fontSize: 40,
      lineHeight: 74 / 34,
      fontWeight: 500,
      color: "#FFFFFF",
    },
    h1: {
      fontFamily,
      fontSize: 40,
      lineHeight: 74 / 34,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    h2: {
      fontFamily,
      fontSize: 32,
      lineHeight: 38 / 30,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    miniH2: {
      fontFamily,
      fontSize: 24,
      lineHeight: "30px",
      color: "#FFFFFF",
      fontWeight: 400,
    },
    h3: {
      fontFamily,
      fontSize: 20,
      lineHeight: 48 / 26,
      color: "#FFFFFF",
      fontWeight: 600,
    },
    semiBoldH3: {
      fontFamily,
      fontSize: 20,
      lineHeight: 48 / 26,
      color: "#FFFFFF",
      fontWeight: 500,
    },
    boldH3: {
      fontFamily,
      fontSize: 20,
      lineHeight: 48 / 26,
      color: "#FFFFFF",
      fontWeight: 700,
    },
    h4: {
      fontFamily,
      fontSize: 16,
      lineHeight: 40 / 24,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    boldH4: {
      fontFamily,
      fontSize: 16,
      lineHeight: 40 / 24,
      color: "#FFFFFF",
      fontWeight: 700,
    },
    semiBoldH4: {
      fontFamily,
      fontSize: 16,
      lineHeight: 40 / 24,
      color: "#FFFFFF",
      fontWeight: 600,
    },
    subHeading1: {
      fontFamily,
      fontSize: 24,
      lineHeight: 24 / 20,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    subHeading2: {
      fontFamily,
      fontSize: 16,
      lineHeight: 24 / 18,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    primaryBodyText: {
      fontFamily,
      fontSize: 16,
      lineHeight: 24 / 15,
      color: "#FFFFFF",
      fontWeight: 400,
    },
    inputField: {
      fontFamily,
      fontSize: 16,
      lineHeight: 22 / 14,
      color: "#FFFFFF",
      fontWeight: 500,
    },
    secondaryBodyText: {
      fontFamily,
      fontSize: 14,
      color: "#FFFFFF",
      lineHeight: 22 / 14,
      fontWeight: 400,
    },
    secondaryBodyBoldText: {
      fontFamily,
      fontSize: 14,
      color: "#FFFFFF",
      lineHeight: 22 / 14,
      fontWeight: 700,
    },
    chipsText: {
      fontFamily,
      fontSize: 12,
      lineHeight: 22 / 14,
      color: "#FFFFFF",
      fontWeight: 500,
    },
    button: {
      fontFamily,
      fontSize: 14,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 500,
      textTransform: "unset",
    },
    buttonAlternateText: {
      fontFamily,
      fontSize: 12,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 700,
      textTransform: "unset",
    },
    c1: {
      fontFamily,
      fontSize: 13,
      lineHeight: 20 / 13,
      fontWeight: 500,
    },
    c2: {
      fontFamily,
      fontSize: 12,
      lineHeight: 17 / 12,
      fontWeight: 600,
    },
    c2Light: {
      fontFamily,
      fontSize: 12,
      lineHeight: 17 / 12,
      fontWeight: 400,
    },
    label: {
      fontFamily,
      fontSize: 11,
      lineHeight: 15 / 11,
      fontWeight: 600,
    },
  },
  shadows: ["1", "2", "3", "4", ...Array(24).fill("none")],
  overrides: {},
};
