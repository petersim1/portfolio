/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";
import { worksans } from "@/_styles/fonts";
import styles from "@/_styles/blurb.module.css";

const Blurb = (): JSX.Element => {
  return (
    <section className="h_100" id="blurb" data-offset-top={50} data-offset-bottom={50}>
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>
              I'm a <b>full stack data scientist.</b>
            </h3>
          </div>
          <div className={styles.blurb}>
            <p>
              I'm Peter Simone, a passionate engineer living in NYC. My work spans both data science
              and web development, integrating the two whenever possible. I've also been really
              interested in the web3 space and ideologies behind decentralized technologies, market
              analysis, and sport analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
