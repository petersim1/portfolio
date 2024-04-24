import Link from "next/link";

import { spacemono } from "@/_theme/fonts";
import { Nav, NavHolder, NavItems } from "./styled";

export default (): JSX.Element => {
  return (
    <Nav className={spacemono.className}>
      <NavHolder>
        <Link href="/">P.S.</Link>
        <NavItems>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </NavItems>
      </NavHolder>
    </Nav>
  );
};
