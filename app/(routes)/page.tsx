// import Mask from "@/_components/Elements/Mask";
import { GradientBlock, ShowGradient, H1, H2 } from "@/_components/Text";
import { Main, Section, CenteredFill } from "@/_components/Common";

export default (): JSX.Element => {
  return (
    <Main>
      <Section id="intro">
        <CenteredFill>
          <GradientBlock style={{ textAlign: "left", width: "100%", maxWidth: "1100px" }}>
            <H1>
              <ShowGradient>Peter Simone</ShowGradient>
            </H1>
            <H2>
              <span>I'm a </span>
              <ShowGradient>data scientist</ShowGradient>
              <span> & </span>
              <ShowGradient>full stack developer</ShowGradient>
              <span>. I like to </span>
              <ShowGradient>build things</ShowGradient>
              <span> & </span>
              <ShowGradient>learn</ShowGradient>
              <span> how stuff works.</span>
            </H2>
          </GradientBlock>
        </CenteredFill>
      </Section>
      {/* <Mask offsetTop={25} offsetBottom={25} /> */}
    </Main>
  );
};
