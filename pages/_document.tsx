import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="theme-color" content="#000000" />
        {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
