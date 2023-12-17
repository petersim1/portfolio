import Image from "next/image";

import styled from "./styled.module.css";

export default ({ children, src }: { src: string; children: string }): JSX.Element => {
  return (
    <div className={styled.md_image_holder}>
      <div className={styled.md_image}>
        <Image src={src} alt="markdown img" sizes="any" width={0} height={0} />
      </div>
      <em>{children}</em>
    </div>
  );
};
