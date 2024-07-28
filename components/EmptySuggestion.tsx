import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import plusIcon from "@/public/assets/shared/icon-plus.svg";
import emptyIcon from "@/public/assets/suggestions/illustration-empty.svg";

export default function EmptySuggestion() {
  const router = useRouter();

  const newFeedback = () => {
    router.push("/new-feedback");
  };

  return (
    <section className="flex bg-white rounded-md p-6 items-center justify-center h-[465px] w-11/12 md:w-auto mx-auto md:mx-0">
      <div className="mx-auto text-center space-y-6">
        <Image src={emptyIcon} alt="" className="mx-auto" />
        <div>
          <h1 className="font-bold text-2xl text-darkerGrey my-5">
            There is no feedback yet
          </h1>
          <p className="text-lightGrey">
            Got a suggestion? Found a bug that needs to be squashed? <br /> We
            love hearing about new ideas to improve our app.
          </p>
        </div>
        <Button
          onClick={newFeedback}
          className="p-6 bg-purple flex items-center gap-2 font-bold text-sm rounded-xl mx-auto"
        >
          <Image src={plusIcon} alt="" />
          Add Feedback
        </Button>
      </div>
    </section>
  );
}
