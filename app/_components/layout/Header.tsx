"use client";

import classNames from "classnames";

import styles from "./layout.module.css";
import { spacemono } from "@/_lib/fonts";
import { useScrollContext } from "@/_store/scroll";

export default (): JSX.Element => {
  const { progress } = useScrollContext();
  return (
    <nav
      className={classNames(styles.header, spacemono.className, {
        [styles.hide]: progress[0] > 25,
      })}
    >
      <div className={styles.header_holder}>
        <h4>peter simone</h4>
      </div>
    </nav>
  );
};
