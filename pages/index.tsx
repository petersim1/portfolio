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

const Home = (): JSX.Element => {
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
        arrs.push(Math.max(0, Math.min(100, (100 * -top) / (height - innerHeight))));
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

  return (
    <Layout>
      <Header
        active={active}
        setActive={setActive}
        options={options}
      />
      <Light dark={dark} setDark={setDark}/>
      <main>
        <Intro progress={progress.length > 0 ? progress[0] : 0} />
        <Blurb />
        <Education />
        <Projects />
        <Contact progress={progress.length >0 ? progress[4] : 0}/>
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
