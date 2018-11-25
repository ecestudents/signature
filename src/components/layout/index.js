import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./Footer";
import { slide as Menu } from "react-burger-menu";
import { styled, ms, media } from "styles";
import "./layout.scss";
import favicon from "../../img/favicon.png";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${media.greaterThan("medium")`
     .bm-burger-button {
       display: none;
     }
  `}

  main {
    flex: 1;
    margin: ${ms(1.5)} 0;

    ${media.lessThan("medium")`
     margin: 0 ${ms(0)};
     `}
  }
`;

class TemplateWrapper extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Layout id="outer-container">
        <Menu
          right
          noOverlay
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <div id="page-wrap">
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
        </div>
      </Layout>
    );
  }
}

export default TemplateWrapper;
