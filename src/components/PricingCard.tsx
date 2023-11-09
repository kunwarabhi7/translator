import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right awat with anyone , anywhere!",
    features: [
      " 20 Message Chat Limit in Chats",
      "3C Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "si_On",
    href: "#",
    priceMonthly: "$9.99",
    description: "Unlock the Full Potential With Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Supports upto 10 languages ",
      "Multuimedua support in Chats (coming soon) ",
      "1-hour,dedicated support response time",
      "Early access to New Features",
    ],
  },
];
const PricingCard = () => {
  return (
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
  );
};

export default PricingCard;
