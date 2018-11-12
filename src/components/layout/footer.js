import React from "react";
import { Wrapper, Gradient } from "../styles";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  ${Gradient()}
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
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
