"use client";

import { createContext, useContext, useEffect, useState } from "react";
import data from "@/data/data.json";
import { filterByVotes } from "@/helpers/capital";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

type AppContextType = {
  menu: boolean;
  sortParam: string;
  sideBar: boolean;
  filteredRequests: ProductRequest[];
  selectedStatus: string;
  title: string;
  details: string;
  category: string;
  handleFilter: (status: string) => any;
  handleMenu: () => void;
  handleParam: (param: string) => void;
  handleSideBar: () => void;
  setMenu: (menu: boolean) => void;
  setSortParam: (sortParam: string) => void;
  setSideBar: (sideBar: boolean) => void;
  mostComments: () => void;
  mostVotes: () => void;
  leastComments: () => void;
  leastVotes: () => void;
  getRequestById: (id: number) => ProductRequest | undefined;
  increaseUpvotes: (id: number) => void;
  handleAddRequest: (e: React.FormEvent<HTMLFormElement>) => void;
  setTitle: (title: string) => void;
  setDetails: (details: string) => void;
  setCategory: (category: string) => void;
};

export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: {
    content: string;
    replyingTo: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }[];
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
    filterByVotes(data.productRequests, "most")
  );
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const savedRequests = localStorage.getItem("productRequests");
    if (savedRequests) {
      const parsedRequests = JSON.parse(savedRequests);
      setFilteredRequests(filterByVotes(parsedRequests, "most"));
    } else {
      setFilteredRequests(filterByVotes(data.productRequests, "most"));
    }
  }, []);

  const handleAddRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRequest = {
      id: Math.floor(Math.random() * (1000000 - 13 + 1)) + 13,
      title,
      category,
      upvotes: 0,
      upvoted: false,
      status: "suggestion",
      description: details,
      comments: [],
    };

    const updatedRequests = [...filteredRequests, newRequest];

    localStorage.setItem("productRequests", JSON.stringify(updatedRequests));
    setFilteredRequests(filterByVotes(updatedRequests, "most"));

    setSelectedStatus("all");

    setTitle("");
    setCategory("");
    setDetails("");

    router.push("/");
    console.log(filteredRequests);
  };

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleParam = (param: string) => {
    setSortParam(param);
    setMenu((prevMenu) => !prevMenu);
  };

  const handleSideBar = () => {
    setSideBar((prevsideBar) => !prevsideBar);
  };

  const handleFilter = (status: string) => {
    setSelectedStatus(status);
    if (status === "all") {
      setFilteredRequests(data.productRequests);
    } else {
      setFilteredRequests(filterByStatus(data.productRequests, status));
    }
    setSideBar(false);
  };

  const handleFilterByComments = (order: "most" | "least") => {
    setFilteredRequests(filterByComments(data.productRequests, order));
  };

  const handleFilterByVotes = (order: "most" | "least") => {
    setFilteredRequests(filterByVotes(data.productRequests, order));
  };

  const filterByStatus = (
    requests: ProductRequest[],
    status: string
  ): ProductRequest[] => {
    return requests.filter((request) => request.category === status);
  };

  const filterByComments = (
    requests: ProductRequest[],
    order: "most" | "least"
  ): ProductRequest[] => {
    return [...requests].sort((a, b) => {
      return order === "most"
        ? b.comments.length - a.comments.length
        : a.comments.length - b.comments.length;
    });
  };

  const mostComments = () => {
    handleParam("Most Comments");
    handleFilterByComments("most");
  };

  const leastComments = () => {
    handleParam("Most Comments");
    handleFilterByComments("least");
  };

  const mostVotes = () => {
    handleParam("Most Upvotes");
    handleFilterByVotes("most");
  };
  const leastVotes = () => {
    handleParam("Least Upvotes");
    handleFilterByVotes("least");
  };

  const getRequestById = (id: number): ProductRequest | undefined => {
    return filteredRequests.find((request) => request.id === id);
  };

  const increaseUpvotes = (id: number) => {
    setFilteredRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id
          ? {
              ...request,
              upvotes: request.upvoted
                ? request.upvotes - 1
                : request.upvotes + 1,
              upvoted: !request.upvoted,
            }
          : request
      )
    );
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
        mostComments,
        leastComments,
        mostVotes,
        leastVotes,
        getRequestById,
        increaseUpvotes,
        title,
        details,
        category,
        handleAddRequest,
        setTitle,
        setDetails,
        setCategory,
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
