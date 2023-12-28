import Link from "next/link";

import { P, H4 } from "@/_components/Text";
import { spacemono } from "@/_theme/fonts";
import { Nav, NavDiv, NavHolder, NavItems } from "./styled";

export default (): JSX.Element => {
  return (
    <Nav className={spacemono.className}>
      <NavDiv>
        <NavHolder>
          <Link href="/">
            <H4>peter simone</H4>
          </Link>
        </NavHolder>
        <NavItems>
          <Link href="/blog">
            <P>Blog </P>
          </Link>
        </NavItems>
      </NavDiv>
    </Nav>
  );
};
