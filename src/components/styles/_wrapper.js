import { styled, media, ms } from "styles";

const Breakpoints = styled.div`
   margin-right: auto;
  margin-left: auto;
    max-width: 95%;

${media.greaterThan("small")`
    max-width: 80%; //ms
    padding: 0 ${ms(1)};
   
`}

${media.greaterThan("medium")`
    max-width: 70%;
`}

${media.greaterThan("large")`
    max-width: 60%;
`};

`;

export default Breakpoints;
