import { Tab } from "./types";

export const Colors = {
  DARK: "#181818",
  ACCENT: "#0078D4",
  ICON_BLUE: "#519ABA",
  ICON_RED: "#CC3E44",
  ICON_YELLOW: "#CBCB41",
  ICON_PURPLE: "#A074C4",
  BACKGROUND_LIGHT: "#1F1F1F",
  TEXT_LIGHT_ACTIVE: "#E6EDF3",
  TEXT_LIGHT_INACTIVE: "#868686",
  BORDER_LIGHT: "#262626",
} as const;

const AboutContent = `
Hi, I'm a Senior Software Engineer, and front-end development is my jam. 
  
I started my career in Mumbai, India, where I worked with a bunch of clients from the West. 
That experience led me to move to Canada during the pandemic, 
where I now work as a cross-platform mobile app developer for one of Canada's biggest coffee chains. 
    
I'm looking forward to connecting with you, so please feel free to reach out! 
    
When I'm not coding, you can find me riding my Onewheel. (If you ride one too, let's connect!)`;

const SkillsContent = `
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
    "backend": {
        "REST APIs": "Intermediate",
        "GraphQL": "Beginner",
        "MySQL": "Intermediate",
        "MongoDB": "Beginner",
    },
    "tools-and-practices": {
        "Unit Testing": "Advanced",
        "Code Documentation": "Advanced",
    },
    "middleware": {
      "Java": "Intermediate",
  },
}`;

export const TabContentMap = new Map<Tab, string>([
  ["ABOUT_ME.md", AboutContent],
  ["Skills.json", SkillsContent],
]);

export const MOBILE_VIEW_WIDTH = 980;
