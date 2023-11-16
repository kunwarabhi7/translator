"use client";
import { useSession } from "next-auth/react";

const CheckOutButton = () => {
  const { data: session } = useSession();

  const createCheckOutSession = async () => {
    if (!session?.user.id) return;
  };

  return (
    <button
      onClick={() => createCheckOutSession()}
      className="bg-cyan-500 block mt-8 text-center text-white px-3.5 text-sm font-semibold leading-6 shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 cursor-pointer py-2 rounded-md"
    >
      Sign up
    </button>
  );
};

export default CheckOutButton;
