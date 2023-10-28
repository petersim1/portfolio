"use client";

import styles from "@/_styles/intro.module.css";

const Intro = (): JSX.Element => {
  const handleHover = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { x, y, height, width } = event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;

    const percentX = (100 * (clientX - x)) / width;
    const percentY = (100 * (clientY - y)) / height;

    const style = `radial-gradient(\
circle at ${percentX}% ${percentY}%, \
rgb(195, 251, 214) 10%, \
rgb(0, 204, 255) 70%\
    )`;
    event.currentTarget.style.setProperty("background", style);
    event.currentTarget.style.setProperty("-webkit-background-clip", "text");
  };

  return (
    <section className="h_100" id="intro" data-offset-top={0} data-offset-bottom={50}>
      <div className={styles.intro_holder}>
        <div className={styles.gradient} onMouseMove={handleHover} id="hoverGrad">
          <h2>
            <span>I'm a </span>
            <span className={styles.transparent}>data scientist</span>
            <br />
            <span>and </span>
            <span className={styles.transparent}>full stack developer</span>
            <span>.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;
