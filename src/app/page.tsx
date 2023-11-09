import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center bg-gray-100 p-8 dark:bg-gray-900 ">
      <p className="text-3xl font-bold">Chat With Anyone, Anywhere!</p>
      <p className="text-lg text-gray-600 dark:text-white mt-2">
        You Speak your language, they speak their language.{" "}
        <span className="text-blue-500">Let AI handle the translation</span>
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/chat">
          <Button className="rounded-md px-3.5 py-2.5 text-sm font-semibold dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white">
            Get Started
          </Button>
        </Link>
        <Link href="/pricing">
          <Button className="bg-transparent hover:text-white text-black  dark:hover:bg-gray-700 dark:text-white">
            View Pricing<span aria-hidden>&rarr; </span>
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <Image
          src="https://media.giphy.com/media/heIX5HfWgEYlW/giphy.gif"
          alt="catgif"
          height={1442}
          width={2432}
          className="w-[40rem] h-[30rem] rounded-md shadow-2xl mx-auto"
        />
      </div>
    </div>
  );
}
