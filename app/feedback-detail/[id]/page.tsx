"use client";

import ProductRequests from "@/components/ProductRequests";
import { useProvider } from "@/context/FullProvider";
import { useParams } from "next/navigation";
import commentIcon from "@/public/assets/shared/icon-comments.svg";

export default function FeedbackDetail() {
  const { getRequestById } = useProvider();
  const params = useParams();
  const id = params?.id;

  if (!id) return <p>Loading...</p>;

  const productId = parseInt(id as string, 10);
  const product = getRequestById(productId);

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

  return (
    <main className="max-w-6xl mx-auto h-screen">
      <div>{productRequests}</div>
    </main>
  );
}
