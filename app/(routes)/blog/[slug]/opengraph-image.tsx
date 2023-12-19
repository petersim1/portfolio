import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";

import OpenGraph from "@/_components/OpenGraph";

// Route segment config
export const runtime = "edge";

// Image size
export const size = { width: 1200, height: 630 };

// Image content type
export const contentType = "image/png";

// This same code was used to generate the static og-image.png files
// for static routes.

export default ({ params }: { params: { slug: string } }): ImageResponse => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  const subheader = post.title || "";
  return new ImageResponse(<OpenGraph title="Peter Simone | Blog" subheader={subheader} />, {
    ...size,
  });
};
