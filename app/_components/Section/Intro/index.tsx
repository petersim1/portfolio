import { GradientBlock, ShowGradient, H1 } from "@/_components/Text";
import { Section, Br } from "@/_components/Common";
import { Intro } from "./styled";

export default (): JSX.Element => {
  return (
    <Section $minHeight="100vh" id="intro" data-offset-top={0} data-offset-bottom={50}>
      <Intro>
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
      </Intro>
    </Section>
  );
};
