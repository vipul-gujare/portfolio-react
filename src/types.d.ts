import { Colors } from "./constants";

export type ColorValues = (typeof Colors)[keyof typeof Colors];

export type IconProps = { fill: ColorValues };
