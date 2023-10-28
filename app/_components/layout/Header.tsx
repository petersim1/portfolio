import classNames from "classnames";

import styles from "@/_styles/layout.module.css";
import { worksans } from "@/_styles/fonts";

const Header = (): JSX.Element => {
  return (
    <nav className={classNames(styles.header, worksans.className)}>
      <div className={styles.header_holder}>
        <h3>peter simone</h3>
      </div>
    </nav>
  );
};

export default Header;
