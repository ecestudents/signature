import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { styled, ms, media } from "styles";
import "./layout.scss";
import favicon from "../../img/favicon.png";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${media.greaterThan("medium")`
  `}

  main {
    flex: 1;
    margin: ${ms(1.5)} 0;

    ${media.lessThan("medium")`
     margin: ${ms(0)} 0;
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
