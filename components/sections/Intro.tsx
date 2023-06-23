import { useMemo, useState, useEffect } from "react";
import classNames from "classnames";

import styles from "@/styles/intro.module.css";
import { worksans } from "@/styles/fonts";
import { cycle } from "@/constants";
import { Arrow } from "@/assets";

const Intro = ({ progress }: { progress: number }): JSX.Element => {
  // repeat 1st and last indices to give appearance that it's cycling.
  const options = cycle.slice(-1).concat(cycle).concat(cycle.slice(0, 1));
  const [large, setLarge] = useState(true);

  useEffect(() => {
    const fixSize = (): void => {
      const { matches } = window.matchMedia("(max-width: 900px)");
      setLarge(!matches);
    };

    const { matches } = window.matchMedia("(max-width: 900px)");
    setLarge(!matches);

    window.addEventListener("resize", fixSize);

    return () => {
      window.addEventListener("resize", fixSize);
    };
  }, []);

  const query = useMemo(() => {
    const activeInd = Math.min(
      options.length - 2,
      Math.round((progress / 100) * (options.length - 3)),
    );
    let transform;
    if (large) {
      transform = `translateY(calc(-1*(var(--gap-vert) + 2.5rem)*${activeInd}))`;
    } else {
      transform = `translateX(calc(-1*(var(--fixed-width))*${activeInd}))`;
    }
    return {
      active: activeInd,
      transform,
    };
  }, [progress, large]);

  return (
    <section className="h_300" id="intro" data-offset-top={0} data-offset-bottom={0}>
      <div className={styles.parallax}>
        <div
          className={classNames(styles.intro_holder, worksans.className, { [styles.large]: large })}
        >
          <div className={styles.grain}>
            <h1>
              Peter
              <br />
              Simone
            </h1>
          </div>
          <div className={classNames(styles.cycle_holder, { [styles.large]: large })}>
            <div
              className={classNames(styles.cycle, { [styles.large]: large })}
              style={{ transform: query.transform }}
            >
              {options.map((option, ind) => (
                <div
                  key={ind}
                  className={classNames(styles.item, {
                    [styles.active]: query.active === ind - 1,
                    [styles.large]: large,
                  })}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={classNames(styles.arrow_fix, {
            [styles.hide]: progress === 100,
            [styles.large]: large,
          })}
        >
          <Arrow height="1.5rem" width="1.5rem" fill="var(--font)" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
