export const theme = {
  colors: {
    black: "#111111",
    white: "#FFFFFF",
    text: {
      primary: "#111111",
      secondary: "#111321",
      secondBlack: "#181C27",
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
    logo: 'Poppins, sans-serif',
    manrope: 'Manrope, sans-serif',
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
    time: "4px 4px 8px rgba(0, 0, 0, 0.25);",
  },
  zIndices: {
    search: 1100,
    modal: 1200,
  },
};
