import {
  HamburgerMenu,
  ICON_CONTAINER_WIDTH,
} from "./components/hamburger-menu/HamburgerMenu";
import { MainContainer } from "./components/MainContainer";
import { Terminal } from "./components/Terminal";
import { Colors } from "./constants";
import { MainContainerProvider } from "./state/MainContainerContext";

export const Home = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.DARK,
        flex: 1,
        color: Colors.TEXT_LIGHT_ACTIVE,
        width: "100%",
      }}
    >
      <MainContainerProvider>
        <HamburgerMenu />
        <div
          style={{
            flexDirection: "column",
            flex: 1,
            maxWidth: `calc(100% - ${ICON_CONTAINER_WIDTH})`,
          }}
        >
          <MainContainer />
          <Terminal />
        </div>
      </MainContainerProvider>
    </div>
  );
};
