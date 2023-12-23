import { GradientBlock, ShowGradient, H1 } from "@/_components/Text";
import Project from "./Project";
import { projects } from "@/_lib/constants";
import { Section } from "@/_components/Common";
import { Wrapper, Projects, Title } from "./styled";

export default (): JSX.Element => {
  return (
    <Section id="projects" data-offset-top={0} data-offset-bottom={0}>
      <Wrapper>
        <Title>
          <GradientBlock>
            <H1>
              some <ShowGradient>projects</ShowGradient> I've worked on
            </H1>
          </GradientBlock>
        </Title>
        <Projects>
          {projects.map((data, ind) => (
            <Project data={data} key={ind} />
          ))}
        </Projects>
      </Wrapper>
    </Section>
  );
};
