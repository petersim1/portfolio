import { allPosts, Post } from "contentlayer/generated";

import Preview from "@/_components/blog/Preview";

export default (): JSX.Element => {
  const posts: Post[] = allPosts.toSorted(
    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <main style={{ flex: "1 0 0" }}>
      <Preview previews={posts} />
    </main>
  );
};
