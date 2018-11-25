import React from "react";
import { styled, colors } from "styles";

const Wrap = styled.div`
  .burger-menu,
  .burger-menu.open {
    cursor: pointer;
    padding: 10px;
  }

  .burger-menu .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    background-color: blue;
    margin: 4px 0;
    transition: 0.4s;
  }

  .open {
    .burger-menu .bar1,
    .bar2,
    .bar3 {
      background-color: ${colors.orange};
    }
  }

  .burger-menu.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 4px);
    transform: rotate(-45deg) translate(-4px, 4px);
  }

  .burger-menu.open .bar2 {
    opacity: 0;
  }

  .burger-menu.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
  }
`;

export default ({ open, ...props }) => (
  <Wrap>
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  </Wrap>
);
