import { allPosts } from "contentlayer/generated";
import type { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import Pill from "@/_components/elements/pill";

const components = {
  Pill,
};

const getPost = (slug: string): Post => {
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);
  if (!post) {
    throw new Error(`This article ${slug} doesn't exist`);
  }
  return post;
};

export default ({ params }: { params: { slug: string } }): JSX.Element => {
  const post = getPost(params.slug);

  const Content = useMDXComponent(post.body.code);
  return (
    <div style={{ flex: "1 0 0" }}>
      <article>
        <p>{post.title}</p>
        <time>{post.date.toString()}</time>
        <Content components={components} />
      </article>
    </div>
  );
};
