"use client";

import styled, { css } from "styled-components";
import { Mirror, Twitter, Linkedin, Github, Mail } from "@/_lib/assets";
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

export const IconSmall = styled.div`
  height: 20px;
  width: 20px;
  ${Icon}
`;

export const IconMedium = styled.div`
  height: 30px;
  width: 30px;
  ${Icon}
`;

export const IconLarge = styled.div`
  height: 40px;
  width: 40px;
  ${Icon}
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
  return <Mirror {...rest} />;
};
