import { styled, media } from "styles";

const Breakpoints = styled.div`
  margin-right: auto;
  margin-left: auto;

${media.greaterThan("small")`
    max-width: 540px; //ms
`}

${media.greaterThan("medium")`
    max-width: 720px;
`}

${media.greaterThan("large")`
    max-width: 1200px;
`};

`;

export default Breakpoints;
