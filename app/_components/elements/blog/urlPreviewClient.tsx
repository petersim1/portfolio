"use client";
import { useEffect, useState } from "react";

import styled from "./styled.module.css";

export default ({ url, body }: { url: string; body: string }): JSX.Element => {
  const [data, setData] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(body, "text/html");
    const title = doc.querySelector("title")?.textContent || "";
    const description = doc.querySelector("meta[name=description]")?.getAttribute("content") || "";
    const image = doc.querySelector("meta[property='og:image']")?.getAttribute("content") || "";
    setData({ title, description, image });
  }, []);

  if (!body) {
    return <div>couldn't load</div>;
  }

  return (
    <div className={styled.preview_block}>
      <div className={styled.preview_image} style={{ backgroundImage: `url(${data.image})` }} />
      <div className={styled.preview_text}>
        <p className={styled.preview_title}>{data.title}</p>
        <p>{data.description}</p>
        <p className={styled.preview_url}>{new URL(url).host.toLowerCase()}</p>
      </div>
    </div>
  );
};
