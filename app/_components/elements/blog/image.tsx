import Image from "next/image";

import styled from "./styled.module.css";

export default ({ src, caption }: { src: string; caption?: string }): JSX.Element => {
  return (
    <div className={styled.md_image_holder}>
      <div className={styled.md_image}>
        <Image src={src} alt="markdown img" sizes="any" width={0} height={0} />
      </div>
      {caption && <em>{caption}</em>}
    </div>
  );
};
