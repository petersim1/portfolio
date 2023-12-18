import classNames from "classnames";

import styles from "./styled.module.css";
import { worksans } from "@/_lib/fonts";

export default (): JSX.Element => {
  return (
    <section className="h_100" id="contact" data-offset-top={0} data-offset-bottom={0}>
      <div className={classNames(styles.content, worksans.className)}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <p>
              Feel free to <b>connect</b>
              <br />
              with me. <br className={styles.break_mobile} />
              I'd love to hear
              <br />
              what you're <b>building</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
