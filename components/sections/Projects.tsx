/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import classNames from "classnames";
import { inconsolata, worksans } from "@/styles/fonts";
import styles from "@/styles/projects.module.css";
import Project from "../project";

const Projects = (): JSX.Element => {
  const [open, setOpen] = useState(0);

  const datas = [
    {
      title: "Progressive Web App",
      year: 2023,
    },
    {
      title: "Slackbot Summarizer",
      year: 2023,
    },
    {
      title: "TL;DR",
      year: 2023,
    },
    {
      title: "Agree",
      year: 2023,
    },
    {
      title: "Blackjack RL Agent",
      year: 2023,
    },
    {
      title: "Pulse Plus",
      year: 2022,
    },
    {
      title: "Fur Insure",
      year: 2022,
    },
    {
      title: "Networth Simulator",
      year: 2022,
    },
    {
      title: "Bet Hedging",
      year: 2021,
    },
    {
      title: "Commodity Price Forecasting",
      year: 2021,
    },
    {
      title: "Goodreads Recommender",
      year: 2020,
    },
  ];

  return (
    <section className="h_100" id="projects">
      <div className={styles.wrapper}>
        <div className={classNames(worksans.className)}>
          <div className={styles.title}>
            <h3>
              <b>What I've Built</b>
            </h3>
          </div>
        </div>
        <div className={classNames(styles.projects, inconsolata.className)}>
          {datas.map((data, ind) => (
            <Project data={data} ind={ind} open={open} setOpen={setOpen} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
