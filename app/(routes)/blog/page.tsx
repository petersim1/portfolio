import { Metadata, ResolvingMetadata } from "next";

import { allPosts, Post } from "contentlayer/generated";

import Preview from "@/_components/Blog/Preview";

export const generateMetadata = async (props, parent: ResolvingMetadata): Promise<Metadata> => {
  const parentMeta = await parent;

  const { images: ogImages, ...ogRest } = parentMeta.openGraph;
  const { images: twImages, ...twRest } = parentMeta.twitter;

  return {
    title: "Peter Simone | Blog",
    description: "Peter Simone | Blog",
    openGraph: {
      ...ogRest,
      title: "Peter Simone | Blog",
      description: "Peter Simone | Blog",
    },
    twitter: {
      ...twRest,
      title: "Peter Simone | Blog",
      description: "Peter Simone | Blog",
    },
  };
};

export default (): JSX.Element => {
  const posts: Post[] = allPosts.sort(
    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main style={{ flex: "1 0 0" }}>
      <Preview previews={posts} />
    </main>
  );
};
