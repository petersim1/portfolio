import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import Pill from "@/_components/elements/pill";
import mdComponent from "@/_components/Blog/Elements";
import Blog from "@/_components/Blog/Post";
const components = {
  Pill,
  p: ({ children }): JSX.Element => <p style={{ margin: "1rem 0" }}>{children}</p>,
  ...mdComponent,
};

export default ({ params }: { params: { slug: string } }): JSX.Element => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <main style={{ flex: "1 0 0" }}>
      <section>
        <Blog post={post} components={components} />
      </section>
    </main>
  );
};
