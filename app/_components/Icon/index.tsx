"use client";

import styled, { css } from "styled-components";
import { Mirror, Twitter, Linkedin, Github, Mail, Note, Outlink } from "@/_lib/assets";
import { HoverDim } from "../Common";

const Icon = css`
  position: relative;
  transition: opacity ${({ theme }): string => theme.transitions.speedMdEase};

  ${HoverDim}

  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const IconSized = styled.div<{ $size: string }>`
  ${Icon}
  height: ${({ $size }): string => $size};
  width: ${({ $size }): string => $size};
`;

export const Social = (props: React.HTMLProps<SVGElement>): JSX.Element => {
  const { type, ...rest } = props;

  if (type === "twitter") {
    return <Twitter {...rest} fill="#1DA1F2" />;
  }
  if (type === "github") {
    return <Github {...rest} fill="currentColor" />;
  }
  if (type === "email") {
    return <Mail {...rest} fill="currentColor" />;
  }
  if (type === "linkedin") {
    return <Linkedin {...rest} fill="#0072b1" />;
  }
  if (type === "blog") {
    return <Note {...rest} fill="currentColor" />;
  }
  if (type === "mirror") {
    return <Mirror {...rest} />;
  }
  if (type === "site") {
    return <Outlink {...rest} fill="currentColor" />;
  }
  return <></>;
};
