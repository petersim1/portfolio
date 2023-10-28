import "@/globals.css";
import { ThemeProvider } from "@/_state";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};