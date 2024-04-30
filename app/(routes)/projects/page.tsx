import { H2, Underline } from "@/_components/Text";
import { Main, Section } from "@/_components/Common";
import * as Projects from "@/_components/Projects";
import { projects } from "@/_lib/constants";
import Project from "@/_components/Projects/Project";
import { spacemono } from "@/_theme/fonts";

export default (): JSX.Element => {
  return (
    <Main>
      <Section id="projects">
        <Projects.Wrapper>
          <Underline>
            <H2 className={spacemono.className}>projects</H2>
          </Underline>
          <Projects.Projects>
            {projects.map((data, ind) => (
              <Project data={data} key={ind} delay={ind / 4} />
            ))}
          </Projects.Projects>
        </Projects.Wrapper>
      </Section>
    </Main>
  );
};
