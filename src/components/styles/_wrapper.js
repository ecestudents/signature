import React from "react";
import styled from "styled-components"; // You need this as well
import media from "styled-media-query";
import { modularScale } from "polished";

const Breakpoints = styled.div`
    padding: ${modularScale(2)};
    margin-right: auto;
    margin-left:  auto;
    
    ${media.greaterThan("small")`
        max-width: 540px;
    `}
  
    ${media.greaterThan("medium")`
        max-width: 720px;
    `}
  
  ${media.greaterThan("large")`
        max-width: 1000px;
    `}
`;

const Wrapper = ({ children }) => <Breakpoints>{children}</Breakpoints>;

export default Wrapper;
