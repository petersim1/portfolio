import { GradientBlock, ShowGradient, H1 } from "@/_components/Text";
import { Section, CenteredFill, Br } from "@/_components/Common";

export default (): JSX.Element => {
  return (
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
  );
};
