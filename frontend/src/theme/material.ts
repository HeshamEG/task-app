import { responsiveFontSizes } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
const cairoRegular = {
  fontFamily: "Cairo",
  fontStyle: "normal",
  src: `
    url(${process.env.PUBLIC_URL}/assets/fonts/Cairo-Regular.ttf)
  `,
};

const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#044482",
    },
    secondary: {
      main: "#FF7B69",
    },
    success: {
      main: "#2ECC71",
    },
    warning: {
      main: "#e67e22",
    },
    error: {
      main: "#E74C3C",
    },
    text: {
      primary: "#222222",
      secondary: "#383838",
    },
    action: {
      active: "#864fa3",
    },
  },
  typography: {
    subtitle1: {
      fontWeight: "bolder",
      textAlign: "center",
    },
    fontFamily: [
      "Cairo",
      "Amiri",
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [cairoRegular],
      },
    },
    MuiButton: {
      contained: {
        boxShadow: "0px",
        MozBoxShadow: "0px",
        WebkitBoxShadow: "0px",
        borderRadius: "3px",
      },
    },
    MuiTableSortLabel: {
      root: {
        color: "#fff !important",
        "&:focus": {
          color: "#fff !important",
        },
        "&:hover": {
          color: "#fff !important",
        },
        "&:active": {
          color: "#fff !important",
        },
      },
      active: {
        color: "#fff !important",
      },
    },
    MuiSelect: {
      icon: {
        color: "#044482",
      },
    },
    MuiIconButton: {
      root: {
        color: "#044482",
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

const themeAR = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#044482",
    },
    secondary: {
      main: "#FF7B69",
    },
    success: {
      main: "#2ECC71",
    },
    warning: {
      main: "#e67e22",
    },
    error: {
      main: "#E74C3C",
    },
    text: {
      primary: "#222222",
      secondary: "#383838",
    },
    action: {
      active: "#864fa3",
    },
  },
  typography: {
    fontFamily: [
      "Cairo",
      "Amiri",
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [cairoRegular],
      },
    },
    MuiButton: {
      contained: {
        boxShadow: "0px",
        MozBoxShadow: "0px",
        WebkitBoxShadow: "0px",
        borderRadius: "3px",
      },
    },
    MuiTableSortLabel: {
      root: {
        color: "#fff !important",
        "&:focus": {
          color: "#fff !important",
        },
        "&:hover": {
          color: "#fff !important",
        },
        "&:active": {
          color: "#fff !important",
        },
      },
      active: {
        color: "#fff !important",
      },
    },
    MuiSelect: {
      icon: {
        color: "#044482",
      },
    },
    MuiIconButton: {
      root: {
        color: "#044482",
      },
    },
  },
});

const responsiveThemeAR = responsiveFontSizes(themeAR);

export { responsiveTheme, responsiveThemeAR };
