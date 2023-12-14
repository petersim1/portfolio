import { MDXRemote } from "next-mdx-remote/rsc";

import { getContent } from "@/_actions";
import Pill from "@/_components/elements/pill";

export default ({ params }: { params: { slug: string } }): JSX.Element => {
  const { data, content } = getContent(params.slug);
  return (
    <div>
      <p>{data.title}</p>
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={content} components={{ Pill }} />
    </div>
  );
};
