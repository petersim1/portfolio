import classNames from "classnames";

import { inconsolata } from "@/_lib/fonts";
import styles from "./styled.module.css";

export default ({ text }: { text: string }): JSX.Element => {
  return <div className={classNames(styles.pill, inconsolata.className)}>{text}</div>;
};
