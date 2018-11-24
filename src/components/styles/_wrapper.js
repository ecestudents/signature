import React from "react";
import { styled, media, ms } from "styles";

const Breakpoints = styled.div`
  margin-right: auto;
  margin-left: auto;

${media.greaterThan("small")`
    max-width: 540px;
`}

${media.greaterThan("medium")`
    max-width: 720px;
`}

${media.greaterThan("large")`
    max-width: 1200px;
`};

`;

export default Breakpoints;
