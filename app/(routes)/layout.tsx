import "@/globals.css";
// while this is in the dist, I still get an error...?
// eslint-disable-next-line import/no-extraneous-dependencies
import "katex/dist/katex.min.css";
import { ThemeProvider } from "@/_store/theme";
import { ScrollProvider } from "@/_store/scroll";
import { Metadata, Viewport } from "next";

import Layout from "@/_components/Layout";
import { Light } from "@/_components/elements";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://petersim.one"),
  title: "Peter Simone | Portfolio",
  description: "Peter Simone | Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch.png",
    shortcut: "/apple-touch.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Peter Simone | Portfolio",
    description: "Peter Simone | Portfolio",
    type: "website",
    url: "https://petersim.one",
    locale: "en_US",
  },
  twitter: {
    title: "Peter Simone | Portfolio",
    description: "Peter Simone | Portfolio",
    card: "summary_large_image",
    site: "@pete_sim1",
    creator: "@pete_sim1",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
};

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body style={{ visibility: "hidden" }} className={GeistSans.className}>
        <ThemeProvider>
          <ScrollProvider>
            <Layout>{children}</Layout>
            <Light />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
