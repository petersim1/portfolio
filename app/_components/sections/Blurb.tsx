/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";
import { worksans } from "@/_styles/fonts";
import styles from "@/_styles/blurb.module.css";

const Blurb = (): JSX.Element => {
  return (
    <section id="blurb" data-offset-top={50} data-offset-bottom={50}>
      <div className={classNames(styles.wrapper, worksans.className)}>
        <div className={styles.blurb}>
          <p>
            I like to <b>build stuff</b>
            <br />
            and deeply understand
            <br />
            <b>how things work</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
