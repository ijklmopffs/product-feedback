import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.5,
        }}
        className="bg-darkerWhite absolute z-10 top-[57px] right-0 p-10 shadow-2xl space-y-5"
        style={{ height: "calc(100vh - 57px)" }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
