import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Pill } from "@/_components/Common";
import mdComponent from "@/_components/Elements/Blog";
import Back from "@/_components/Elements/Blog/back";
import { Faint } from "@/_components/Text";
import Blog, { BlogStyled } from "@/_components/Blog";
import { getFormattedDate } from "@/_lib/utils";

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
      <BlogStyled.Holder>
        <BlogStyled.BlogHolder>
          <Back />
          <article>
            <h2>{post.title}</h2>
            <BlogStyled.Tags>
              {post.tags.map((tag, ind2) => (
                <Pill key={ind2} text={tag} />
              ))}
            </BlogStyled.Tags>
            <time>
              <Faint>{getFormattedDate(post.date)}</Faint>
            </time>
            <Blog post={post} components={components} />
          </article>
        </BlogStyled.BlogHolder>
      </BlogStyled.Holder>
    </main>
  );
};
