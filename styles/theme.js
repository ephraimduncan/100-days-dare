import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bluee: {
      100: "#5A06FF",
      200: "#5A06FF",
    },
    ash: "#E1D9F2",
    orange: "#FFAC06",
    grey: {
      100: "#F5EBD6",
      200: "#F3E2ED",
      300: "#ece7f5",
    },
    lime: "#ACFF06",
    black: "#323232",
    pink: "#FF06AC",
    blu: "#5A06FF",
  },
  fonts: {
    heading: "Bungee",
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
});

export default theme;
