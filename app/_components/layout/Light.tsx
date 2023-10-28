/* eslint-disable max-len */
import { useContext } from "react";
import classNames from "classnames";

import styles from "@/_styles/layout.module.css";
import { worksans } from "@/_styles/fonts";
import { Sun, Moon } from "@/_assets";
import { ThemeContext } from "@/_state";

const Light = (): JSX.Element => {
  const { dark, toggleTheme } = useContext(ThemeContext);

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
