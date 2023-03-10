import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F59256",
    },

    background: {
      default: "#FDF7F2",
    },
    link: {
      main: "#3091EB",
    },

    text: {
      primary: "#111111",
      secondary: "rgba(17, 17, 17, 0.6)",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Manrope,sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "Manrope,sans-serif",
      fontSize: 68,
      fontWeight: 700,
      lineHeight: 1.47,
    },
    h2: {
      fontFamily: "Manrope,sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.38,
    },
    h3: {
      fontFamily: "Manrope,sans-serif",
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.36,
      letterSpacing: "0.04em",
    },
    h4: {
      fontFamily: "Manrope,sans-serif",
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.36,
      letterSpacing: "-0.02em",
    },
    body1: {
      fontFamily: "Manrope,sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.38,
    },
  },
});
