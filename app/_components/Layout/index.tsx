import Footer from "./Footer";
import Header from "./Header";
import styles from "./styled.module.css";

export default ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <div className={styles.layout_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
