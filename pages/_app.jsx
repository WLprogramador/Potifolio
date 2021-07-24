import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin:0 auto;
  padding: 0;
  box-sizing: border-box;
}
html{
  box-sizing: border-box;
  background: #F5F4F0;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  font-family: 'Roboto', sans-serif;
}
`;
 
const theme = {
  colors: {
    primary: "#fafafa",
    black: "#000000",
    blue_dark_250: "#060962",
    red: "#FF0000"
  },
};
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
 
export default MyApp;