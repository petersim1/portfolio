import { H2 } from "@/_components/Text";
import { Main, Section } from "@/_components/Common";
import * as Projects from "@/_components/Projects";
import { projects } from "@/_lib/constants";
import Project from "@/_components/Projects/Project";

export default (): JSX.Element => {
  return (
    <Main>
      <Section id="projects">
        <Projects.Wrapper>
          <H2 style={{ width: "90%" }}>some projects I've worked on</H2>
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
