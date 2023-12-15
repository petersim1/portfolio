import { highlight } from "sugar-high";

export default ({ children, ...props }): JSX.Element => {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}