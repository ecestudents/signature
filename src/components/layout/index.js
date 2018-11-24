import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./Footer";
import { styled, ms } from "styles";
import "./layout.scss";
import favicon from "../../img/favicon.png";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    margin: ${ms(1.5)} 0;
  }
`;

const TemplateWrapper = props => (
  <Layout>
    <div>
      <Header gradient={props.gradient} />
    </div>
    <main>
      <Helmet
        title="Home | ECE Students"
        link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      />

      {props.children}
    </main>
    <div>
      <Footer gradient={props.gradient} />
    </div>
  </Layout>
);

export default TemplateWrapper;
