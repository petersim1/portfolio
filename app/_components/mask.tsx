import styles from "@/_styles/layout.module.css";
import { NN } from "@/_assets";

const Mask = ({ progress }: { progress: number[] }): JSX.Element => {
  const totProgress = progress.length > 0 ? progress[1] + progress[2] : 0;
  return (
    <div className={styles.mask_holder}>
      <NN />
      <div
        style={{
          height: `calc(200vh*(100 - (${totProgress})/2)/100)`,
        }}
      />
    </div>
  );
};

export default Mask;
