import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
};

export default App;
