import styles from "./layout.module.css";

export default ({ children }: React.PropsWithChildren): JSX.Element => {
  return <div className={styles.layout_wrapper}>{children}</div>;
};
