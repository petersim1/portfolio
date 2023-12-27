import type { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  post: Post;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default ({ post, ...rest }: Props): JSX.Element => {
  // Type errors if I use this is parent component.
  // Use here instead with spread syntax.
  const Content = useMDXComponent(post.body.code);
  return <Content {...rest} />;
};
