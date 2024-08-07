import { openInNewTab } from "../../utils";
import { IDropdownItem } from "./DropdownItem";

import { CloudIcon } from "./assets/CloudIcon";
import { InfoIcon } from "./assets/InfoIcon";
import { MobileIcon } from "./assets/MobileIcon";
import { FilePdfIcon } from "./assets/FilePdfIcon";
import { CodeWindowIcon } from "./assets/CodeWindowIcon";
import { JsonIcon } from "./assets/JsonIcon";
import ResumePdf from "../../assets/Vipul_Gujare_Resume.pdf";
import { Colors } from "../../constants";

export const Work: IDropdownItem = {
  title: "Work",
  initialIsOpen: true,
  items: [
    {
      title: "Tim Hortons",
      icon: <MobileIcon fill={Colors.ICON_BLUE} />,
    },
    {
      title: "NPH Technologies",
      icon: <CloudIcon fill={Colors.ICON_BLUE} />,
    },
    {
      title: "Zeus Learning",
      icon: <CloudIcon fill={Colors.ICON_BLUE} />,
    },
  ],
};

export const Education: IDropdownItem = {
  title: "Education",
  initialIsOpen: true,
  items: [
    {
      title: "Post Graduate Diploma",
      icon: <CodeWindowIcon fill={Colors.ICON_PURPLE} />,
    },
    {
      title: "Bachelors of Engineering",
      icon: <CodeWindowIcon fill={Colors.ICON_PURPLE} />,
    },
  ],
};

export const Resume: IDropdownItem = {
  title: "Resume.pdf",
  icon: <FilePdfIcon fill={Colors.ICON_RED} />,
  onPress: () => {
    openInNewTab(ResumePdf);
  },
};

export const About: IDropdownItem = {
  title: "ABOUT_ME.md",
  icon: <InfoIcon fill={Colors.ICON_BLUE} />,
};

export const Skills: IDropdownItem = {
  title: "Skills.json",
  icon: <JsonIcon fill={Colors.ICON_YELLOW} />,
};

export const DropdownItems = [
  { ...Work },
  { ...Education },
  { ...Resume },
  { ...About },
  { ...Skills },
];
