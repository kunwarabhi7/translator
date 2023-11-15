import PricingCard from "@/components/PricingCard";

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
        <PricingCard redirect={true} />
      </div>
    </div>
  );
};

export default Pricing;
