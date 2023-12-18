import Intro from "@/_components/Section/Intro";
import Blurb from "@/_components/Section/Blurb";
import Projects from "@/_components/Section/Projects";
import Contact from "@/_components/Section/Contact";
import { Mask } from "@/_components/elements";

export default (): JSX.Element => {
  return (
    <main>
      <Intro />
      <Blurb />
      <Projects />
      <Contact />
      <Mask />
    </main>
  );
};
