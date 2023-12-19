import { ImageResponse } from "next/og";

import OpenGraph from "@/_components/OpenGraph";

// Route segment config
export const runtime = "edge";

// Image size
export const size = { width: 1200, height: 630 };

// Image content type
export const contentType = "image/png";

export default (): ImageResponse => {
  return new ImageResponse(<OpenGraph title="Peter Simone | Blog" />, {
    ...size,
  });
};
