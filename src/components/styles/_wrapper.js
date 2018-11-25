import { styled, media, ms } from "styles";

const Breakpoints = styled.div`
   margin-right: auto;
  margin-left: auto;
    max-width: 95%;

${media.greaterThan("small")`
    max-width: 540px; //ms
    padding: 0 ${ms(1)};
   
`}

${media.greaterThan("medium")`
    max-width: 720px;
`}

${media.greaterThan("large")`
    max-width: 1200px;
`};

`;

export default Breakpoints;
