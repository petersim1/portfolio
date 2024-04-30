import { Inconsolata, Space_Mono } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  preload: true,
  display: "swap",
});

const spacemono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export { inconsolata, spacemono };
