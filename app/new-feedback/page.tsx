"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import backIcon from "@/public/assets/shared/icon-arrow-left.svg";
import createIcon from "@/public/assets/shared/icon-new-feedback.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvider } from "@/context/FullProvider";

export default function NewFeedback() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const {
    handleAddRequest,
    title,
    details,
    setTitle,
    setDetails,
    setCategory,
  } = useProvider();

  return (
    <main className="max-w-xl mx-auto flex flex-col items-start justify-center h-screen gap-20">
      <Button
        className="flex items-center gap-2 bg-transparent"
        onClick={handleBack}
      >
        <Image src={backIcon} alt="" />
        <p className="text-lightGrey font-bold text-sm">Go Back</p>
      </Button>

      <section className="bg-white rounded-md w-full p-6">
        <Image src={createIcon} alt="" className="relative bottom-[3.25rem]" />
        <h1 className="text-darkerGrey font-bold text-2xl">
          Create New Feedback
        </h1>
        <form className="mt-10" onSubmit={handleAddRequest}>
          <div className="my-5">
            <h2 className="text-darkerGrey font-bold text-sm">
              Feedback Title
            </h2>
            <p className="text-lightGrey font-bold text-sm">
              Add a short descriptive headline
            </p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-darkerWhite p-2 my-3 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <h2 className="text-darkerGrey font-bold text-sm">Category</h2>
            <p className="text-lightGrey font-bold text-sm">
              Choose a category for your feedback
            </p>
            <Select onValueChange={(value) => setCategory(value)}>
              <SelectTrigger className="w-full bg-darkerWhite rounded-md my-3 focus:outline-none focus:ring-0 border-none">
                <SelectValue placeholder="Feature" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ui">UI</SelectItem>
                  <SelectItem value="ux">UX</SelectItem>
                  <SelectItem value="enhancement">Enhancement</SelectItem>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="my-5">
            <h2 className="text-darkerGrey font-bold text-sm">
              Feedback Detail
            </h2>
            <p className="text-lightGrey font-bold text-sm">
              Include any specific comment on what should be improved, added,
              etc.
            </p>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-darkerWhite p-8 pb-16 pt-6 my-5 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 items-end justify-end">
            <Button className="p-6 bg-darkerGrey flex items-center gap-2 font-bold text-sm rounded-xl">
              Cancel
            </Button>
            <Button
              type="submit"
              className="p-6 bg-purple flex items-center gap-2 font-bold text-sm rounded-xl"
            >
              Add Feedback
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
