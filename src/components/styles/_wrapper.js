import React from "react";
import { styled, media, ms } from "./index";

const Breakpoints = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: ${ms(1)} 0;
  
  
${media.greaterThan("small")`
    max-width: 540px;
`}

${media.greaterThan("medium")`
    max-width: 720px;
`}

${media.greaterThan("large")`
    max-width: 1000px;
`};

`;

console.log(ms);
const Wrapper = ({ children }) => <Breakpoints>{children}</Breakpoints>;

export default Wrapper;
