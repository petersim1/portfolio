import classNames from "classnames";
import Link from "next/link";

import styles from "../styled.module.css";
import { Text } from "@/_components/elements/Text";
import { spacemono } from "@/_lib/fonts";

export default (): JSX.Element => {
  return (
    <nav className={classNames(styles.header, spacemono.className)}>
      <div style={{ position: "relative", width: "100%" }}>
        <div className={styles.header_holder}>
          <Link href="/">
            <h4>peter simone</h4>
          </Link>
        </div>
        <div className={styles.nav_items}>
          <Link href="/blog">
            <Text size="sm">blog</Text>
          </Link>
        </div>
      </div>
    </nav>
  );
};
