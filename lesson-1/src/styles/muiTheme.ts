import { Theme, createTheme } from "@mui/material";
import { colorBlack } from "./colors";

const createThemeApp = (): Theme => (createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorBlack,
        }
      }
    }
  }
}));

export default createThemeApp;
