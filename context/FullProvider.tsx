"use client";

import { createContext, useContext, useState } from "react";
import data from "@/data/data.json";

type AppContextType = {
  menu: boolean;
  sortParam: string;
  sideBar: boolean;
  filteredRequests: ProductRequest[];
  selectedStatus: string;
  handleFilter: (status: string) => any;
  handleMenu: () => void;
  handleParam: (param: string) => void;
  handleSideBar: () => void;
  setMenu: (menu: boolean) => void;
  setSortParam: (sortParam: string) => void;
  setSideBar: (sideBar: boolean) => void;
};

export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments: Comment[];
}

export interface Data {
  currentUser: {
    image: string;
    name: string;
    username: string;
  };
  productRequests: ProductRequest[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [menu, setMenu] = useState(false);
  const [sortParam, setSortParam] = useState("Most Upvotes");
  const [sideBar, setSideBar] = useState(false);
  const [filteredRequests, setFilteredRequests] = useState<ProductRequest[]>(
    data.productRequests
  );
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

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

  const handleFilter = (status: string) => {
    setSelectedStatus(status);
    if (status === "all") {
      setFilteredRequests(data.productRequests);
    } else {
      setFilteredRequests(filterByStatus(data.productRequests, status));
    }
  };

  const filterByStatus = (
    requests: ProductRequest[],
    status: string
  ): ProductRequest[] => {
    return requests.filter((request) => request.category === status);
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
        filteredRequests,
        handleFilter,
        selectedStatus,
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
