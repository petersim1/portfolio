import type { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Pill } from "@/_components/elements";
import Back from "@/_components/elements/Blog/back";
import styled from "../styled.module.css";

type Props = {
  post: Post;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default ({ post, ...rest }: Props): JSX.Element => {
  const Content = useMDXComponent(post.body.code);
  const date = new Date(post.date).toLocaleDateString("en-US", options);
  return (
    <div className={styled.blog_holder}>
      <Back />
      <article>
        <h2>{post.title}</h2>
        <div className={styled.tags} style={{ margin: "10px 0" }}>
          {post.tags.map((tag, ind2) => (
            <Pill key={ind2} text={tag} />
          ))}
        </div>
        <time>
          <span className={styled.faint}>{date}</span>
        </time>
        <Content {...rest} />
      </article>
    </div>
  );
};
