import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ms, styled, Wrapper, Gradient, colors, media } from "styles";

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
//
const Header = ({ data, gradient }) => (
  <Container gradient={gradient}>
    <Content>
      <Link className="logo" to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo_white.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
