"use client";

import styled from "styled-components";

import { CommonPad, Centered, Row, Column } from "@/_components/Common";

export const Footer = styled.footer`
  ${CommonPad}
`;

export const FooterDiv = styled(Column)`
  ${Centered}
  gap: ${({ theme }): string => theme.gaps.rem05};
  padding: ${({ theme }): string => theme.gaps.xl} 0;
  white-space: nowrap;
`;

export const FooterContacts = styled(Row)`
  ${Centered}
  gap: ${({ theme }): string => theme.gaps.lg};
`;
