import { createTheme } from "@mui/material";


const darkTheme = createTheme({
  palette: {
    mode: 'dark', // This sets the theme to dark mode
    primary: {
      main: '#CAD5E2', // Customize the primary color to your preference
    },
    secondary: {
      
      main: '#5A20CB', // Customize the secondary color to your preference
    },
    background:{
      main: '#151515',
      default:"#151515",
      paper: '#151515' 
    },
    // verifyButton:{
    //   main: '#000000',
    // },
    textColor:{
      main:"#111111"
    }
  },
});

export default darkTheme;
