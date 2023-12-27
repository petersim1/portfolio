"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { Tweet } from "react-tweet";
import { useEffect, useState } from "react";

import { Column, Centered } from "@/_components/Common";
import { OGImage } from "@/_components/Image";
import { P, Faint } from "@/_components/Text";
import { getBreakpoint } from "@/_theme";

export const BackArrow = styled.div`
  margin-bottom: ${({ theme }): string => theme.gaps.md};

  & a {
    display: inline-block;
    width: fit-content;
  }
`;

export const LinkUnderline = styled(Link)`
  text-decoration: underline;
`;

export const ImageHolder = styled(Column)`
  ${Centered}
  display: flex;
  width: 100%;
  max-width: 600px;
  margin: auto;
  gap: ${({ theme }): string => theme.gaps.sm};
  text-align: center;
  padding: 1rem 0;
  font-size: 0.75rem;
  line-height: 1rem;

  & > div {
    position: relative;
    width: 100%;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;

export const TableDiv = styled.div<{ $hide: boolean }>`
  border-collapse: collapse;
  margin: auto;
  overflow-x: scroll;

  & caption {
    margin-bottom: 5px;
    display: ${({ $hide }): string => ($hide ? "none" : "table-caption")};
  }

  & td,
  & th {
    padding: 2px 4px;
    border: 1px solid ${({ theme }): string => theme.textPrimary};
  }
`;

const UrlPreviewDiv = styled(Column)`
  ${Centered}
  width: 100%;
  margin: 1rem 0;

  & a {
    display: inline-block;
    width: fit-content;
    max-width: 100%;
  }
`;

const UrlPreviewBlock = styled.div<{ $landscape?: boolean }>`
  width: ${({ $landscape }): string => ($landscape ? "700px" : "400px")};
  display: ${({ $landscape }): string => ($landscape ? "flex" : "block")};
  border-radius: ${({ theme }): string => theme.borderRadius};
  max-width: 100%;
  border: 1px solid rgb(225, 232, 237);
  overflow: hidden;
  flex-direction: row;
  align-items: center;

  ${getBreakpoint(
    "sm",
    css`
      width: 400px;
      max-width: 100%;
      border: 1px solid rgb(225, 232, 237);
      display: block;
    `,
  )}
`;

const UrlPreviewImage = styled.div<{ $landscape: boolean }>`
  overflow: hidden;
  width: 100%;
  min-width: calc(1.9 * (24px + 16px + 3 * 1.5rem));
  border-bottom-width: ${({ $landscape }): string => ($landscape ? "0px" : "1px")};
  border-right-width: ${({ $landscape }): string => ($landscape ? "1px" : "0px")};
  border-color: rgb(225, 232, 237);
  border-style: solid;
  ${getBreakpoint(
    "sm",
    css`
      border-right-width: 0px;
      border-bottom-width: 1px;
    `,
  )}
`;

const UrlPreviewText = styled(Column)`
  padding: 12px;
  overflow: hidden;
  gap: ${({ theme }): string => theme.gaps.sm};

  & * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const URLPreviewClient = ({
  url,
  body,
  landscape,
}: {
  url: string;
  body: string;
  landscape: boolean;
}): JSX.Element => {
  const [data, setData] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(body, "text/html");
    const title = doc.querySelector("title")?.textContent || "";
    const description = doc.querySelector("meta[name=description]")?.getAttribute("content") || "";
    const image = doc.querySelector("meta[property='og:image']")?.getAttribute("content") || "";
    setData({ title, description, image });
  }, []);

  const urlP = new URL(url);

  if (urlP.host == "twitter.com") {
    const id = urlP.pathname.match(/\/([^/]+)\/?$/)[1];
    return (
      <UrlPreviewDiv>
        <Tweet id={id} />
      </UrlPreviewDiv>
    );
  }

  if (!body) {
    return <div>couldn't load</div>;
  }
  return (
    <UrlPreviewDiv>
      <Link href={url} target="_blank">
        <UrlPreviewBlock $landscape={landscape}>
          <UrlPreviewImage $landscape={landscape}>
            <OGImage $url={data.image} />
          </UrlPreviewImage>
          <UrlPreviewText>
            <P>{data.title}</P>
            <P>{data.description}</P>
            <P>
              <Faint>{urlP.host.toLowerCase()}</Faint>
            </P>
          </UrlPreviewText>
        </UrlPreviewBlock>
      </Link>
    </UrlPreviewDiv>
  );
};
