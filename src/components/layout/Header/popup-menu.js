import React from "react";
import { styled } from "styles";

const Menu = styled.div`
  a {
    color: black;
  }
`;

export default ({ close, children }) => <Menu>{children}</Menu>;
