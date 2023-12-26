import Link from "next/link";

import styled from "./styled.module.css";

export default ({ href, children }: { href: string; children: React.ReactNode }): JSX.Element => {
  const url = href.includes("http") ? href : `/blog/${href}`;
  return (
    <Link href={url} target={href.includes("http") ? "_blank" : "_self"} className={styled.link}>
      {children}
    </Link>
  );
};
