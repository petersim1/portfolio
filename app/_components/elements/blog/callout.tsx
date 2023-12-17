import styled from "./styled.module.css";

export default ({ text }: { text: string }): JSX.Element => {
  return <span className={styled.callout}>{text}</span>;
};
