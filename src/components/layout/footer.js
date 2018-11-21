import React from "react";
import { Wrapper, Gradient } from "../styles";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container gradient={this.props.gradient}>
        <Wrapper>
          <div>
            This is the inner wrapper
            <br />
            <br />
            <br />
            <br />
            <br />
            lalallalalalal lekker wrappen
          </div>
        </Wrapper>
      </Container>
    );
  }
}

export default Footer;
