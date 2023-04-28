import styles from "@/styles/layout.module.css";

const Layout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <div className={styles.layout_wrapper}>{children}</div>;
};

export default Layout;
