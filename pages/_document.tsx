import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#121212" />
        <link rel="apple-touch-icon" href="/apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="Portfolio - Peter Simone" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:description" content="Portfolio - Peter Simone" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:url" content="https://petersim.one" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:image" content="/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pete_sim1" />
        <meta name="twitter:creator" content="@pete_sim1" />
        <meta name="twitter:title" content="Portfolio - Peter Simone" />
        <meta name="twitter:description" content="Portfolio - Peter Simone" />
        <meta property="article:author" content="http://www.twitter.com/pete_sim1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
