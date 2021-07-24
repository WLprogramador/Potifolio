import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  font-family:;
}
`;
 
const theme = {
  colors: {
    primary: "#fafafa",
    black: "#000000"
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