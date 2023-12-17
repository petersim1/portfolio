import type { Post } from "contentlayer/generated";

import Preview from "./preview";
import styled from "../styled.module.css";

export default ({ previews }: { previews: Post[] }): JSX.Element => {
  return (
    <div className={styled.blog_holder}>
      <h2>Blog Posts</h2>
      <div className={styled.previews}>
        {previews.map((preview, ind) => (
          <Preview post={preview} prefetch={true} key={ind} />
        ))}
      </div>
    </div>
  );
};
