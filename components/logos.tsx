import {
  Python,
  Pinecone,
  Pytorch,
  Javascript,
  Typescript,
  Docker,
  Ethereum,
  Firestore,
  Git,
  Graphql,
  Mongodb,
  Mysql,
  Nextjs,
  Nodejs,
  Reactjs,
  Starlette,
  Supabase,
} from "@/logos";
import styles from "@/styles/layout.module.css";

const Logos = (): JSX.Element => {
  // const getParabolicOpacity = (offset: number, duration: number): number => {
  //   // offset in terms of when to start wrt progress
  //   // duration in terms of how long process lasts wrt progress
  //   const opacity = -Math.pow((2 * totProgress - 2 * offset - duration) / duration, 2) + 1;
  //   console.log(totProgress, Math.max(0, opacity));
  //   return Math.max(0, opacity);
  // };

  return (
    <div className={styles.logo_wrapper}>
      <div className={styles.logos_holder}>
        <div className={styles.logo_row}>
          <div className={styles.logo} data-animation-delay={0}>
            <Pinecone />
          </div>
          <div className={styles.logo} data-animation-delay={1}>
            <Python />
          </div>
          <div className={styles.logo} data-animation-delay={3}>
            <Pytorch />
          </div>
          <div className={styles.logo} data-animation-delay={1}>
            <Javascript />
          </div>
          <div className={styles.logo} data-animation-delay={0}>
            <Typescript />
          </div>
          <div className={styles.logo} data-animation-delay={4}>
            <Docker />
          </div>
        </div>
        <div className={styles.logo_row}>
          <div className={styles.logo} data-animation-delay={3}>
            <Ethereum />
          </div>
          <div className={styles.logo} data-animation-delay={4}>
            <Firestore />
          </div>
          <div className={styles.logo} data-animation-delay={0}>
            <Git />
          </div>
          <div className={styles.logo} data-animation-delay={1}>
            <Graphql />
          </div>
          <div className={styles.logo} data-animation-delay={2}>
            <Mongodb />
          </div>
          <div className={styles.logo} data-animation-delay={1}>
            <Mysql />
          </div>
        </div>
        <div className={styles.logo_row}>
          <div className={styles.logo} data-animation-delay={0}>
            <Nextjs />
          </div>
          <div className={styles.logo} data-animation-delay={0}>
            <Nodejs />
          </div>
          <div className={styles.logo} data-animation-delay={4}>
            <Reactjs />
          </div>
          <div className={styles.logo} data-animation-delay={1}>
            <Starlette />
          </div>
          <div className={styles.logo} data-animation-delay={2}>
            <Supabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
