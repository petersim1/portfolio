import classNames from "classnames";
import Image from "next/image";

import { inconsolata } from "@/_styles/fonts";
import styles from "@/_styles/education.module.css";

interface EduI {
  img: string;
  title: string;
  courses: string[];
}

const Education = (props: EduI): JSX.Element => {
  const { img, title, courses } = props;

  return (
    <div className={styles.education}>
      <div className={styles.logo}>
        <Image src={img} alt="school logo" fill={true} />
      </div>
      <div className={styles.description}>
        <p>{title}</p>
        <div className={classNames(styles.courses, inconsolata.className)}>
          {courses.map((course: string, ind: number) => (
            <div className={styles.course} key={ind}>
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
