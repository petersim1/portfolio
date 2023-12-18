/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";

import { worksans } from "@/_lib/fonts";
import styles from "./styled.module.css";
import { education } from "@/_lib/constants";
import EducationItem from "./education";

export default (): JSX.Element => {
  return (
    <section id="education" data-offset-top={50} data-offset-bottom={50}>
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>What I've Studied</h3>
          </div>
          <div className={styles.education_wrapper}>
            {education.map((ed, ind) => (
              <EducationItem {...ed} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
