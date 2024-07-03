"use client";

import { createContext, useContext, useState } from "react";

type AppContextType = {
  menu: boolean;
  sortParam: string;
  sideBar: boolean;
  handleMenu: () => void;
  handleParam: (param: string) => void;
  handleSideBar: () => void;
  setMenu: (menu: boolean) => void;
  setSortParam: (sortParam: string) => void;
  setSideBar: (sideBar: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [menu, setMenu] = useState(false);
  const [sortParam, setSortParam] = useState("Most Upvotes");
  const [sideBar, setSideBar] = useState(false);

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleParam = (param: string) => {
    setSortParam(param);
    setMenu((prevMenu) => !prevMenu);
  };

  const handleSideBar = () => {
    setSideBar((prevsideBar) => !prevsideBar);
    console.log("works");
  };

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        handleMenu,
        sortParam,
        setSortParam,
        handleParam,
        sideBar,
        setSideBar,
        handleSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useCounter must be used within an AppProvider");
  }
  return context;
};
