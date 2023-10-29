// import Link from "next/link";

import styles from "./layout.module.css";
import { inconsolata } from "@/_lib/fonts";
// import { Branch, Star, Arrow } from "@/_lib/assets";
// import { github } from "@/_actions";

export default async (): Promise<JSX.Element> => {
  // const { stars, forks } = await github();
  return (
    <footer className={inconsolata.className}>
      <div className={styles.footer}>
        <div>
          ~ built by <b>peter simone</b> using nextjs ~
        </div>
      </div>
    </footer>
  );
};
