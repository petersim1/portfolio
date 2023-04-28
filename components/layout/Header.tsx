import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";

import styles from "@/styles/layout.module.css";
import { worksans } from "@/styles/fonts";

const Header = (): JSX.Element => {
  const [active, setActive] = useState(0);

  const options = ["Intro", "Blurb", "Education", "Projects"];

  return (
    <nav className={classNames(styles.header, worksans.className)}>
      <div className={styles.header_holder}>
        <Image
          src="/images/propic.jpeg"
          alt="profile"
          priority={true}
          height={65}
          width={65}
          className={styles.profile_pic}
        />
        <div className={styles.nav_holder}>
          {options.map((option, ind) => (
            <span
              key={ind}
              className={classNames({ [styles.active]: active === ind })}
              onClick={(): void => setActive(ind)}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
      <button onClick={(): void => setActive(active + 1)}>click me +</button>
      <button onClick={(): void => setActive(active - 1)}>click me -</button>
    </nav>
  );
};

export default Header;
