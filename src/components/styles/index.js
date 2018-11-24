export { default as media } from "styled-media-query";
export { default as styled } from "styled-components";
export { default as Wrapper } from "./_wrapper";
export { default as Gradient } from "./_gradient";

export function ms(amount) {
  let scale = require("modular-scale")({
    ratio: "goldenSection",
    base: "16px"
  });

  return scale(amount, true) + "rem";
}
