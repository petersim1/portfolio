"use server";

import Intro from "@/_components/sections/Intro";
import Blurb from "@/_components/sections/Blurb";
// import Education from "@/_components/sections/Education";
import Passion from "@/_components/sections/Passion";
import Projects from "@/_components/sections/Projects";
import Contact from "@/_components/sections/Contact";
// import Logos from "@/_components/logos";
import Mask from "@/_components/elements/mask";

export default async (): Promise<JSX.Element> => {
  return (
    <main>
      <Intro />
      <Blurb />
      <Passion />
      {/* <Education /> */}
      {/* <Logos /> */}
      <Projects />
      <Contact />
      <Mask />
    </main>
  );
};
