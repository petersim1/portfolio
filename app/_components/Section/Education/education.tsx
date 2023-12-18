import classNames from "classnames";
import Image from "next/image";

import { inconsolata } from "@/_lib/fonts";
import styles from "./styled.module.css";
import Pill from "@/_components/elements/pill";

interface EduI {
  img: string;
  title: string;
  courses: string[];
}

export default (props: EduI): JSX.Element => {
  const { img, title, courses } = props;

  return (
    <div className={styles.education}>
      <div className={styles.description}>
        <p>{title}</p>
        <div className={classNames(styles.courses, inconsolata.className)}>
          {courses.map((course: string, ind: number) => (
            <Pill text={course} key={ind} />
          ))}
        </div>
      </div>
      <div className={styles.logo}>
        <Image src={img} alt="school logo" fill={true} sizes="any" />
      </div>
    </div>
  );
};
