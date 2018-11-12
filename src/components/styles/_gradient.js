import { lighten, darken } from "polished";

const Gradient = (color = "#e55625") => `
  background-color: ${color};
  background: linear-gradient(
    90deg,
    ${lighten(0.04, color)} 0,
    ${darken(0.06, color)}
  );
`;

export default Gradient;
