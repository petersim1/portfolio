import "@/globals.css";
import { ThemeProvider } from "@/_store/theme";
import { ScrollProvider } from "@/_store/scroll";
import { Metadata, Viewport } from "next";

import Layout from "@/_components/layout/Layout";
import Header from "@/_components/layout/Header";
import Footer from "@/_components/layout/Footer";
import Light from "@/_components/elements/Light";
import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  metadataBase: new URL("https://petersim.one"),
  title: "Portfolio - Peter Simone",
  description: "Portfolio - Peter Simone",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch.png",
    shortcut: "/apple-touch.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Portfolio - Peter Simone",
    description: "Portfolio - Peter Simone",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    url: "https://petersim.one",
    locale: "en_US",
  },
  twitter: {
    title: "Portfolio - Peter Simone",
    description: "Portfolio - Peter Simone",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
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
            <Layout>
              <Header />
              {children}
              {/* @ts-expect-error Server Component */}
              <Footer />
            </Layout>
            <Light />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
