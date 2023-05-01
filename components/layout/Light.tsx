/* eslint-disable max-len */
import classNames from "classnames";

import styles from "@/styles/layout.module.css";
import { worksans } from "@/styles/fonts";
import { Sun, Moon } from "@/assets";

const Light = ({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {

  const handleToggle = (): void => {
    setDark(!dark);
    const theme = localStorage.getItem("-portfolio-theme-dark");
    if (theme) {
      const newTheme = String(!JSON.parse(theme));
      document.documentElement.dataset.dark = newTheme;
      localStorage.setItem("-portfolio-theme-dark", newTheme);
    }
  };

  return (
    <div className={classNames(styles.light_holder, worksans.className)}>
      <div
        className={classNames(styles.light_toggle, { [styles.dark]: dark })}
        onClick={handleToggle}
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
