import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import Pill from "@/_components/elements/pill";
import mdComponent from "@/_components/elements/Blog";
import Blog from "@/_components/Blog/Post";
const components = {
  Pill,
  p: ({ children }): JSX.Element => <p style={{ margin: "1rem 0" }}>{children}</p>,
  hr: (): JSX.Element => <hr style={{ borderWidth: "0.5px", opacity: 0.5 }} />,
  ...mdComponent,
};

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) {
    // should fallback to previous metadata, although redirect is already setup.
    return;
  }
  const parentMeta = await parent;

  const { images: ogImages, ...ogRest } = parentMeta.openGraph;
  const { images: twImages, ...twRest } = parentMeta.twitter;

  return {
    title: `Peter Simone | Blog | ${post.title}`,
    description: `Peter Simone | Blog | ${post.excerpt}`,
    openGraph: {
      ...ogRest,
      title: `Peter Simone | Blog | ${post.title}`,
      description: `Peter Simone | Blog | ${post.excerpt}`,
      type: "article",
    },
    twitter: {
      ...twRest,
      title: `Peter Simone | Blog | ${post.title}`,
      description: `Peter Simone | Blog | ${post.excerpt}`,
    },
  };
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
