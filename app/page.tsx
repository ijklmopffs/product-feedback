import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import suggestionIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import plusIcon from "@/public/assets/shared/icon-plus.svg";
import arrowDownIcon from "@/public/assets/shared/icon-arrow-down.svg";
import arrowUpIcon from "@/public/assets/shared/icon-arrow-up.svg";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex p-20 gap-8 h-screen">
      <section className="flex flex-col justify-between h-[38rem]">
        <div className="bg-gradient-to-r from-blue via-purple to-orangeShade rounded-md w-72 h-40 p-3 flex">
          <div className="flex flex-col gap-1 justify-end">
            <h2 className="font-bold text-white text-xl">Frontend Mentor</h2>
            <h3 className="text-sm font-medium text-white">Feedback Board</h3>
          </div>
        </div>

        <div className="bg-white w-72 h-48 rounded-md p-6 flex flex-wrap gap-3">
          <Button className="rounded-lg px-6 font-semibold text-white bg-blue text-xs">
            All
          </Button>
          <Button className="rounded-lg px-6 font-semibold text-blue bg-darkWhite text-xs">
            UI
          </Button>
          <Button className="rounded-lg px-6 font-semibold text-blue bg-darkWhite text-xs">
            UX
          </Button>
          <Button className="rounded-lg px-6 font-semibold text-blue bg-darkWhite text-xs">
            Enhancement
          </Button>
          <Button className="rounded-lg px-6 font-semibold text-blue bg-darkWhite text-xs">
            Bug
          </Button>
          <Button className="rounded-lg px-6 font-semibold text-blue bg-darkWhite text-xs">
            Feature
          </Button>
        </div>

        <div className="bg-white w-72 h-48 rounded-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-darkerGrey font-bold text-lg">Roadmap</h2>
            <Link
              href="/"
              className="text-blue underline font-semibold text-xs"
            >
              View
            </Link>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-orangeShade w-2 h-2 rounded-full"></div>
                <p className="text-lightGrey">Planned</p>
              </div>
              <p className="text-lightGrey font-bold">2</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-purple w-2 h-2 rounded-full"></div>
                <p className="text-lightGrey">In-Progress</p>
              </div>
              <p className="text-lightGrey font-bold">3</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-lightBlue w-2 h-2 rounded-full"></div>
                <p className="text-lightGrey">Live</p>
              </div>
              <p className="text-lightGrey font-bold">1</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-darkGrey w-[50rem] p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4 text-white font-bold text-lg">
              <Image src={suggestionIcon} alt="feedback" />
              <p>6 suggestions</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-darkWhite text-sm">Sort by:</p>
              <p className="text-white text-sm">Most Upvotes</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Image src={arrowDownIcon} alt="" />
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <p>Most Upvotes</p>
                  <hr />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="p-6 bg-purple flex items-center gap-2 font-bold text-sm rounded-xl">
            <Image src={plusIcon} alt="" />
            Add Feedback
          </Button>
        </div>
      </section>
    </main>
  );
}
