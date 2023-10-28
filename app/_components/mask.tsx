"use client";

import { useContext } from "react";

import { ScrollContext } from "@/_state";
import styles from "@/_styles/layout.module.css";
import { NN } from "@/_lib/assets";

const Mask = (): JSX.Element => {
  const { progress } = useContext(ScrollContext);
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
