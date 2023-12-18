"use client";
import classNames from "classnames";
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
      style={{ "--grad-x": "50%", "--grad-y": "0%" } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const GradientText = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <span className={styled.transparent}>{children}</span>;
};

export const TextShadow = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <span className={styled.shadow}>{children}</span>;
};

export const Text = ({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: string;
}): JSX.Element => {
  return (
    <p
      className={classNames({
        [styled.text_xs]: size == "xs",
        [styled.text_sm]: size == "sm",
        [styled.text_md]: size == "md",
        [styled.text_lg]: size == "lg",
      })}
    >
      {children}
    </p>
  );
};
