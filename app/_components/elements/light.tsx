"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./styled.module.css";
import { worksans } from "@/_lib/fonts";
import { Sun, Moon, Arrow } from "@/_lib/assets";
import { useThemeContext } from "@/_store/theme";

export default (): JSX.Element => {
  const [active, setActive] = useState(false);
  const { dark, toggleTheme } = useThemeContext();

  const moveToTop = (): void => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleLightShow = (): void => {
      const { scrollY, innerHeight } = window;
      if (scrollY / innerHeight > 0.2) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleLightShow);
    return () => {
      window.removeEventListener("scroll", handleLightShow);
    };
  }, []);

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
