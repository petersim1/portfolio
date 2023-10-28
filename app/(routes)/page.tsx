"use client";

import { useContext } from "react";

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
import { ScrollContext } from "@/_state";
// import { github } from "@/_actions";

export default (): JSX.Element => {
  const { active, setActive, options, progress } = useContext(ScrollContext);
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
      {/* <Footer stars={stars} forks={forks} /> */}
      <Footer stars={0} forks={0} />
    </Layout>
  );
};
