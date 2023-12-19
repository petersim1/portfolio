import classNames from "classnames";
import { GeistSans } from "geist/font/sans";

import styled from "./styled.module.css";

export default ({ title, subheader }: { title: string; subheader: string }): JSX.Element => {
  return (
    <div className={classNames(GeistSans.className, styled.og_wrapper)}>
      <div>
        <h1>{title}</h1>
      </div>
      {subheader && (
        <div>
          <p>{subheader}</p>
        </div>
      )}
    </div>
  );
};
