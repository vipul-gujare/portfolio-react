import { HamburgerMenu } from "./components/hamburger-menu/HamburgerMenu";
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
      }}
    >
      <MainContainerProvider>
        <HamburgerMenu />
        <MainContainer />
      </MainContainerProvider>
      <Terminal />
    </div>
  );
};
