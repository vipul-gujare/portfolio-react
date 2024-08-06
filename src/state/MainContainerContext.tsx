import { PropsWithChildren, createContext, useState } from "react";
import { About } from "../components/hamburger-menu/dropdown-items";

export interface IMainContainerContext {
  selectedText: string | undefined;
  setSelectedText: ReturnType<typeof useState<string>>[1];
}

export const MainContainerContext = createContext<IMainContainerContext>({
  selectedText: "",
  setSelectedText: () => {},
});

export const MainContainerProvider = ({ children }: PropsWithChildren) => {
  const [selectedText, setSelectedText] = useState<string | undefined>(
    About.textToDisplay
  );

  return (
    <MainContainerContext.Provider
      value={{
        selectedText,
        setSelectedText,
      }}
    >
      {children}
    </MainContainerContext.Provider>
  );
};
