"use server";

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

export default async (): Promise<JSX.Element> => {
  return (
    <Layout>
      <Header />
      <Light />
      <main>
        <Intro />
        <Blurb />
        <Education />
        <Projects />
        <Contact />
        <Mask />
        <Logos />
      </main>
      {/* @ts-expect-error Server Component */}
      <Footer />
    </Layout>
  );
};
