"use client";

import ProductRequests from "@/components/ProductRequests";
import { useProvider } from "@/context/FullProvider";
import { useParams, useRouter } from "next/navigation";
import commentIcon from "@/public/assets/shared/icon-comments.svg";
import backIcon from "@/public/assets/shared/icon-arrow-left.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SuggestionDetail from "@/components/SuggestionDetail";

export default function FeedbackDetail() {
  const {
    getRequestById,
    commentValue,
    handleInputChange,
    charCount,
    addComment,
    setCommentValue,
  } = useProvider();

  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  if (!id) return <p>Loading...</p>;

  const productId = parseInt(id as string, 10);
  const product = getRequestById(productId);
  const handleBack = () => {
    router.back();
  };

  let productRequests;

  if (product) {
    productRequests = (
      <ProductRequests
        id={product.id}
        key={product.id}
        title={product.title}
        category={product.category}
        upvotes={product.upvotes}
        upvoted={product.upvoted}
        status={product.status}
        description={product.description}
        comments={product.comments}
        commentIcon={commentIcon}
      />
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentValue.trim() === "") return;
    const currentUser = {
      image: "/assets/user-images/image-nuel.jpg",
      name: "Nuel Elekwachi",
      username: "ijkmnffs",
    };

    addComment(productId, commentValue, currentUser);

    setCommentValue("");
  };

  return (
    <main className="max-w-7xl md:p-20 w-11/12 md:w-auto mx-auto my-96 h-screen flex flex-col gap-4 justify-center">
      <div className="flex items-center justify-between">
        <Button
          className="flex items-center gap-2 bg-transparent"
          onClick={handleBack}
        >
          <Image src={backIcon} alt="" />
          <p className="text-lightGrey font-bold text-sm">Go Back</p>
        </Button>
        <Button className="p-6 bg-blue text-darkWhite flex items-center gap-2 font-bold text-sm rounded-xl">
          Edit Feedback
        </Button>
      </div>
      <div>{productRequests}</div>

      <section className="bg-white rounded-md p-6">
        <p className="font-bold text-lg text-darkerGrey">
          {product?.comments.length} comments
        </p>

        <SuggestionDetail product={product?.comments!} />
      </section>

      <section className="bg-white rounded-md p-6">
        <h2 className="text-darkerGrey text-lg font-bold">Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            value={commentValue}
            onChange={handleInputChange}
            placeholder="Type your comment here"
            className="w-full bg-darkerWhite p-8 pb-16 pt-6 my-5 focus:outline-none"
            maxLength={250}
          />
          <div className="flex items-center justify-between">
            <p className="text-lightGrey text-sm">
              {commentValue == "" ? 250 : 250 - charCount} Characters left
            </p>
            <Button className="bg-purple" type="submit">
              Post Comment
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
