import { Colors } from "../../constants";
import { Dropdown } from "./Dropdown";

import { ExplorerIcon } from "./assets/ExplorerIcon";

import { useMainContainerContext } from "../../state/useMainContainerContext";

import { useState } from "react";
import { GitHubIcon } from "./assets/GitHubIcon";
import { callIfEnterOrSpace, openInNewTab } from "../../utils";
import { EmailIcon } from "./assets/EmailIcon";
import { DropdownItems } from "./dropdown-items";

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

const ICON_CONTAINER_WIDTH = "2.5rem";

export const HamburgerMenu = () => {
  const { setSelectedTab, isMobileView } = useMainContainerContext();
  const [isOpen, setIsOpen] = useState<boolean>(!isMobileView);

  return (
    <div
      style={{
        flexDirection: "row",
        position: "relative",
        backgroundColor: Colors.DARK,
        height: "100vh",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "static",
          border: `1px solid ${Colors.BORDER_LIGHT}`,
          width: ICON_CONTAINER_WIDTH,
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
            flex: 1,
            minWidth: "15rem",
            backgroundColor: Colors.DARK,
            height: "100%",
            ...(isMobileView && {
              position: "absolute",
              left: ICON_CONTAINER_WIDTH,
            }),
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
                items: DropdownItems,
              },
            ]}
            onPress={(tab) => {
              if (tab) {
                setSelectedTab(tab);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
