"use client";

import classNames from "classnames";

import { inconsolata, worksans } from "@/_lib/fonts";
import styles from "./projects.module.css";
import Project from "./project";
import { projects } from "@/_lib/constants";
import { Arrow } from "@/_lib/assets";
import { useScrollContext } from "@/_store/scroll";

export default (): JSX.Element => {
  const { progress } = useScrollContext();
  const activeInd = Math.round((progress[2] * projects.length) / 100) - 1;
  return (
    <section id="projects" data-offset-top={0} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.title, worksans.className)}>
          <h2>
            check out some
            <br />
            <span className={styles.transparent}>projects</span> I've worked on
          </h2>
          <div className={styles.arrow_holder}>
            <Arrow fill="var(--font)" />
          </div>
        </div>
        <div className={styles.parallax}>
          <div className={classNames(styles.projects, inconsolata.className)}>
            {projects.map((data, ind) => (
              <div
                className={classNames(styles.project_wrapper, {
                  [styles.active]: activeInd === ind,
                  [styles.fadeOut]: activeInd > ind,
                  [styles.fadeIn]: activeInd < ind,
                })}
                key={ind}
              >
                <p>{String(ind + 1).padStart(2, "0")}</p>
                <Project data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
