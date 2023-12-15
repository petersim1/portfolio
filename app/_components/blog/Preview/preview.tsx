import Link from "next/link";
import type { Post } from "contentlayer/generated";

import styled from "../styled.module.css";

type Props = {
  post: Post,
  [key: string]: any;
}

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};

export default ({post, ...rest}: Props ): JSX.Element => {
  const date = new Date(post.date).toLocaleDateString("en-US", options);
  console.log(post.date);
  return (
    <div className={styled.preview_div}>
      <p>{post.title}</p>
      <time>{date}</time>
      <p>{post.excerpt}</p>
      <Link href={post.url} {...rest} className={styled.preview}>{"Read ->"}</Link>
    </div>
  )
}