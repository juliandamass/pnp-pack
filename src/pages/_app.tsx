import type { AppProps } from "next/app";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import "../styles/globals.css";
import "../../node_modules/@iconscout/unicons/css/line.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
