/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";
import { worksans } from "@/_lib/fonts";
import styles from "./passion.module.css";

export default (): JSX.Element => {
  return (
    <section id="passion" data-offset-top={50} data-offset-bottom={50}>
      <div className={classNames(styles.wrapper, worksans.className)}>
        <div className={styles.blurb}>
          <p>
            I'm <b>passionate</b> about
            <br />
            many different
            <br />
            <b>things...</b>
          </p>
        </div>
      </div>
    </section>
  );
};
