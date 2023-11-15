import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckOutButton from "./CheckOutButton";

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: "Free",
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
const PricingCard = ({ redirect }: { redirect: boolean }) => {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => {
        return (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 "
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text5xl font-bold tracking-tight text-gray-900">
                      Free
                    </span>
                  </>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>

              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {redirect ? (
              <Link href="/register">Get Started Today</Link>
            ) : (
              tier.id && <CheckOutButton />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
