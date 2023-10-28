"use client";

import classNames from "classnames";

import styles from "@/_styles/layout.module.css";
import { spacemono } from "@/_styles/fonts";
import { useScrollContext } from "@/_store/scroll";

const Header = (): JSX.Element => {
  const { progress } = useScrollContext();
  return (
    <nav
      className={classNames(styles.header, spacemono.className, {
        [styles.hide]: progress[0] > 15,
      })}
    >
      <div className={styles.header_holder}>
        <h4>peter simone</h4>
      </div>
    </nav>
  );
};

export default Header;
