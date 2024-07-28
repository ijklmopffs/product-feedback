"use client";

import { Comment } from "@/context/FullProvider";
import Image from "next/image";

type Product = {
  product: Comment[];
};

export default function SuggestionDetail({ product }: Product) {
  console.log(product);

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
              <p className="font-semibold text-xs text-blue">Reply</p>
            </div>
          </div>
          <p className="text-lightGrey font-normal text-sm my-3 md:ml-28">
            {sync.content}
          </p>
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
                    <p className="font-semibold text-xs text-blue">Reply</p>
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