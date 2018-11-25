import React from "react";
import { Wrapper, Gradient, media, styled, ms, colors } from "styles";
import Address from "./address";
import Contact from "./contact";
import Social from "./social";

const Container = styled.div`
  box-shadow: 0 0 3px 0 ${colors.black};
  color: white;
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  padding: ${ms(1)} 0;
  ${media.greaterThan("medium")`
        flex-direction: row;
    `}

  ${media.lessThan("medium")`
        > div {
          margin-bottom: ${ms(1)};
        }
    `}

  div {
    flex: 1;
  }

  h3 {
    font-size: ${ms(1)};
    margin: 0 0 ${ms(1)} 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = props => (
  <Container gradient={props.gradient}>
    <Wrapper>
      <Grid>
        <Contact />
        <Address />
        <Social />
      </Grid>
    </Wrapper>
  </Container>
);

export default Footer;
