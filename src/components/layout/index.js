import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { styled, ms, media } from "styles";
import "./layout.scss";
import favicon from "../../img/favicon.png";

const Layout = styled.div`
  display: grid;
  grid-template: auto 1fr auto / 100%;
  min-height: 100vh;

  ${media.greaterThan("medium")`
  `}

  main {
    padding: ${ms(1.5)};
    ${media.lessThan("medium")`
    padding: ${ms(0)};
    `}
  }
`;

class TemplateWrapper extends React.Component {
  render() {
    return (
      <Layout>
        <Header gradient={this.props.gradient} />
        <main>
          <Helmet
            title="Home | ECE Students"
            link={[
              { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
            ]}
          />

          {this.props.children}
        </main>
        <Footer gradient={this.props.gradient} />
      </Layout>
    );
  }
}

export default TemplateWrapper;
