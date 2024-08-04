import { Colors } from "../../constants";
import { ExplorerIcon } from "./explorer-icon";

export const HamburgerMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "static",
        height: "100vh",
        width: "1rem",
        border: `1px solid ${Colors.BORDER_LIGHT}`,
        padding: "0.5rem",
      }}
    >
      <ExplorerIcon fill={Colors.TEXT_LIGHT_ACTIVE} />
    </div>
  );
};
