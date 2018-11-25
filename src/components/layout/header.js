import React from "react";
import { Link, graphql } from "gatsby";
import { ms, styled, Wrapper, Gradient, colors, media } from "styles";
import logo from "./logo_white.png";

const Container = styled.div`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
  box-shadow: 0 0 3px 0 ${colors.black};
  padding: ${ms(-1)} 0;
`;

const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("medium")`.gatsby-image-wrapper {
      width: 150px !important;}
    `}

  nav {
    text-transform: uppercase;
    font-size: ${ms(0.25)};
    font-weight: 400;
    font-family: MuseoSans;

    a {
      margin: 0 ${ms(-1)};
    }
  }
`;

const Header = ({ gradient }) => (
  <Container gradient={gradient}>
    <Content>
      <Link className="logo" to="/">
        <img src={logo} />
      </Link>

      <nav>
        <Link to="/"> Home</Link>
        <Link to="/signature"> Signature</Link>
        <Link to="/signature"> Signature</Link>
        <Link to="/signature"> Signature</Link>
      </nav>
    </Content>
  </Container>
);

export default Header;
