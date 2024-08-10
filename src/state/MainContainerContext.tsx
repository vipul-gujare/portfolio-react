import { PropsWithChildren, createContext, useState } from "react";
import { Tab } from "../types";
import { useWindowDimensions } from "./useWindowDimensions";
import { MOBILE_VIEW_WIDTH } from "../constants";

const isMobileWidth = (width = window.innerWidth): boolean => {
  return width <= MOBILE_VIEW_WIDTH;
};

export interface IMainContainerContext {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
  isMobileView: boolean;
}

export const MainContainerContext = createContext<IMainContainerContext>({
  selectedTab: "ABOUT_ME.md",
  setSelectedTab: () => {},
  isMobileView: isMobileWidth(window.innerWidth),
});

export const MainContainerProvider = ({ children }: PropsWithChildren) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("ABOUT_ME.md");
  const { width } = useWindowDimensions();

  const isMobileView = isMobileWidth(width);

  return (
    <MainContainerContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        isMobileView,
      }}
    >
      {children}
    </MainContainerContext.Provider>
  );
};
