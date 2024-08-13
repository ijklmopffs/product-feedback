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
import ProductRequests from "@/components/ProductRequests";
import EmptySuggestion from "@/components/EmptySuggestion";

export default function Home() {
  const {
    sideBar,
    handleSideBar,
    filteredRequests,
    handleFilter,
    selectedStatus,
  } = useProvider();

  let requests;

  if (filteredRequests.length === 0) {
    requests = <EmptySuggestion />;
  } else {
    requests = filteredRequests.map((request) => (
      <ProductRequests
        id={request.id}
        key={request.id}
        title={request.title}
        category={request.category}
        upvotes={request.upvotes}
        upvoted={request.upvoted}
        status={request.status}
        description={request.description}
        comments={request.comments}
        commentIcon={commentIcon}
      />
    ));
  }

  return (
    <main className="md:max-w-[94%] lg:max-w-[100rem] mx-auto flex flex-col lg:flex-row md:p-20 md:gap-8 md:h-screen">
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
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "all"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            }  text-xs`}
            onClick={() => handleFilter("all")}
          >
            All
          </Button>
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "ui"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            }  text-xs`}
            onClick={() => handleFilter("ui")}
          >
            UI
          </Button>
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "ux"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            } text-xs`}
            onClick={() => handleFilter("ux")}
          >
            UX
          </Button>
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "enhancement"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            } text-xs`}
            onClick={() => handleFilter("enhancement")}
          >
            Enhancement
          </Button>
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "bug"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            } text-xs`}
            onClick={() => handleFilter("bug")}
          >
            Bug
          </Button>
          <Button
            className={`rounded-lg px-6 font-semibold ${
              selectedStatus === "feature"
                ? "text-white bg-blue"
                : "text-blue bg-darkWhite"
            } text-xs`}
            onClick={() => handleFilter("feature")}
          >
            Feature
          </Button>
        </div>

        <div className="bg-white w-72 h-48 rounded-md p-6 hidden md:block">
          <div className="flex items-center justify-between">
            <h2 className="text-darkerGrey font-bold text-lg">Roadmap</h2>
            <Link
              href="/roadmap"
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

        <div className="mt-10">{requests}</div>
      </section>
    </main>
  );
}
