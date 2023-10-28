"use client";

import { useState, useEffect } from "react";

import Header from "@/_components/layout/Header";
import Light from "@/_components/layout/Light";
import Layout from "@/_components/layout/Layout";
import Footer from "@/_components/layout/Footer";
import Intro from "@/_components/sections/Intro";
import Blurb from "@/_components/sections/Blurb";
import Education from "@/_components/sections/Education";
import Projects from "@/_components/sections/Projects";
import Contact from "@/_components/sections/Contact";
import Mask from "@/_components/mask";
import Logos from "@/_components/logos";
import { github } from "@/_actions";

const Home = async (): Promise<JSX.Element> => {
  const [progress, setProgress] = useState<number[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  const { stars, forks } = await github();

  useEffect(() => {
    // A global identifier of scroll in each section, pass to child _components.
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

  return (
    <Layout>
      <Header active={active} setActive={setActive} options={options} />
      <Light />
      <main>
        <Intro progress={progress.length > 0 ? progress[0] : 0} />
        <Blurb />
        <Education />
        <Projects />
        <Contact progress={progress.length > 0 ? progress[4] : 0} />
        <Mask progress={progress} />
        <Logos />
      </main>
      <Footer stars={stars} forks={forks} />
    </Layout>
  );
};

export default Home;
