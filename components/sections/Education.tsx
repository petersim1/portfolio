/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import classNames from "classnames";
import { worksans, inconsolata } from "@/styles/fonts";
import styles from "@/styles/education.module.css";

const Education = (): JSX.Element => {
  return (
    <section className="h_100" id="education">
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>
              <b>What I've Studied</b>
            </h3>
          </div>
          <div className={styles.education_wrapper}>
            <div className={styles.education}>
              <div className={styles.logo}>
                <Image src="/images/nyu.png" alt="school logo" fill={true} />
              </div>
              <div className={styles.description}>
                <p>NYU, M.S. Data Science</p>
                <div className={classNames(styles.courses, inconsolata.className)}>
                  <div className={styles.course}>Deep Learning</div>
                  <div className={styles.course}>Cognitive Modeling</div>
                  <div className={styles.course}>Sports Modeling</div>
                  <div className={styles.course}>Linear Algebra</div>
                </div>
              </div>
            </div>
            <div className={styles.education}>
              <div className={styles.logo}>
                <Image src="/images/umd.png" alt="school logo" fill={true} />
              </div>
              <div className={styles.description}>
                <p>UMD, B.S. Bioengineering</p>
                <div className={classNames(styles.courses, inconsolata.className)}>
                  <div className={styles.course}>Bioinformatics</div>
                  <div className={styles.course}>Biological Datamining</div>
                  <div className={styles.course}>Biocomputation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
