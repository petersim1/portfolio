import { useMemo } from "react";
import classNames from "classnames";

import styles from "@/styles/layout.module.css";
import { worksans } from "@/styles/fonts";

const Intro = ({ progress }: { progress: number }): JSX.Element => {
  const options = ["ml/ai", "web dev", "web3", "sports", "research"];

  const active = useMemo((): number => {
    return Math.min(options.length - 1, Math.round((progress / 100) * (options.length - 1)));
  }, [progress]);

  return (
    <section className="h_300" id="intro">
      <div className={styles.parallax}>
        <div className={classNames(styles.intro_holder, worksans.className)}>
          <div>
            <h1>
              Peter
              <br />
              Simone
            </h1>
          </div>
          <div className={styles.cycle_holder}>
            <div
              className={styles.cycle}
              style={{ transform: `translateY(calc(-1*(var(--gap) + 2.5rem)*${active}))` }}
            >
              {options.map((option, ind) => (
                <div
                  key={ind}
                  className={classNames(styles.item, { [styles.active]: active === ind })}
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
