"use client";

import { useMemo } from "react";

import { useScrollContext } from "@/_store/scroll";
import styles from "./elements.module.css";
import { NN } from "@/_lib/assets";

const Mask = (): JSX.Element => {
  const { breakpoints, progress } = useScrollContext();
  const totHeight = useMemo(() => breakpoints[1] - breakpoints[0], [breakpoints]);
  console.log(progress[1]);
  return (
    <div className={styles.mask_holder} style={{ top: `${(breakpoints[0] + totHeight) / 2}px` }}>
      <NN />
      <div
        style={{
          // width: `calc(110vw*(100 - ${progress[1]})/100)`,
          background: `linear-gradient(-60deg, var(--bg) ${100 - progress[1]}%, transparent)`,
        }}
      />
    </div>
  );
};

export default Mask;
