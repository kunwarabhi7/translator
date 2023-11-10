"use client";
import Link from "next/link";
import Image from "next/image";
import LogoBear from "../app/images/logo/logo.svg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
const Logo = () => {
  return (
    <Link prefetch={false} href="/">
      <div className="flex items-center w-12 h-12">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image src={LogoBear} priority alt="logo" className="" />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
