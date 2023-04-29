import { useMemo, useState, useEffect } from "react";
import classNames from "classnames";

import styles from "@/styles/layout.module.css";
import { worksans } from "@/styles/fonts";

const Intro = ({ progress }: { progress: number }): JSX.Element => {
  const options = ["ml/ai", "web dev", "web3", "sports", "research"];
  const [large, setLarge] = useState(true);

  useEffect(() => {
    const fixSize = (): void => {
      const { matches } = window.matchMedia("(max-width: 850px)");
      setLarge(!matches);
    };

    const { matches } = window.matchMedia("(max-width: 850px)");
    setLarge(!matches);

    window.addEventListener("resize", fixSize);

    return () => {
      window.addEventListener("resize", fixSize);
    };
  }, []);

  const query = useMemo(() => {
    const activeInd = Math.min(
      options.length - 1,
      Math.round((progress / 100) * (options.length - 1)),
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
    <section className="h_300" id="intro">
      <div className={styles.parallax}>
        <div
          className={classNames(styles.intro_holder, worksans.className, { [styles.large]: large })}
        >
          <div>
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
                    [styles.active]: query.active === ind,
                    [styles.large]: large,
                  })}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
