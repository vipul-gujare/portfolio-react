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
      textToDisplay: "Tim Hortons",
    },
    {
      title: "NPH Technologies",
      icon: <CloudIcon fill={Colors.ICON_BLUE} />,
      textToDisplay: "NPH Technologies",
    },
    {
      title: "Zeus Learning",
      icon: <CloudIcon fill={Colors.ICON_BLUE} />,
      textToDisplay: "Zeus Learning",
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
      textToDisplay: "PGD",
    },
    {
      title: "Bachelors of Engineering",
      icon: <CodeWindowIcon fill={Colors.ICON_PURPLE} />,
      textToDisplay: "BE",
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
  textToDisplay: `
Hi, I'm a Senior Software Engineer, and front-end development is my jam. 
  
I started my career in Mumbai, India, where I worked with a bunch of clients from the West. 
That experience led me to move to Canada during the pandemic, 
where I now work as a cross-platform mobile app developer for one of Canada's biggest coffee chains. 
    
I'm looking forward to connecting with you, so please feel free to reach out! 
    
When I'm not coding, you can find me riding my Onewheel. (If you ride one too, let's connect!)`,
};

export const Skills: IDropdownItem = {
  title: "Skills.json",
  icon: <JsonIcon fill={Colors.ICON_YELLOW} />,
  textToDisplay: `
  {
    "frontend": {
        "ReactJs": "Advanced",
        "JavaScript": "Advanced",
        "TypeScript": "Advanced",
    },
    "mobile-apps": {
        "React-Native": "Advanced",
        "Expo": "Advanced",
       "Expo-Native-Plugins": "Advanced",
    },
    "documentation": "Intermediate",
    "middleware": {
        "Java": "Intermediate",
        "NodeJS": "Beginner",
    },
    "backend": {
        "MySQL": "Intermediate",
        "MongoDB": "Beginner",
    }
}`,
};

export const DropdownItems = [
  { ...Work },
  { ...Education },
  { ...Resume },
  { ...About },
  { ...Skills },
];
