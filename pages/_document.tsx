import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Portfolio - Peter Simone" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:description" content="Portfolio - Peter Simone" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:url" content="https://petersim.one" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
