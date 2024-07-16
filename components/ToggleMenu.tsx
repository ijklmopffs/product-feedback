"use client";

import { useProvider } from "@/context/FullProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function ToggleMenu() {
  const {
    menu,
    handleMenu,
    handleParam,
    mostComments,
    leastComments,
    mostVotes,
    leastVotes,
  } = useProvider();

  return (
    <>
      <button onClick={handleMenu}>
        <motion.svg
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: menu ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {menu ? (
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 bg-white border-2 rounded-md text-start items-start w-72 absolute top-16 shadow-2xl text-lightGrey font-normal"
          >
            <button
              className="px-3 py-1 hover:text-purple"
              onClick={() => mostVotes()}
            >
              Most Upvotes
            </button>
            <div className="bg-[#979797]/30 w-full h-[.5px]" />
            <button
              className="px-3 py-1 hover:text-purple"
              onClick={() => leastVotes()}
            >
              Least Upvotes
            </button>
            <div className="bg-[#979797]/30 w-full h-[.5px]" />
            <button
              className="px-3 py-1 hover:text-purple"
              onClick={() => mostComments()}
            >
              Most Comments
            </button>
            <div className="bg-[#979797]/30 w-full h-[.5px]" />
            <button
              className="px-3 py-1 hover:text-purple"
              onClick={() => leastComments()}
            >
              Least Comments
            </button>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  );
}
