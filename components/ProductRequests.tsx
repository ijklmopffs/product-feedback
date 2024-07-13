import Image from "next/image";
import { capitalizeFirstLetter } from "@/helpers/capital";

export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  arrowIcon: string;
  commentIcon: string;
  comments: Comment[];
}

export default function ProductRequests({
  title,
  category,
  upvotes,
  description,
  comments,
  arrowIcon,
  commentIcon,
}: ProductRequest) {
  return (
    <div className="w-11/12 md:w-auto mx-auto md:mx-0 bg-white rounded-md flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 justify-between p-6 mb-4">
      <div className="flex gap-8">
        <div className="hidden md:flex items-center flex-col gap-1 bg-darkWhite rounded-md h-fit p-4">
          <Image src={arrowIcon} alt="" />
          <p className="font-bold text-xs text-darkerGrey">{upvotes}</p>
        </div>
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
      <div className="hidden md:flex items-center gap-2">
        <Image src={commentIcon} alt="" />
        <p className="font-bold text-darkerGrey">{comments.length}</p>
      </div>

      <div className="md:hidden flex items-center justify-between w-full">
        <div className="flex items-center gap-1 bg-darkWhite rounded-md h-fit p-4">
          <Image src={arrowIcon} alt="" />
          <p className="font-bold text-xs text-darkerGrey">{upvotes}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={commentIcon} alt="" />
          <p className="font-bold text-darkerGrey">{comments.length}</p>
        </div>
      </div>
    </div>
  );
}
