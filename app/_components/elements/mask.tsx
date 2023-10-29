"use client";

import { useScrollContext } from "@/_store/scroll";
import styles from "./elements.module.css";
import { NN } from "@/_lib/assets";

const Mask = (): JSX.Element => {
  const { breakpoints, progress } = useScrollContext();
  let totProgress = 0;
  if (progress.length > 0) {
    totProgress = progress.slice(0, 2).reduce((a, b) => a + b, 0) / 2;
  }
  const totHeight = breakpoints[1];
  return (
    <div className={styles.mask_holder} style={{ height: `${totHeight}px` }}>
      <NN />
      <div
        style={{
          height: `calc(${totHeight}px*(100 - ${totProgress})/100)`,
        }}
      />
    </div>
  );
};

export default Mask;
