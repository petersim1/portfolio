import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";

export default (): JSX.Element => {
  const posts: Post[] = allPosts.toSorted(
    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div>
      {posts.map((post, ind) => (
        <div key={ind}>
          <Link href={post.url} prefetch={true}>
            <p>{post.title}</p>
            <p>{post.date.toString()}</p>
            <p>{post.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
