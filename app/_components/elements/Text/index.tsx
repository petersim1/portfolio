"use client";

import styled from "./styled.module.css";

export const GradientBlock = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const handleHover = (event: React.MouseEvent<HTMLDivElement>): void => {
    const el = event.currentTarget;
    const { x, y, height, width } = el.getBoundingClientRect();
    const { clientX, clientY } = event;

    const percentX = (100 * (clientX - x)) / width;
    const percentY = (100 * (clientY - y)) / height;

    // solution without needing ref's and states
    el.style.setProperty("--grad-x", `${percentX}%`);
    el.style.setProperty("--grad-y", `${percentY}%`);
  };

  return (
    <div
      className={styled.gradient}
      onMouseMove={handleHover}
      style={{ "--grad-x": "0%", "--grad-y": "0%" } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const GradientText = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <span className={styled.transparent}>{children}</span>;
};
