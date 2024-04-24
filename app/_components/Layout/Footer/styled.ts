"use client";

import styled from "styled-components";

import { CommonPad, Centered, Row } from "@/_components/Common";

export const Footer = styled.footer`
  ${CommonPad}
`;

export const FooterContacts = styled(Row)`
  ${Centered}
  padding: ${({ theme }): string => theme.gaps.xl} 0;
  gap: ${({ theme }): string => theme.gaps.lg};
`;
