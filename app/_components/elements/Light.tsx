"use client";

import classNames from "classnames";

import styles from "./elements.module.css";
import { worksans } from "@/_lib/fonts";
import { Sun, Moon, Arrow } from "@/_lib/assets";
import { useThemeContext } from "@/_store/theme";
import { useScrollContext } from "@/_store/scroll";

export default (): JSX.Element => {
  const { dark, toggleTheme } = useThemeContext();
  const { progress } = useScrollContext();

  const moveToTop = (): void => {
    window.scrollTo(0, 0);
  };

  const active = progress[0] == 100;

  return (
    <div
      className={classNames(styles.light_holder, worksans.className, { [styles.active]: active })}
    >
      <div className={styles.toggle} onClick={toggleTheme}>
        {dark ? <Sun fill="var(--sun)" /> : <Moon fill="var(--font)" />}
      </div>
      <div
        className={classNames(styles.toggle, styles.nav, { [styles.active]: active })}
        onClick={moveToTop}
      >
        <Arrow height="70%" width="70%" fill="var(--font)" />
      </div>
    </div>
  );
};
