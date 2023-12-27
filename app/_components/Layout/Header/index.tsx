import Link from "next/link";

import { Text } from "@/_components/Elements/Text";
import { spacemono } from "@/_lib/fonts";

import { Nav, NavDiv, NavHolder, NavItems } from "./styled";

export default (): JSX.Element => {
  return (
    <Nav className={spacemono.className}>
      <NavDiv>
        <NavHolder>
          <Link href="/">
            <h4>peter simone</h4>
          </Link>
        </NavHolder>
        <NavItems>
          <Link href="/blog">
            <Text size="sm">blog</Text>
          </Link>
        </NavItems>
      </NavDiv>
    </Nav>
  );
};
