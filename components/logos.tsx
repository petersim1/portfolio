import classNames from "classnames";
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

const Logos = ({ progress }: { progress: number[] }): JSX.Element => {
  const totProgress = progress.length > 0 ? progress[1] + progress[2] : 0;

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
        <div className={styles.logos}>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 80 })}>
            <Pinecone />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 100 })}>
            <Python />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 80 })}>
            <Pytorch />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 90 })}>
            <Javascript />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 110 })}>
            <Typescript />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 80 })}>
            <Docker />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 110 })}>
            <Ethereum />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 100 })}>
            <Firestore />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 90 })}>
            <Git />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 110 })}>
            <Graphql />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 100 })}>
            <Mongodb />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 80 })}>
            <Mysql />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 110 })}>
            <Nextjs />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 90 })}>
            <Nodejs />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 100 })}>
            <Reactjs />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 100 })}>
            <Starlette />
          </div>
          <div className={classNames(styles.logo, { [styles.active]: totProgress >= 80 })}>
            <Supabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
