import { Colors } from "../../constants";
import { Dropdown } from "./Dropdown";
import { IDropdownItem } from "./DropdownItem";
import { CloudIcon } from "./assets/CloudIcon";
import { ExplorerIcon } from "./assets/ExplorerIcon";
import { InfoIcon } from "./assets/InfoIcon";
import { MobileIcon } from "./assets/MobileIcon";

const Work: IDropdownItem = {
  title: "Work",
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

export const HamburgerMenu = () => {
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
          width: "15vw",
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
              items: [
                {
                  title: "About Me",
                  icon: <InfoIcon fill={Colors.ICON_BLUE} />,
                },
                { ...Work },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
