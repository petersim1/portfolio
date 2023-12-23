import styles from "./styled.module.css";

import { GradientBlock, GradientText } from "@/_components/elements/Text";
import { Section } from "@/_components/Common";

export default (): JSX.Element => {
  return (
    <Section $minHeight="100vh" id="blurb" data-offset-top={75} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <GradientBlock>
          <h3>
            I like to <GradientText>build things</GradientText>
            <br />
            and learn how
            <br />
            <GradientText>stuff works</GradientText>.
          </h3>
        </GradientBlock>
      </div>
    </Section>
  );
};
