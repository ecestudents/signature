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
  { label: "Signature", path: "/signature" },
  {
    label: "Startup 24",
    path: "https://startup24.gribb.io/event/startup-24-rotterdam-1"
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

// const contentStyle = {
//   background: "rgba(255,255,255,0)",
//   width: "80%",
//   border: "none"
// };

class Header extends React.Component {
  render() {
    return (
      <Container gradient={this.props.gradient}>
        <Content>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={{
              background: "#ffffff00",
              width: "80%",
              border: "none",
              marginTop: ms(4)
            }}
            closeOnDocumentClick={true}
            trigger={open => (
              <BurgerIcon gradient={this.props.gradient} open={open} />
            )}
          >
            {close => (
              <PopupMenu close={close}>
                <Links />
              </PopupMenu>
            )}
          </Popup>
          <nav>
            <Links />
          </nav>
        </Content>
      </Container>
    );
  }
}

export default Header;
