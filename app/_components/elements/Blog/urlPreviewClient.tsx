"use client";
import Link from "next/link";
import { Tweet } from "react-tweet";
import { useEffect, useState } from "react";
import classNames from "classnames";

import { Text } from "../Text";
import styled from "./styled.module.css";

export default ({
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
      <div className={styled.preview_div}>
        <Tweet id={id} />
      </div>
    );
  }

  if (!body) {
    return <div>couldn't load</div>;
  }

  return (
    <div className={styled.preview_div}>
      <Link href={url} target="_blank">
        <div className={classNames(styled.preview_block, { [styled.landscape]: landscape })}>
          <div
            className={classNames(styled.preview_image, { [styled.landscape]: landscape })}
            style={{ backgroundImage: `url(${data.image})` }}
          />
          <div className={styled.preview_text}>
            <Text size="xs" style={{ fontWeight: 800 }}>
              {data.title}
            </Text>
            <Text size="xs">{data.description}</Text>
            <Text size="xxs" style={{ opacity: 0.6 }}>
              {urlP.host.toLowerCase()}
            </Text>
          </div>
        </div>
      </Link>
    </div>
  );
};
