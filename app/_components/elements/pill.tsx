import styles from "./styled.module.css";

export default ({ text }: { text: string }): JSX.Element => {
  return <div className={styles.pill}>{text}</div>;
};
