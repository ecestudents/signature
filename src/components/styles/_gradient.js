import { parseToHsl, hsl } from "polished";
import { colors } from "styles";

const Gradient = (color = colors.orange) => {
  let start = parseToHsl(color);
  let end = parseToHsl(color);

  start.hue += 12;
  start.saturation *= 1.25;
  start.lightness += 0.02;

  end.hue += 1;
  end.saturation *= 1.01;

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
