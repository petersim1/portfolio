import classNames from "classnames";

import { inconsolata, worksans } from "@/_lib/fonts";
import styles from "./projects.module.css";
import Project from "./project";
import { projects } from "@/_lib/constants";

export default (): JSX.Element => {
  return (
    <section id="projects" data-offset-top={0} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.title, worksans.className)}>
          <h2>
            some <span className={styles.transparent}>projects</span> I'm proud of
          </h2>
        </div>
        <div className={classNames(styles.projects, inconsolata.className)}>
          {projects.map((data, ind) => (
            <div className={styles.project_wrapper} key={ind}>
              <Project data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
