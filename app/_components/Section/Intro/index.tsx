import { GradientBlock, GradientText } from "@/_components/elements/Text";
import styles from "./styled.module.css";

export default (): JSX.Element => {
  return (
    <section className="h_100" id="intro" data-offset-top={0} data-offset-bottom={50}>
      <div className={styles.intro_holder}>
        <GradientBlock>
          <h2>
            <span>I'm a </span>
            <br className={styles.break_mobile} />
            <GradientText>data scientist</GradientText>
            <br />
            <span>and </span>
            <br className={styles.break_mobile} />
            <GradientText>full stack developer</GradientText>
            <span>.</span>
          </h2>
        </GradientBlock>
      </div>
    </section>
  );
};
