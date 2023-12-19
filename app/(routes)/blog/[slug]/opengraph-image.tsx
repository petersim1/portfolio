import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";

export const contentType = "image/png";

export default async ({ params }: { params: { slug: string } }): Promise<ImageResponse> => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {params.slug}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
};
