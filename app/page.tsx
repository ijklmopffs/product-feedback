"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useProvider } from "@/context/FullProvider";
import Navigation from "@/components/Navigation";
import hamburgerIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "@/public/assets/shared/mobile/icon-close.svg";
import Sidebar from "@/components/Sidebar";
import commentIcon from "@/public/assets/shared/icon-comments.svg";
import arrowIcon from "@/public/assets/shared/icon-arrow-up.svg";

export default function Home() {
  const { sideBar, handleSideBar, data } = useProvider();

  return (
    <main className="md:max-w-[94%] lg:max-w-[90%] mx-auto flex flex-col lg:flex-row md:p-20 md:gap-8 md:h-screen">
      <section className="flex md:flex-row lg:flex-col justify-between md:gap-2 lg:gap-0 md:h-fit lg:h-[38rem]">
        <div className="bg-gradient-to-r from-blue via-purple to-orangeShade w-screen md:rounded-md md:w-60 lg:w-72 md:h-48 lg:h-40 p-3 flex justify-between items-center">
          <div className="flex flex-col gap-1 justify-end">
            <h2 className="font-bold text-white text-xl">Frontend Mentor</h2>
            <h3 className="text-sm font-medium text-white">Feedback Board</h3>
          </div>
          <button className="md:hidden" onClick={handleSideBar}>
            <Image src={sideBar ? closeIcon : hamburgerIcon} alt="" />
          </button>
        </div>
        <AnimatePresence>
          {sideBar && (
            <>
              <motion.div
                className="absolute top-[57px] inset-0 bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <Sidebar />
            </>
          )}
        </AnimatePresence>

        <div className="bg-white w-72 h-48 rounded-md p-6 hidden md:flex flex-wrap gap-3">
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

        <div className="bg-white w-72 h-48 rounded-md p-6 hidden md:block">
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
        <Navigation />

        <div className="mt-10">
          <div className="bg-white rounded-md flex items-center justify-between p-6">
            <div className="flex gap-8">
              <div className="flex items-center flex-col gap-1 bg-darkWhite rounded-md h-fit p-4">
                <Image src={arrowIcon} alt="" />
                <p className="font-bold text-xs text-darkerGrey">
                  {data.productRequests[0].upvotes}
                </p>
              </div>
              <div>
                <h1>{data.productRequests[0].title}</h1>
                <p>{data.productRequests[0].description}</p>
                <p>{data.productRequests[0].category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src={commentIcon} alt="" />
              <p>{data.productRequests[0].comments.length}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
