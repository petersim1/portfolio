import { useState, useEffect } from "react";

import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/Intro";
import Blurb from "@/components/sections/Blurb";

const Home = (): JSX.Element => {
  const [progress, setProgress] = useState<number[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [active, setActive] = useState(0);

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

  return (
    <Layout>
      <Header active={active} setActive={setActive} options={options} />
      <main>
        <Intro progress={progress.length > 0 ? progress[0] : 0} />
        <Blurb progress={progress.length > 0 ? progress[1] : 0} />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
