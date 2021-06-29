import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/600.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
