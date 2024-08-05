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
  textToDisplay: "Resume",
};

const About: IDropdownItem = {
  title: "ABOUT_ME.md",
  icon: <InfoIcon fill={Colors.ICON_BLUE} />,
  textToDisplay: `
  
  About Me
  `,
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

export const HamburgerMenu = () => {
  const { setSelectedText } = useMainContainerContext();
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
        <div
          style={{
            borderLeft: `2px solid ${Colors.ACCENT}`,
            padding: "0.5rem",
          }}
        >
          <ExplorerIcon fill={Colors.TEXT_LIGHT_ACTIVE} />
        </div>
      </div>
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
    </div>
  );
};
