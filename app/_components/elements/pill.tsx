import styles from "./elements.module.css";

export default ({ text }: { text: string }): JSX.Element => {
  return <div className={styles.pill}>{text}</div>;
};
