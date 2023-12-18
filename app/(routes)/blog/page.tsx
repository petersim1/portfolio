import { allPosts, Post } from "contentlayer/generated";

import Preview from "@/_components/Blog/Preview";

export default (): JSX.Element => {
  const posts: Post[] = allPosts.sort(
    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main style={{ flex: "1 0 0" }}>
      <section>
        <Preview previews={posts} />
      </section>
    </main>
  );
};
