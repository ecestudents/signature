import React from "react";
import { Wrapper, Gradient, media, styled, ms } from "../../styles";
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
