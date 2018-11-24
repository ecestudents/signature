//breakpoints
export { default as media } from "styled-media-query";
export { default as styled } from "styled-components";

//ece colors
const colors = {
  orange: "#e55625",
  blue: "#4887c7",
  black: "#303030"
};

export { colors };

export function ms(amount) {
  let scale = require("modular-scale")({
    ratio: "goldenSection",
    base: "16px"
  });

  return scale(amount, true) + "rem";
}

export { default as Wrapper } from "./_wrapper";
export { default as Gradient } from "./_gradient";
