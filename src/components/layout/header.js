import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Wrapper, Gradient } from "../styles";

const Container = styled.div`
  color: white;
  ${Gradient()}
`;

class Header extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <div>This is the header</div>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
