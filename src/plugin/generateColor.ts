import { hexToHSL } from "./hexToHSL";

export function generateColor(
  from: number,
  to: number,
  value: number,
  color: string
) {
  const colorHSL = hexToHSL(color);
  const difference = to - from;
  const percentage = 100 - ((value - from) / difference) * 100;
  return `hsl(${colorHSL.h},${colorHSL.s}%,${
    percentage < 20 ? 20 : percentage
  }%)`;
}
