"use client";

import { useState } from "react";
import classNames from "classnames";

import { inconsolata, worksans } from "@/_styles/fonts";
import styles from "@/_styles/projects.module.css";
import Project from "../project";
import { projects } from "@/_lib/constants";

const Projects = (): JSX.Element => {
  const [open, setOpen] = useState(0);

  return (
    <section className="h_100_min" id="projects" data-offset-top={0} data-offset-bottom={0}>
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
