/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import classNames from "classnames";
import { worksans, inconsolata } from "@/styles/fonts";
import styles from "@/styles/education.module.css";
import { education } from "@/constants";
import EducationItem from "../education";

const Education = (): JSX.Element => {
  return (
    <section className="h_100" id="education" data-offset-top={50} data-offset-bottom={50}>
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>
              <b>What I've Studied</b>
            </h3>
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
