import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 
      CssBaseline adds Normalize CSS. It makes page to follow mui. 
      It adds CSS properties like "box-sizing: border-box" and "margin : 0"
      */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
