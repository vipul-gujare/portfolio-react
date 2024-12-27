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

const TimHortonsContent = `
Here at Tims, I had the opportunity to work with a diverse group of talented individuals. 

One of the hardest challenges was leading the full refactor of the Roll Up To Win campaign codebase, 
mentoring two developers along the way.

Set up monitoring and logging for the app, reducing major incidents from three per month to zero.

We built an abstraction layer, cutting the time-to-market for critical services from 1.5 months to 4 days.

Throughout the process, we were very determined about documenting unit testing practices, 
streamlining onboarding for new developers and improving code quality.
`;

const NphContent = `
This was an interesting opportunity where I got to work with a startup as one of the founding engineers.

We built a COVID help app and deployed it across multiple hospitals in the UK.

Managed internationalization and localization setup across all platforms for seamless global deployment.`;

const ZeusContent = `
Zeus eLearning will always have a special place in my heart as it was my first ever job fresh out of the college!

I Handled full stack implementation of a US based platform that serves eLearning solutions to hundreds of counties nationwide. 

On another project, we implemented fully custom design system components written in vanilla JavaScript from scratch
with zero dependencies that handled complex operations like sorting.

My tenure with Zeus also allowed me the freedom to start a mobile application development department in the organization,
working along side the C-suite members from different countries.
`;

export const TabContentMap = new Map<Tab, string>([
  ["ABOUT_ME.md", AboutContent],
  ["Skills.json", SkillsContent],
  ["Tim Hortons", TimHortonsContent],
  ["NPH Technologies", NphContent],
  ["Zeus Learning", ZeusContent],
]);

export const MOBILE_VIEW_WIDTH = 600;
