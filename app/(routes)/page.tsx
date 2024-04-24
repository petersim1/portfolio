import Mask from "@/_components/Elements/Mask";
import { GradientBlock, ShowGradient, H1, H2 } from "@/_components/Text";
import { Main, Section, CenteredFill } from "@/_components/Common";

export default (): JSX.Element => {
  return (
    <Main>
      <Mask />
      <Section id="intro">
        <CenteredFill>
          <GradientBlock>
            <H1>
              <ShowGradient>Peter Simone</ShowGradient>
            </H1>
            <H2>
              <span>I'm a </span>
              <ShowGradient>data scientist</ShowGradient>
              <span> & </span>
              <ShowGradient>full stack developer</ShowGradient>
              <span>. I like to build things and learn how stuff works.</span>
            </H2>
          </GradientBlock>
        </CenteredFill>
      </Section>
    </Main>
  );
};
