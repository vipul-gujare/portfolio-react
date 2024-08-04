import { HamburgerMenu } from "./components/hamburger-menu/HamburgerMenu";
import { MainContainer } from "./components/MainContainer";
import { Terminal } from "./components/Terminal";
import { Colors } from "./constants";

export const Home = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.DARK,
        display: "flex",
        flex: 1,
      }}
    >
      <HamburgerMenu />
      <MainContainer />
      <Terminal />
    </div>
  );
};
