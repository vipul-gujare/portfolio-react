import { Colors } from "./constants";

export type ColorValues = (typeof Colors)[keyof typeof Colors];

export type IconProps = { fill: ColorValues };

export type Tab =
  | "PORTFOLIO"
  | "ABOUT_ME.md"
  | "Resume.pdf"
  | "Skills.json"
  | "Post Graduate Diploma"
  | "Bachelors of Engineering"
  | "Tim Hortons"
  | "NPH Technologies"
  | "Zeus Learning"
  | "Work"
  | "Education";
