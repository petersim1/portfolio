import Link from "next/link"

import styled from "./styled.module.css";

export default (): JSX.Element => {
  return (
    <div className={styled.back_arrow}>
      <Link href={"/blog"}>{"<-"}</Link>
    </div>
  )
}