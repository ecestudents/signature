import React from "react";
import { Wrapper, Gradient, media, styled } from "../../styles";
import Address from "./address";
import Contact from "./contact";
import Social from "./social";

const Container = styled.div`
  color: white;
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;

  div {
    flex: 1;
  }

  ${media.greaterThan("medium")`
        flex-direction: row;
    `}
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container gradient={this.props.gradient}>
        <Wrapper>
          <Grid>
            <Contact />
            <Address />
            <Social />
          </Grid>
        </Wrapper>
      </Container>
    );
  }
}

export default Footer;
