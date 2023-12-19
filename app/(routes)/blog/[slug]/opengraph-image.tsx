import { ImageResponse } from "next/og";
import { allPosts } from "contentlayer/generated";

// Route segment config
export const runtime = "edge";

// Image size
export const size = { width: 1200, height: 630 };

// Image content type
export const contentType = "image/png";

export default async ({ params }: { params: { slug: string } }): Promise<ImageResponse> => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  const subheader = post.title || "";
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#121212",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <div>
          <h1>Peter Simone | Blog</h1>
        </div>
        {subheader && (
          <div>
            <p>{subheader}</p>
          </div>
        )}
      </div>
    ),
    {
      ...size,
    },
  );
};
