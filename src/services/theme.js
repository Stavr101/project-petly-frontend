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
    gradient: {
      main: "linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",
    },
    text: {
      primary: "#111111",
      secondary: "rgba(17, 17, 17, 0.6)",
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
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.36,
      letterSpacing: "-0.01em",
    },
  },
});

export const theme1 = {
  colors: {
    black: "#111111",
    white: "#FFFFFF",
    text: {
      primary: "#111111",
      secondary: "#111321",
      gray: "rgba(17, 17, 17, 0.6)",
      links: "#3091EB",
    },
    background: "#FDF7F2",
    accent: "#F59256",
    gradient: "linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",
    modal: "rgba(0, 0, 0, 0.8)",
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    xs: "12px",
    s: "18px",
    m: "20px",
    l: "36px",
    xl: "48px",
    xxl: "68px",
  },
  fontWeights: {
    normal: 400,
    semibold: 500,
    bold: 700,
  },
  borders: {
    none: "none",
    normal: "2px solid",
  },
  radii: {
    none: "0",
    normal: "8px",
    round: "50%",
  },
  shadows: {
    card: "7px 4px 14px rgba(49, 21, 4, 0.07)",
    modal: "7px 4px 14px rgba(0, 0, 0, 0.11)",
  },
  zIndices: {
    search: 1100,
    modal: 1200,
  },
};
