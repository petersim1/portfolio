import Link from "next/link";
import type { Post } from "contentlayer/generated";

import { Text } from "@/_components/elements/Text";
import { Pill } from "@/_components/elements";
import styled from "../styled.module.css";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};

export default ({ previews }: { previews: Post[] }): JSX.Element => {
  return (
    <div className={styled.blog_holder}>
      <h2>Blog Posts</h2>
      <div className={styled.previews}>
        {previews.map((post, ind) => {
          const date = new Date(post.date).toLocaleDateString("en-US", options);
          return (
            <div className={styled.preview_div} key={ind}>
              <Text size="xl">{post.title}</Text>
              <time>{date}</time>
              <Text size="sm">{post.excerpt}</Text>
              <Text size="xs">{post.readingTime.text}</Text>
              <div className={styled.tags}>
                {post.tags.map((tag, ind2) => (
                  <Pill key={ind2} text={tag} />
                ))}
              </div>
              <Link href={post.url} className={styled.preview}>
                <Text size="xs">{"Read ->"}</Text>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
