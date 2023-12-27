"use client";

import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

import Header from "./Header";
import Footer from "./Footer";

export default ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};
