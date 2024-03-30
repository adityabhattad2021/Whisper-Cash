"use client"
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


export const Logo = () => {
    const {theme}=useTheme();
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={30}
          width={30}
        />
        <p className={cn(
          "text-lg text-white pb-1",
            theme === "light" && "text-black"
        )}>
          wispher cash
        </p>
      </div>
    </Link>
  );
};