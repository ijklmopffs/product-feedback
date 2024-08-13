"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import backIcon from "@/public/assets/shared/icon-arrow-left.svg";
import plusIcon from "@/public/assets/shared/icon-plus.svg";
import ProductRequests from "@/components/ProductRequests";
import { useProvider } from "@/context/FullProvider";
import commentIcon from "@/public/assets/shared/icon-comments.svg";
import { capitalizeFirstLetter } from "@/helpers/capital";
import Link from "next/link";

export default function Roadmap() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const newFeedback = () => {
    router.push("/new-feedback");
  };

  const { filteredRequests, increaseUpvotes } = useProvider();

  const plannedRequests = filteredRequests.filter(
    (request) => request.status === "planned"
  );
  const progressRequests = filteredRequests.filter(
    (request) => request.status === "in-progress"
  );
  const liveRequests = filteredRequests.filter(
    (request) => request.status === "live"
  );

  return (
    <main className="max-w-7xl md:p-8 md:w-auto mx-auto flex flex-col gap-4 justify-center">
      <div className="bg-darkGrey md:w-auto lg:w-[76rem] p-4 md:rounded-lg flex items-center justify-between relative">
        <div className="flex flex-col items-center">
          <Button
            className="flex items-center gap-4 bg-transparent"
            onClick={handleBack}
          >
            <Image src={backIcon} alt="" />
            <p className="text-white font-bold text-sm">Go Back</p>
          </Button>
          <h1 className="text-white font-bold text-2xl ml-6">Roadmap</h1>
        </div>
        <Button
          onClick={newFeedback}
          className="p-6 bg-purple flex items-center gap-2 font-bold text-sm rounded-xl"
        >
          <Image src={plusIcon} alt="" />
          Add Feedback
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:justify-between">
        <div>
          <h2 className="font-bold text-lg text-darkerGrey">Planned (2)</h2>
          <p className="font-normal text-lightGrey">
            Ideas prioritized for research
          </p>

          <div className="w-11/12 md:w-72 lg:w-96 mt-5 mx-auto md:mx-0">
            {plannedRequests.length > 0 &&
              plannedRequests.map((request) => (
                <div
                  key={request.id}
                  className="w-11/12 md:w-auto mx-auto md:mx-0 border-t-orangeShade border-t-4 bg-white rounded-md flex flex-col items-start md:items-center gap-4 justify-between p-6 mb-4"
                >
                  <div className="flex gap-2 items-center self-start">
                    <div className="w-2 h-2 rounded-full bg-orangeShade" />
                    <p className="font-normal text-base text-darkerGrey">
                      {capitalizeFirstLetter(request.status)}
                    </p>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <h1 className="font-bold text-xs md:text-lg text-darkerGrey">
                        {request.title}
                      </h1>
                      <p className="text-lightGrey text-xs md:text-base">
                        {request.description}
                      </p>
                      <p className="rounded-lg py-2 px-4 font-semibold text-blue bg-darkWhite text-sm w-fit mt-3">
                        {capitalizeFirstLetter(request.category)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <Button
                      className={`flex items-center gap-1 ${
                        request.upvoted ? "bg-blue" : "bg-darkWhite"
                      }  rounded-md h-fit p-4`}
                      onClick={() => increaseUpvotes(request.id)}
                    >
                      <svg
                        width="10"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6l4-4 4 4"
                          stroke={`${request.upvoted ? "#FFF" : "#4661E6"}  `}
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p
                        className={`font-bold text-xs ${
                          request.upvoted ? "text-white" : "text-darkerGrey"
                        } text-darkerGrey`}
                      >
                        {request.upvotes}
                      </p>
                    </Button>
                    <Link
                      href={`/feedback-detail/${request.id}`}
                      className="flex items-center gap-2"
                    >
                      <Image src={commentIcon} alt="" />
                      <p className="font-bold text-darkerGrey">
                        {request.comments.length}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg text-darkerGrey">In-Progress (3)</h2>
          <p className="font-normal text-lightGrey">
            Currently being developed
          </p>

          <div className="w-11/12 md:w-72 lg:w-96 mt-5 mx-auto md:mx-0">
            {progressRequests.length > 0 &&
              progressRequests.map((request) => (
                <div
                  key={request.id}
                  className="w-11/12 md:w-auto mx-auto md:mx-0 border-t-purple border-t-4 bg-white rounded-md flex flex-col items-start md:items-center gap-4 justify-between p-6 mb-4"
                >
                  <div className="flex gap-2 items-center self-start">
                    <div className="w-2 h-2 rounded-full bg-purple" />
                    <p className="font-normal text-base text-darkerGrey">
                      {capitalizeFirstLetter(request.status)}
                    </p>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <h1 className="font-bold text-xs md:text-lg text-darkerGrey">
                        {request.title}
                      </h1>
                      <p className="text-lightGrey text-xs md:text-base">
                        {request.description}
                      </p>
                      <p className="rounded-lg py-2 px-4 font-semibold text-blue bg-darkWhite text-sm w-fit mt-3">
                        {capitalizeFirstLetter(request.category)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <Button
                      className={`flex items-center gap-1 ${
                        request.upvoted ? "bg-blue" : "bg-darkWhite"
                      }  rounded-md h-fit p-4`}
                      onClick={() => increaseUpvotes(request.id)}
                    >
                      <svg
                        width="10"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6l4-4 4 4"
                          stroke={`${request.upvoted ? "#FFF" : "#4661E6"}  `}
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p
                        className={`font-bold text-xs ${
                          request.upvoted ? "text-white" : "text-darkerGrey"
                        } text-darkerGrey`}
                      >
                        {request.upvotes}
                      </p>
                    </Button>
                    <Link
                      href={`/feedback-detail/${request.id}`}
                      className="flex items-center gap-2"
                    >
                      <Image src={commentIcon} alt="" />
                      <p className="font-bold text-darkerGrey">
                        {request.comments.length}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg text-darkerGrey">Live (1)</h2>
          <p className="font-normal text-lightGrey">Released features</p>

          <div className="w-11/12 md:w-72 lg:w-96 mt-5 mx-auto md:mx-0">
            {liveRequests.length > 0 &&
              liveRequests.map((request) => (
                <div
                  key={request.id}
                  className="w-11/12 md:w-auto mx-auto md:mx-0 border-t-lightBlue border-t-4 bg-white rounded-md flex flex-col items-start md:items-center gap-4 justify-between p-6 mb-4"
                >
                  <div className="flex gap-2 items-center self-start">
                    <div className="w-2 h-2 rounded-full bg-lightBlue" />
                    <p className="font-normal text-base text-darkerGrey">
                      {capitalizeFirstLetter(request.status)}
                    </p>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <h1 className="font-bold text-xs md:text-lg text-darkerGrey">
                        {request.title}
                      </h1>
                      <p className="text-lightGrey text-xs md:text-base">
                        {request.description}
                      </p>
                      <p className="rounded-lg py-2 px-4 font-semibold text-blue bg-darkWhite text-sm w-fit mt-3">
                        {capitalizeFirstLetter(request.category)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <Button
                      className={`flex items-center gap-1 ${
                        request.upvoted ? "bg-blue" : "bg-darkWhite"
                      }  rounded-md h-fit p-4`}
                      onClick={() => increaseUpvotes(request.id)}
                    >
                      <svg
                        width="10"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6l4-4 4 4"
                          stroke={`${request.upvoted ? "#FFF" : "#4661E6"}  `}
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p
                        className={`font-bold text-xs ${
                          request.upvoted ? "text-white" : "text-darkerGrey"
                        } text-darkerGrey`}
                      >
                        {request.upvotes}
                      </p>
                    </Button>
                    <Link
                      href={`/feedback-detail/${request.id}`}
                      className="flex items-center gap-2"
                    >
                      <Image src={commentIcon} alt="" />
                      <p className="font-bold text-darkerGrey">
                        {request.comments.length}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
