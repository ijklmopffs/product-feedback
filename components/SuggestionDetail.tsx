"use client";

import { Comment, useProvider } from "@/context/FullProvider";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

type Product = {
  product: Comment[];
};

export default function SuggestionDetail({ product }: Product) {
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyValue, setReplyValue] = useState("");
  const { addReply } = useProvider();

  const handleReplyClick = (commentId: number) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReplyValue(value);
  };

  return (
    <div>
      {product.map((sync, index) => (
        <div key={sync.id} className="my-6">
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-5 md:gap-14">
              <Image
                src={sync.user.image}
                alt={sync.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-sm font-bold text-darkerGrey">
                  {sync.user.name}
                </h1>
                <p className="text-sm font-normal text-darkGrey">
                  @{sync.user.username}
                </p>
              </div>
            </div>
            <div>
              <Button
                className="bg-transparent border-none hover:bg-transparent hover:border-none"
                onClick={() => handleReplyClick(sync.id)}
              >
                <p className="font-semibold text-xs text-blue">Reply</p>
              </Button>
            </div>
          </div>
          <p className="text-lightGrey font-normal text-sm my-3 md:ml-28">
            {sync.content}
          </p>
          {replyingTo === sync.id && (
            <div className="md:max-w-[80%] mx-auto">
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  if (replyValue.trim() === "") return;
                  const currentUser = {
                    image: "/assets/user-images/image-nuel.jpg",
                    name: "Nuel Elekwachi",
                    username: "ijkmnffs",
                  };

                  addReply(sync.id, replyValue, currentUser);

                  setReplyValue("");
                  setReplyingTo(null);
                }}
                className="flex items-center gap-8"
              >
                <input
                  type="text"
                  name="comment"
                  value={replyValue}
                  onChange={handleReplyChange}
                  placeholder="Type your comment here"
                  className="w-4/5 bg-darkerWhite p-8 pb-16 pt-6 my-5 focus:outline-none"
                />
                <Button className="bg-purple" type="submit">
                  Post Reply
                </Button>
              </form>
            </div>
          )}

          <div>
            {sync.replies?.map((more) => (
              <div key={more.content} className="my-6">
                <div className="flex items-center justify-between ml-12 md:ml-24">
                  <div className="flex items-center gap-4 md:gap-12">
                    <Image
                      src={more.user.image}
                      alt={more.user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-sm font-bold text-darkerGrey">
                        {more.user.name}
                      </h2>
                      <p className="text-sm font-normal text-darkGrey">
                        @{more.user.username}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="bg-transparent border-none hover:bg-transparent hover:border-none"
                      onClick={() => handleReplyClick(sync.id)}
                    >
                      <p className="font-semibold text-xs text-blue">Reply</p>
                    </Button>
                  </div>
                </div>
                <div className="my-5 ml-12 md:ml-28">
                  <p className="text-lightGrey font-normal text-sm">
                    <span className="text-purple text-sm font-bold">
                      @{more.replyingTo}
                    </span>{" "}
                    {more.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {index < product.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
