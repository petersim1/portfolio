import Link from "next/link";
import type { Post } from "contentlayer/generated";

import { Text } from "@/_components/elements/Text";
import { Pill } from "@/_components/elements";
import styled from "../styled.module.css";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
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
              <div className={styled.header}>
                <Text size="xl">{post.title}</Text>
                <time>
                  <span className={styled.faint}>{date}</span>
                </time>
              </div>
              <Text size="sm">{post.excerpt}</Text>
              <div className={styled.tags}>
                {post.tags.map((tag, ind2) => (
                  <Pill key={ind2} text={tag} />
                ))}
              </div>
              <div className={styled.footer}>
                <Text size="xs">
                  <span className={styled.faint}>{post.readingTime.text}</span>
                </Text>
                <Link href={post.url} className={styled.preview}>
                  <Text size="xs">{"Read ->"}</Text>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
