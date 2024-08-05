import { PropsWithChildren, createContext, useState } from "react";

export interface IMainContainerContext {
  selectedText: string | undefined;
  setSelectedText: ReturnType<typeof useState<string>>[1];
}

export const MainContainerContext = createContext<IMainContainerContext>({
  selectedText: "",
  setSelectedText: () => {},
});

export const MainContainerProvider = ({ children }: PropsWithChildren) => {
  const [selectedText, setSelectedText] = useState<string>();

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
