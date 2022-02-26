import type { AppProps } from "next/app";

import "@parrot/config/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
