import { getServerSession } from "next-auth";
import { authOption } from "../../auth";
import Logo from "./Logo";
import { ToggleDarkMode } from "./ToggleDarkMode";
import UserButton from "./UserButton";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";

const Header = async () => {
  const session = await getServerSession(authOption);
  console.log(session);
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto pl-2">
        <Logo />
        <div className="flex flex-1 justify-end space-x-4 items-center">
          {session ? (
            <Link href="/chat" prefetch={false}>
              <MessagesSquareIcon className="text-black dark:text-white" />
            </Link>
          ) : (
            <Link href="pricing">Pricing</Link>
          )}
          <ToggleDarkMode />
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
