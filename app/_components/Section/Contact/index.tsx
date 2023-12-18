import { Text, TextShadow } from "@/_components/elements/Text";
import styles from "./styled.module.css";

export default (): JSX.Element => {
  return (
    <section className="h_100" id="contact" data-offset-top={0} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <Text size="xl">
          Feel free to{" "}
          <b>
            <TextShadow>connect</TextShadow>
          </b>
          <br />
          with me. <br className={styles.break_mobile} />
          I'd love to hear
          <br />
          what you're{" "}
          <b>
            <TextShadow>building</TextShadow>
          </b>
          .
        </Text>
      </div>
    </section>
  );
};
