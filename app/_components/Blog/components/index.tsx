/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { highlight } from "sugar-high";

import { getMetadata } from "@/_actions";
import { BackArrow, LinkUnderline, ImageHolder, TableDiv, URLPreviewClient } from "./styled";

export const Back = ({ url }: { url: string }): JSX.Element => {
  return (
    <BackArrow>
      <Link href={url}>{"<-"}</Link>
    </BackArrow>
  );
};

const Code = ({ children, ...props }): JSX.Element => {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const DynamicLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => {
  const url = href.includes("http") ? href : `/blog/${href}`;
  return (
    <LinkUnderline href={url} target={href.includes("http") ? "_blank" : "_self"}>
      {children}
    </LinkUnderline>
  );
};

const MdImage = ({ src, caption }: { src: string; caption?: string }): JSX.Element => {
  return (
    <ImageHolder>
      <div>
        {src.includes("http") ? (
          <img
            src={src}
            alt="markdown img"
            style={{ maxHeight: "300px", width: "auto", maxWidth: "100%" }}
          />
        ) : (
          <Image src={src} alt="markdown img" sizes="any" width={0} height={0} />
        )}
      </div>
      {caption && <em>{caption}</em>}
    </ImageHolder>
  );
};

const Table = ({
  header,
  rows,
  caption,
  hideCaption = false,
}: {
  header: string[];
  rows: string[][];
  caption: string;
  hideCaption?: boolean;
}): JSX.Element => {
  return (
    <TableDiv $hide={hideCaption}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {header.map((item, ind) => (
              <th key={ind}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ind) => (
            <tr key={ind}>
              {row.map((item, ind2) => (
                <td key={ind2}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableDiv>
  );
};

const UrlPreview = async ({
  url,
  landscape,
}: {
  url: string;
  landscape?: boolean;
}): Promise<JSX.Element> => {
  const data = await getMetadata(url);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <URLPreviewClient url={url} body={data} landscape={landscape} />
    </Suspense>
  );
};

export default {
  code: Code,
  a: DynamicLink,
  MdImage,
  Table,
  UrlPreview,
};
