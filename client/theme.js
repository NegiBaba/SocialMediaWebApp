import { createTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#5C67A3",
    main: "#3F4771",
    dark: "#2E355B",
    contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#FF79B0",
      main: "#FF4081",
      dark: "#C60055",
      contrastText: "#000000",
    },
    openTitle: "#3F4771",
    protectedTitle: pink["400"],
    type: "light"
  }
});

export default theme;