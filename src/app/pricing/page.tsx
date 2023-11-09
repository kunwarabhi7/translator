import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div className="dark:bg-gray-900 px-4 py-16 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 dark:bg-gradient-to-br to-purple-400 from-blue-700" />
        <div className="blur-[106px] h-32 dark:bg-gradient-to-r from-cyan-400 to-indigo-600" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold dark:text-white  sm:text-3xl md:text-4xl">
            Pricing
          </h2>
          <p className="text-center text-2xl font-bold dark:text-white  sm:text-3xl md:text-4xl">
            The right price for you,whoever you are
          </p>
          <p className="text-center text-gray-700 dark:text-gray-400 text-sm">
            Were 99% sure we have a plan to match 100% of your needs
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2">
              Starter
            </h2>
            <p>Get chatting right awat with anyone , anywhere!</p>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-800 dark:text-gray-400">
              <span className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                Free
              </span>{" "}
            </p>
            <ul className="list-none list-inside mb-6 text-center text-gray-700 dark:text-gray-300">
              <li>20 Message Chat Limit in Chats</li>
              <li>3C Chat Rooms limit</li>
              <li>Supports 2 languages</li>
              <li>48-hour support response time</li>
              <li></li>
              <li></li>
            </ul>
            <Link
              className="lemonsqueezy-button relative flex h-9 w-full mt-10 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              href="https://example.com/starter-plan"
            >
              <span className="relative text-sm font-semibold border p-2  rounded-md border-cyan-400 dark:border-0 text-black">
                Get Started Today
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-2">
              {" "}
              Pro
            </h2>
            <p>Unlock the Full Potential With Pro!</p>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-800 dark:text-gray-400">
              <span className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                $5.99
              </span>{" "}
              / Month
            </p>

            <ul className="list-none list-inside mb-6 text-center text-gray-700 dark:text-gray-300">
              <li>Unlimited Messages in Chats</li>
              <li>Unlimited Participants in Chats</li>
              <li>Supports upto 10 languages </li>
              <li>Multuimedua support in Chats (coming soon) </li>
              <li>1-hour,dedicated support response time</li>
              <li>Early access to New Features</li>
            </ul>
            <Link
              className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              href="https://example.com/pro-plan"
            >
              <span className="relative text-sm font-semibold border p-2 rounded-md border-cyan-400 dark:border-0 text-black">
                Get Started Today
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
