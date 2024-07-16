"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import suggestionIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import plusIcon from "@/public/assets/shared/icon-plus.svg";
import ToggleMenu from "./ToggleMenu";
import { useProvider } from "@/context/FullProvider";

export default function Navigation() {
  const { sortParam, filteredRequests } = useProvider();

  const suggestions = filteredRequests.length;

  return (
    <div className="bg-darkGrey md:w-auto lg:w-[70rem] p-4 md:rounded-lg flex items-center justify-between relative">
      <div className="flex items-center gap-12">
        <div className="hidden md:flex items-center gap-4 text-white font-bold text-lg">
          <Image src={suggestionIcon} alt="feedback" />
          <p>{suggestions} suggestions</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-darkWhite text-sm">Sort by:</p>
          <p className="text-white text-sm">{sortParam}</p>
          <ToggleMenu />
        </div>
      </div>
      <Button className="p-6 bg-purple flex items-center gap-2 font-bold text-sm rounded-xl">
        <Image src={plusIcon} alt="" />
        Add Feedback
      </Button>
    </div>
  );
}
