import Link from "next/link";

import styles from "@/_styles/layout.module.css";
import { inconsolata } from "@/_styles/fonts";
import { Branch, Star, Arrow } from "@/_assets";

export default ({ stars, forks }: { stars: number; forks: number }): JSX.Element => {
  return (
    <footer className={inconsolata.className}>
      <div className={styles.footer}>
        <div>
          ~ built by <b>peter simone</b> using nextjs ~
        </div>
        <div className={styles.count_holder}>
          <div className={styles.counts}>
            <Branch height="20px" fill="var(--font)" />
            {forks}
          </div>
          <div className={styles.counts}>
            <Star height="20px" fill="var(--font)" />
            {stars}
          </div>
        </div>
        <Link href="/resume">
          <div className={styles.resume}>
            <span>my resume</span>
            <Arrow fill="var(--font)" height="0.75rem" />
          </div>
        </Link>
      </div>
    </footer>
  );
};
