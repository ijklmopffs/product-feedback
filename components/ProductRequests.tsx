"use client";

import Image from "next/image";
import { capitalizeFirstLetter } from "@/helpers/capital";
import { Button } from "./ui/button";
import Link from "next/link";
import { useProvider } from "@/context/FullProvider";

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
  commentIcon: string;
  comments: Comment[];
}

export default function ProductRequests({
  title,
  category,
  upvotes,
  description,
  comments,
  commentIcon,
  id,
  upvoted,
}: ProductRequest) {
  const { increaseUpvotes } = useProvider();

  return (
    <div className="w-11/12 md:w-auto mx-auto md:mx-0 bg-white rounded-md flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between p-6 mb-4">
      <div className="flex gap-8">
        <Button
          className={`hidden md:flex items-center flex-col gap-1 ${
            upvoted ? "bg-blue" : "bg-darkWhite"
          }  rounded-md h-fit p-4`}
          onClick={() => increaseUpvotes(id)}
        >
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke={`${upvoted ? "#FFF" : "#4661E6"}  `}
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>

          <p
            className={`font-bold text-xs ${
              upvoted ? "text-white" : "text-darkerGrey"
            } text-darkerGrey`}
          >
            {upvotes}
          </p>
        </Button>
        <div>
          <h1 className="font-bold text-xs md:text-lg text-darkerGrey">
            {title}
          </h1>
          <p className="text-lightGrey text-xs md:text-base">{description}</p>
          <p className="rounded-lg py-2 px-4 font-semibold text-blue bg-darkWhite text-sm w-fit mt-3">
            {capitalizeFirstLetter(category)}
          </p>
        </div>
      </div>
      <Link
        href={`/feedback-detail/${id}`}
        className="hidden md:flex items-center gap-2"
      >
        <Image src={commentIcon} alt="" />
        <p className="font-bold text-darkerGrey">{comments.length}</p>
      </Link>

      <div className="md:hidden flex items-center justify-between w-full">
        <Button
          className={`flex items-center gap-1 ${
            upvoted ? "bg-blue" : "bg-darkWhite"
          }  rounded-md h-fit p-4`}
          onClick={() => increaseUpvotes(id)}
        >
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke={`${upvoted ? "#FFF" : "#4661E6"}  `}
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <p
            className={`font-bold text-xs ${
              upvoted ? "text-white" : "text-darkerGrey"
            } text-darkerGrey`}
          >
            {upvotes}
          </p>
        </Button>
        <Link
          href={`/feedback-detail/${id}`}
          className="flex items-center gap-2"
        >
          <Image src={commentIcon} alt="" />
          <p className="font-bold text-darkerGrey">{comments.length}</p>
        </Link>
      </div>
    </div>
  );
}
