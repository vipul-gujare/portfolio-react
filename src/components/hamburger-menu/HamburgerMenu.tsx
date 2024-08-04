import { Colors } from "../../constants";
import { Dropdown } from "./Dropdown";
import { ExplorerIcon } from "./assets/ExplorerIcon";
import { InfoIcon } from "./assets/InfoIcon";

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
        }}
      >
        <div style={{ textTransform: "uppercase" }}>Explorer</div>
        <Dropdown
          items={[
            {
              title: "PORTFOLIO",
              initialIsOpen: true,
              items: [
                {
                  title: "About",
                  icon: <InfoIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
                },
                {
                  title: "Work",
                  items: [
                    {
                      title: "Tim Hortons",
                      icon: <InfoIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
                    },
                    {
                      title: "NPH Technologies",
                      icon: <InfoIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
                    },
                    {
                      title: "Zeus Learning",
                      icon: <InfoIcon fill={Colors.TEXT_LIGHT_ACTIVE} />,
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
