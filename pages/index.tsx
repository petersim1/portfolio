import type { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

import Header from "@/components/layout/Header";
import Light from "@/components/layout/Light";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/Intro";
import Blurb from "@/components/sections/Blurb";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Mask from "@/components/mask";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/repos/petersim1/portfolio");
  if (!response.ok) {
    return {
      props: {
        stargazers_count: 0,
        forks_count: 0,
      },
    };
  }

  const result = await response.json();

  const { stargazers_count: stars, forks_count: forks } = result;

  return {
    props: {
      stars,
      forks,
    },
  };
};

const Home = ({ stars, forks }: { stars: number; forks: number }): JSX.Element => {
  const [progress, setProgress] = useState<number[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // A global identifier of scroll in each section, pass to child components.
    // empty until component mounts. Will dictate nav item too.
    const sections = document.querySelectorAll("section");
    setOptions(Array.from(sections).map((section) => section.id));
    const { innerHeight } = window;
    if (!progress.length) {
      setProgress(Array(sections.length).fill(0));
    }

    const scrollPos = (): void => {
      const arrs: number[] = [];
      sections.forEach((section, ind) => {
        const { top, height, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom >= 0) {
          setActive(ind);
        }
        // if (["blurb","education"].includes(section.id)) {
        //   arrs.push(Math.max(0, Math.min(100, )))
        // } else {
        //   arrs.push(Math.max(0, Math.min(100, (100 * -top) / (height - innerHeight))));
        // }
        const { offsetTop, offsetBottom } = section.dataset;
        const trueOffsetTop = (innerHeight * Number(offsetTop || "0")) / 100;
        const trueOffsetBottom = (innerHeight * Number(offsetBottom || "0")) / 100;
        const val = Math.max(
          0,
          Math.min(
            100,
            (100 * (top - trueOffsetTop)) /
              (innerHeight - height - trueOffsetTop - trueOffsetBottom),
          ),
        );
        arrs.push(val);
      });
      setProgress(arrs);
    };

    window.addEventListener("scroll", scrollPos);

    return () => {
      window.removeEventListener("scroll", scrollPos);
    };
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("-portfolio-theme-dark");
    let isDark = false;
    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("-portfolio-theme-dark", JSON.stringify(matches));
      isDark = matches;
      document.documentElement.dataset.dark = matches ? "true" : "false";
    } else {
      document.documentElement.dataset.dark = theme;
      isDark = JSON.parse(theme);
    }
    setDark(isDark);
  }, []);

  console.log(progress);

  return (
    <Layout>
      <Header active={active} setActive={setActive} options={options} />
      <Light dark={dark} setDark={setDark} />
      <main>
        <Intro progress={progress.length > 0 ? progress[0] : 0} />
        <Blurb />
        <Education />
        <Projects />
        <Contact progress={progress.length > 0 ? progress[4] : 0} />
        <Mask progress={progress} />
      </main>
      <Footer stars={stars} forks={forks} />
    </Layout>
  );
};

export default Home;
