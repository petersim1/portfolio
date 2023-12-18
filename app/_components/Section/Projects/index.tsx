import classNames from "classnames";

import { GradientBlock, GradientText } from "@/_components/elements/Text";
import styles from "./styled.module.css";
import Project from "./project";
import { projects } from "@/_lib/constants";
// import { Arrow } from "@/_lib/assets";

export default (): JSX.Element => {
  return (
    <section id="projects" data-offset-top={0} data-offset-bottom={0}>
      <div className={styles.wrapper}>
        <GradientBlock>
          <h3>
            Check out some
            <br />
            <GradientText>projects</GradientText> I've worked on
          </h3>
        </GradientBlock>
        <div className={classNames(styles.projects)}>
          {projects.map((data, ind) => (
            <Project data={data} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};
