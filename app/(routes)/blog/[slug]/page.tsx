import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import Pill from "@/_components/elements/pill";
import Code from "@/_components/elements/code";
import Blog from "@/_components/blog/Blog";

const components = {
  Pill,
  code: Code,
};

export default ({ params }: { params: { slug: string } }): JSX.Element => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <main style={{ flex: "1 0 0" }}>
      <Blog post={post} components={components} />
    </main>
  );
};
