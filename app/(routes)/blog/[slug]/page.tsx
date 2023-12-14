import { MDXRemote } from "next-mdx-remote/rsc";

import { getContent } from "@/_actions";

export default async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const mdxSource = await getContent(params.slug);
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={mdxSource} />
    </div>
  );
};
