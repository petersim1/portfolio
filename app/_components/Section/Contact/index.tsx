import { H2, Shadow } from "@/_components/Text";

import { Section, CenteredFill, Br } from "@/_components/Common";

export default (): JSX.Element => {
  return (
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
  );
};
