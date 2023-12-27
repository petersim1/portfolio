import Mask from "@/_components/Elements/Mask";
import { GradientBlock, ShowGradient, H1, H2, Shadow } from "@/_components/Text";
import { Section, Br, CenteredFill } from "@/_components/Common";
import * as Projects from "@/_components/Projects";
import Project from "@/_components/Projects/Project";
import { projects } from "@/_lib/constants";

export default (): JSX.Element => {
  return (
    <main>
      <Section $minHeight="100vh" id="intro" data-offset-top={0} data-offset-bottom={50}>
        <CenteredFill>
          <GradientBlock>
            <H1>
              <span>I'm a </span>
              <Br $mobileOnly />
              <ShowGradient>data scientist</ShowGradient>
              <Br />
              <span>and </span>
              <Br $mobileOnly />
              <ShowGradient>full stack developer</ShowGradient>
              <span>.</span>
            </H1>
          </GradientBlock>
        </CenteredFill>
      </Section>
      <Section $minHeight="100vh" id="blurb" data-offset-top={75} data-offset-bottom={0}>
        <CenteredFill>
          <GradientBlock>
            <H1>
              I like to <ShowGradient>build things</ShowGradient>
              <Br />
              and learn how
              <Br />
              <ShowGradient>stuff works</ShowGradient>.
            </H1>
          </GradientBlock>
        </CenteredFill>
      </Section>
      <Section id="projects" data-offset-top={0} data-offset-bottom={0}>
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
      <Section $minHeight="100vh" id="contact" data-offset-top={0} data-offset-bottom={0}>
        <CenteredFill>
          <H2>
            Feel free to{" "}
            <b>
              <Shadow>connect</Shadow>
            </b>
            <Br />
            with me. <Br $mobileOnly />
            I'd love to hear
            <Br />
            what you're{" "}
            <b>
              <Shadow>building</Shadow>
            </b>
            .
          </H2>
        </CenteredFill>
      </Section>
      <Mask />
    </main>
  );
};
