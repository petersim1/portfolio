"use client";

import classNames from "classnames";

import styles from "@/_styles/layout.module.css";
import { worksans } from "@/_styles/fonts";
import { Sun, Moon } from "@/_lib/assets";
import { useThemeContext } from "@/_store/theme";

const Light = (): JSX.Element => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <div className={classNames(styles.light_holder, worksans.className)}>
      <div
        className={classNames(styles.light_toggle, { [styles.dark]: dark })}
        onClick={toggleTheme}
      >
        <div>
          <Moon fill="var(--font)" />
        </div>
        <div>
          <Sun fill="var(--font)" />
        </div>
      </div>
    </div>
  );
};

export default Light;
