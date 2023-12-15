import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import Pill from "@/_components/elements/pill";

const components = {
  Pill,
};

export default ({ params }: { params: { slug: string } }): JSX.Element => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) {
    return notFound();
  }

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
