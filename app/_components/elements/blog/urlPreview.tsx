/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { getMetadata } from "@/_actions";
import UrlPreviewClient from "./urlPreviewClient";

export default async ({
  url,
  landscape = false,
}: {
  url: string;
  landscape?: boolean;
}): Promise<JSX.Element> => {
  const data = await getMetadata(url);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UrlPreviewClient url={url} body={data} landscape={landscape} />
    </Suspense>
  );
};
