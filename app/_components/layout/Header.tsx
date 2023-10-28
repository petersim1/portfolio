"use client";

import Image from "next/image";
import classNames from "classnames";
import { useState, useContext } from "react";

import { ScrollContext } from "@/_state";
import styles from "@/_styles/layout.module.css";
import { worksans } from "@/_styles/fonts";

const Header = (): JSX.Element => {
  const [blocked, setBlocked] = useState(true);
  const { active, setActive, options } = useContext(ScrollContext);

  const handleBlock = (): void => {
    // throttling. Otherwise difficult to use on mobile.
    setTimeout(() => {
      setBlocked(false);
    }, 200);
  };

  const handleClick = (ind: number, option: string): void => {
    if (blocked) return;
    setActive(ind);
    const el = document.getElementById(option);
    el?.scrollIntoView();
  };

  return (
    <nav className={classNames(styles.header, worksans.className)}>
      <div className={styles.header_holder}>
        <div className={styles.image}>
          <Image
            src="/images/propic.jpeg"
            alt="profile"
            priority={true}
            fill={true}
            className={styles.profile_pic}
          />
        </div>
        <div
          className={styles.nav_holder}
          id="nav_hover"
          onMouseEnter={handleBlock}
          onMouseLeave={(): void => setBlocked(true)}
        >
          {options.map((option, ind) => (
            <span
              key={ind}
              className={classNames({ [styles.active]: active === ind })}
              onClick={(): void => handleClick(ind, option)}
            >
              {option.charAt(0).toUpperCase() + option.substring(1)}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
