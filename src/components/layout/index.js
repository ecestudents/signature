import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import "./layout.scss";
import favicon from "../../img/favicon.png";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

const TemplateWrapper = ({ children }) => (
  <Layout>
    <div>
      <Header />
    </div>
    <main>
      <Helmet
        title="Home | ECE Students"
        link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      />
      {children}
    </main>
    <div>
      <Footer />
    </div>
  </Layout>
);

export default TemplateWrapper;
