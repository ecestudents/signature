import { parseToHsl, hsl } from "polished";

const Gradient = (color = "#e55625") => {
  let start = parseToHsl(color);
  let end = parseToHsl(color);

  start.hue += 12;
  start.saturation *= 1.25;
  start.lightness += 0.02;
  //console.log(start);

  /*
  normal H:15 S:79% L:52% A:1
  start H:27 S:100% L:54% A:1
  end H:16 S:78% L:52% A:1
   
  */

  console.log(start);

  return `
  background-color: ${color};
  background: linear-gradient(
    90deg,
    ${hsl(start)} 0,
    ${hsl(end)}
  );
`;
};

export default Gradient;
