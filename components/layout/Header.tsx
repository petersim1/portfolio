import Image from "next/image";
import classNames from "classnames";

import styles from "@/styles/layout.module.css";
import { worksans } from "@/styles/fonts";

const Header = ({
  active,
  setActive,
  options,
}: {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  options: string[];
}): JSX.Element => {
  const handleClick = (ind: number, option: string): void => {
    setActive(ind);
    const el = document.getElementById(option);
    el?.scrollIntoView();
  };

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
