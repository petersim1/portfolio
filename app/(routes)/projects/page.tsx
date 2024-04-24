import { Metadata, ResolvingMetadata } from "next";

import { H1, GradientBlock, ShowGradient } from "@/_components/Text";
import { Main, Section } from "@/_components/Common";
import * as Projects from "@/_components/Projects";
import { projects } from "@/_lib/constants";
import Project from "@/_components/Projects/Project";

export const generateMetadata = async (_, parent: ResolvingMetadata): Promise<Metadata> => {
  const parentMeta = await parent;

  // Og + Twitter would get overwritten, all else gets merged.
  const { images: ogImages, ...ogRest } = parentMeta.openGraph;
  const { images: twImages, ...twRest } = parentMeta.twitter;

  return {
    title: "Peter Simone | Blog",
    description: "Peter Simone | Blog",
    openGraph: {
      ...ogRest,
      title: "Peter Simone | Blog",
      description: "Peter Simone | Blog",
    },
    twitter: {
      ...twRest,
      title: "Peter Simone | Blog",
      description: "Peter Simone | Blog",
    },
  };
};

export default (): JSX.Element => {
  return (
    <Main>
      <Section id="projects">
        <Projects.Wrapper>
          <Projects.Title>
            <GradientBlock>
              <H1>
                some <ShowGradient>projects</ShowGradient> I've worked on
              </H1>
            </GradientBlock>
          </Projects.Title>
          <Projects.Projects>
            {projects.map((data, ind) => (
              <Project data={data} key={ind} />
            ))}
          </Projects.Projects>
        </Projects.Wrapper>
      </Section>
    </Main>
  );
};
