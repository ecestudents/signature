import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ms, styled, Wrapper, Gradient } from "styles";

const Container = styled.div`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
`;

const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
//
const Header = ({ data, gradient }) => (
  <Container gradient={gradient}>
    <Content>
      <Img fixed={data.file.childImageSharp.fixed} />
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/signature"> Signature</Link>
        <Link to="/signature"> Signature</Link>
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
            fixed(height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
