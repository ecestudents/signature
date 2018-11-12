import React from "react";
import { Link } from "gatsby";

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
    return "Header!!!";
  }
}

export default Header;
