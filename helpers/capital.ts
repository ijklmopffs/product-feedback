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
  comments: Comment[];
}

const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const filterByVotes = (
  requests: ProductRequest[],
  order: "most" | "least"
): ProductRequest[] => {
  return [...requests].sort((a, b) => {
    return order === "most" ? b.upvotes - a.upvotes : a.upvotes - b.upvotes;
  });
};

export { capitalizeFirstLetter, filterByVotes };
