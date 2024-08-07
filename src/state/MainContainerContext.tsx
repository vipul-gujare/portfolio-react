import { PropsWithChildren, createContext, useState } from "react";
import { Tab } from "../types";

export interface IMainContainerContext {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
}

export const MainContainerContext = createContext<IMainContainerContext>({
  selectedTab: "ABOUT_ME.md",
  setSelectedTab: () => {},
});

export const MainContainerProvider = ({ children }: PropsWithChildren) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("ABOUT_ME.md");

  return (
    <MainContainerContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </MainContainerContext.Provider>
  );
};
