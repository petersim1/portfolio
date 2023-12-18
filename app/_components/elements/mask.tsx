"use client";

import { useMemo } from "react";

import { useScrollContext } from "@/_store/scroll";
import styles from "./styled.module.css";
import { NN } from "@/_lib/assets";

export default (): JSX.Element => {
  const { breakpoints, progress } = useScrollContext();
  const totHeight = useMemo(() => breakpoints[1] - breakpoints[0], [breakpoints]);
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
