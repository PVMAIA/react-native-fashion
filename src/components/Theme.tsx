import {
  createText,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const palette = {
  white: "#FFFFFF",
  cyan: "#2CB9B0",
  lightCyan: "#E7F9F7",
  darkBlue: "#0C0D34",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  darkPink: "#FF0058",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
  grey: "#F4F0EF",
  darkGrey: "#808080",
};

const theme = createTheme({
  colors: {
    background: palette.white,
    background2: palette.grey,
    white: palette.white,
    primary: palette.cyan,
    primaryLight: palette.lightCyan,
    secondary: palette.darkBlue,
    info: palette.darkGrey,
    edit: palette.lightBlue,
    danger: palette.darkPink,
    text: "rgba(12, 13, 52, 0.7)",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-SemiBold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-SemiBold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
export default theme;
