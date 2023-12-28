import { Metadata, ResolvingMetadata } from "next";

import { allPosts, type Post } from "contentlayer/generated";

import * as BlogStyled from "@/_components/Blog";
import { H1, Faint, P, H3, SubHeader } from "@/_components/Text";
import { getFormattedDate } from "@/_lib/utils";
import { Main, Pill } from "@/_components/Common";

export const generateMetadata = async (_, parent: ResolvingMetadata): Promise<Metadata> => {
  const parentMeta = await parent;

  // Og + Twitter would get overwritten, all else gets merged.
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
    <Main>
      <BlogStyled.Holder>
        <H1>Blog Posts</H1>
        <BlogStyled.BlogHolder>
          <BlogStyled.Previews>
            {posts.map((post, ind) => (
              <BlogStyled.Preview key={ind}>
                <BlogStyled.Header>
                  <H3>{post.title}</H3>
                  <div style={{ width: "100%" }}>
                    <SubHeader>
                      <time>
                        <Faint>{getFormattedDate(post.date)}</Faint>
                      </time>
                      <Faint> • </Faint>
                      <Faint>{post.readingTime.text}</Faint>
                    </SubHeader>
                  </div>
                </BlogStyled.Header>
                <P>{post.excerpt}</P>
                <BlogStyled.Tags>
                  {post.tags.map((tag, ind2) => (
                    <Pill key={ind2}>{tag}</Pill>
                  ))}
                </BlogStyled.Tags>
                <BlogStyled.Footer>
                  <BlogStyled.ReadMore href={post.url}>
                    <P>{"Read ->"}</P>
                  </BlogStyled.ReadMore>
                </BlogStyled.Footer>
              </BlogStyled.Preview>
            ))}
          </BlogStyled.Previews>
        </BlogStyled.BlogHolder>
      </BlogStyled.Holder>
    </Main>
  );
};
