/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from "classnames";

import { worksans } from "@/_styles/fonts";
import styles from "@/_styles/education.module.css";
import { education } from "@/_lib/constants";
import EducationItem from "../education";

const Education = (): JSX.Element => {
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

export default Education;
