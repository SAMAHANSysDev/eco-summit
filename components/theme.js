import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#64a4af",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    h1: {
      fontSize: '5rem',
      fontFamily: 'Montserrat',
      fontWeight: 900
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 900
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 900
    },
    h4: {
      fontFamily: 'Montserrat',
      letterSpacing: '0.1em',
      fontWeight: 900
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 600
    },
    h6: {
      fontFamily: 'Montserrat',
      letterSpacing: '0.015em',
      fontWeight: 600
    },
    body1: {
      color: '#233e4c',
    },
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  spacing: 10
}), { factor: 4 });