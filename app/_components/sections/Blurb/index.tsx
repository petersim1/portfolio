/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";
import { worksans } from "@/_lib/fonts";
import styles from "./blurb.module.css";

export default (): JSX.Element => {
  return (
    <section id="blurb" data-offset-top={50} data-offset-bottom={50}>
      <div className={classNames(styles.wrapper, worksans.className)}>
        <div className={styles.blurb}>
          <p>
            I like to <b>build</b> and
            <br />
            deeply understand
            <br />
            <b>how stuff works</b>.
          </p>
        </div>
      </div>
    </section>
  );
};
