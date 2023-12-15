import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import Pill from "@/_components/elements/pill";
import mdComponent from "@/_components/elements/blog";
import Blog from "@/_components/blog/Blog";

const components = {
  Pill,
  ...mdComponent,
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
