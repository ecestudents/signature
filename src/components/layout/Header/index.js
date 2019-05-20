import React from "react";
import { Link } from "gatsby";
import { ms, styled, Wrapper, Gradient, colors, media } from "styles";
import Popup from "reactjs-popup";
import BurgerIcon from "./burger";
import PopupMenu from "./popup-menu";
import logo from "../logo_white.png";

const Container = styled.div`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
  box-shadow: 0 0 3px 0 ${colors.black};
  padding: ${ms(-1)} 0;
`;

const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
  }

  nav {
    text-transform: uppercase;
    font-size: ${ms(0.25)};
    font-weight: 300;
    font-family: MuseoSans;

    a {
      margin: 0 ${ms(-1)};
    }
  }

  ${media.lessThan("medium")`
    img{
      width: 100px;  
      
    }
    
    nav {
      display: none;
    }
    `}

  ${media.greaterThan("medium")`
      .burger-menu {display: none}
    `}
`;

const links = [
  { label: "Home", path: "/" },
  { label: "events", path: "/events" },
  {
    label: "RockBoost",
    path: "https://ecestudents.typeform.com/to/FKKvwX"
  }
];

const Links = () =>
  links.map((item, i) => {
    if (item.path.startsWith("/"))
      return (
        <Link to={item.path} key={i}>
          {" "}
          {item.label}
        </Link>
      );
    else
      return (
        <a key={i} href={item.path} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      );
  });

class Header extends React.Component {
  render() {
    return (
      <Container gradient={this.props.gradient}>
        <Content>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Content>
      </Container>
    );
  }
}

export default Header;
