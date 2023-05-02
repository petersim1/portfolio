import styles from "@/styles/layout.module.css";
import { inconsolata } from "@/styles/fonts";
import { Branch, Star } from "@/assets";

const Footer = ({stars, forks}: {stars: number; forks: number}): JSX.Element => {
  
  return (
    <footer className={inconsolata.className}>
      <div className={styles.footer}>
        <div>~ built by <b>peter simone</b> using nextjs ~</div>
        <div className={styles.count_holder}>
          <div className={styles.counts}>
            <Branch height="20px" fill="var(--font)"/>
            {forks}
          </div>
          <div className={styles.counts}>
            <Star height="20px" fill="var(--font)"/>
            {stars}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
