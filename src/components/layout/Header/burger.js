import React from "react";
import { styled, colors, ms } from "styles";

const Wrap = styled.div`
  .burger-menu {
    cursor: pointer;
    padding: 10px;
    margin: 0 ${ms(1)};
    &.open {
      display: inline-block;
      cursor: pointer;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      margin: ${ms(1)} 0 0 0;
      padding: 0;
      z-index: 9999;

      .bar1,
      .bar2,
      .bar3 {
        background-color: ${colors.orange};
        width: ${ms(3)};
      }
    }
    .bar1,
    .bar2,
    .bar3 {
      width: ${ms(1.5)};
      height: 3px;
      background-color: white;
      margin: 4px 0;
      transition: 0.2s;
    }
  }

  .burger-menu.open {
    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-4px, 4px);
      transform: rotate(-45deg) translate(-4px, 4px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      -webkit-transform: rotate(45deg) translate(-6px, -6px);
      transform: rotate(45deg) translate(-6px, -6px);
    }
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
