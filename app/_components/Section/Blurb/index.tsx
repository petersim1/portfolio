import styles from "./styled.module.css";

export default (): JSX.Element => {
  return (
    <section id="blurb" data-offset-top={75} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <div className={styles.blurb}>
          <h3>
            I like to <b>build things</b>
            <br />
            and learn how
            <br />
            <b>stuff works</b>.
          </h3>
        </div>
      </div>
    </section>
  );
};
