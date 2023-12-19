import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";
import OpenGraph from "@/_components/OpenGraph";

// Route segment config
export const runtime = "edge";

export const contentType = "image/png";

export default async ({ params }: { params: { slug: string } }): Promise<ImageResponse> => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  const subheader = post.title || "";
  return new ImageResponse(<OpenGraph title={"P.S. | Blog"} subheader={subheader} />, {
    width: 1200,
    height: 630,
  });
};
