import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@/state";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>Portfolio - Peter Simone</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
