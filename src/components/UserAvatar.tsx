import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const UserAvatar = ({
  name,
  className,
  image,
}: {
  name: string;
  className?: string;
  image: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black ", className)}>
      {image && <Image src={image} alt={name} width={40} height={40} />}
      <AvatarFallback className="dark:bg-white dark:text-black text-lg">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
