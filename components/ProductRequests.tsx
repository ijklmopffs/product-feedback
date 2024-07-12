import Image from "next/image";
import { capitalizeFirstLetter } from "@/helpers/capital";

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
    <div className="bg-white rounded-md flex items-center justify-between p-6 mb-4">
      <div className="flex gap-8">
        <div className="flex items-center flex-col gap-1 bg-darkWhite rounded-md h-fit p-4">
          <Image src={arrowIcon} alt="" />
          <p className="font-bold text-xs text-darkerGrey">{upvotes}</p>
        </div>
        <div>
          <h1 className="font-bold text-lg text-darkerGrey">{title}</h1>
          <p className="text-lightGrey">{description}</p>
          <p className="rounded-lg py-2 px-4 font-semibold text-blue bg-darkWhite text-sm w-fit mt-3">
            {capitalizeFirstLetter(category)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={commentIcon} alt="" />
        <p className="font-bold text-darkerGrey">{comments.length}</p>
      </div>
    </div>
  );
}
