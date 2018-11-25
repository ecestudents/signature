import React from "react";
import { styled, colors, ms } from "styles";

const Menu = styled.div`
  a {
    color: ${colors.black};
    font-size: ${ms(2)};
    margin: ${ms(-2)} 0;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ close, children }) => <Menu>{children}</Menu>;
