import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    blue: "#1E213A",
    darkBlue: "#100E1D",
    gray: "#6E707A", 
    gray2: "#A09FB1",
    gray3: "#88869D",
    gray4: "#616475",
    pink: "#e94560",
    yellow: "#FFEC65",
    white: "#E7E7EB",
  }
}

const Theme = ({ children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;