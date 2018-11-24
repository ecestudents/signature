import React from "react";
import { Link } from "gatsby";
import { styled, Wrapper, Gradient } from "styles";

const Container = styled.div`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <Container gradient={this.props.gradient}>
        <Wrapper>
          <Link to="/"> Home</Link>
          <Link to="/signature"> Signature</Link>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
