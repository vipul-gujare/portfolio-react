import { Colors } from "../../constants";
import { Dropdown } from "./Dropdown";
import { IDropdownItem } from "./DropdownItem";
import { CloudIcon } from "./assets/CloudIcon";
import { ExplorerIcon } from "./assets/ExplorerIcon";
import { InfoIcon } from "./assets/InfoIcon";
import { MobileIcon } from "./assets/MobileIcon";
import { FilePdfIcon } from "./assets/FilePdfIcon";
import { CodeWindowIcon } from "./assets/CodeWindowIcon";
import { JsonIcon } from "./assets/JsonIcon";
import { useMainContainerContext } from "../../state/useMainContainerContext";
import ResumePdf from "../../assets/Vipul_Gujare_Resume.pdf";
import { useState } from "react";
import { GitHubIcon } from "./assets/GitHubIcon";
import { callIfEnterOrSpace, openInNewTab } from "../../utils";
import { EmailIcon } from "./assets/EmailIcon";

const Work: IDropdownItem = {
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

const Education: IDropdownItem = {
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

const Resume: IDropdownItem = {
  title: "Resume.pdf",
  icon: <FilePdfIcon fill={Colors.ICON_RED} />,
  onPress: () => {
    openInNewTab(ResumePdf);
  },
};

const About: IDropdownItem = {
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

const Skills: IDropdownItem = {
  title: "Skills.json",
  icon: <JsonIcon fill={Colors.ICON_YELLOW} />,
  textToDisplay: `{
    "frontend": {
      "ReactNative": "Advanced",
      "ReactJs": "Advanced",
      "Expo": "Advanced",
      "TypeScript/JavaScript": "Advanced",
    },
    "backend": {
      "MySQL": "Intermediate",
      "MongoDB": "Beginner",
    }
}`,
};

const items = [
  { ...Work },
  { ...Education },
  { ...Resume },
  { ...About },
  { ...Skills },
];

interface HamburgerIcon {
  icon: JSX.Element;
  label: string;
  onPress?: () => void;
  isActive?: boolean;
}
const hamburgerIcons: HamburgerIcon[] = [
  {
    icon: <ExplorerIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
    label: "Explore",
    isActive: true,
  },
  {
    icon: <GitHubIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
    label: "GitHub",
    onPress: () => {
      openInNewTab("https://github.com/vipul-gujare");
    },
  },
  {
    icon: <EmailIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
    label: "Email",
    onPress: () => {
      openInNewTab("mailto:vipulgujare@gmail.com");
    },
  },
];

export const HamburgerMenu = () => {
  const { setSelectedText } = useMainContainerContext();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      style={{
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "static",
          height: "100vh",
          border: `1px solid ${Colors.BORDER_LIGHT}`,
        }}
      >
        {hamburgerIcons.map(({ icon, label, onPress, isActive }) => {
          const handlePress = onPress
            ? onPress
            : () => setIsOpen((prev) => !prev);
          return (
            <div
              style={{
                ...(isActive && { borderLeft: `2px solid ${Colors.ACCENT}` }),
                padding: "0.5rem",
                cursor: "pointer",
              }}
              key={label}
              title={label}
              onClick={handlePress}
              onKeyUp={(event) => callIfEnterOrSpace(event, handlePress)}
              tabIndex={0}
            >
              {icon}
            </div>
          );
        })}
      </div>
      {isOpen && (
        <div
          style={{
            borderWidth: "1px 1px 1px 0px",
            borderColor: Colors.BORDER_LIGHT,
            borderStyle: "solid",
            padding: "0.5rem",
            flexDirection: "column",
            width: "20vw",
          }}
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              padding: "0.5rem 0.2rem",
            }}
          >
            Explorer
          </div>
          <Dropdown
            items={[
              {
                title: "PORTFOLIO",
                initialIsOpen: true,
                items: items,
              },
            ]}
            onPress={setSelectedText}
          />
        </div>
      )}
    </div>
  );
};
