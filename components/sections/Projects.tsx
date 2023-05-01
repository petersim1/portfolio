/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import classNames from "classnames";
import { inconsolata, worksans } from "@/styles/fonts";
import styles from "@/styles/projects.module.css";
import Project from "../project";
import { projects } from "@/constants";

const Projects = (): JSX.Element => {
  const [open, setOpen] = useState(0);

  return (
    <section className="h_150" id="projects">
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>
              <b>What I've Built</b>
            </h3>
          </div>
        </div>
        <div className={classNames(styles.projects, inconsolata.className)}>
          {projects.map((data, ind) => (
            <Project data={data} ind={ind} open={open} setOpen={setOpen} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
