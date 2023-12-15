import type { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import Back from "@/_components/blog/back";
import styled from "../styled.module.css";

type Props = {
  post: Post,
  [key: string]: any
}

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

export default ({ post, ...rest }: Props): JSX.Element => {
  const Content = useMDXComponent(post.body.code);
  const date = new Date(post.date).toLocaleDateString("en-US", options);
  return (
    <div className={styled.blog_holder}>
      <Back />
      <article>
        <h2>{post.title}</h2>
        <time>{date}</time>
        <Content {...rest} />
      </article>
    </div>
  );
};