"use client"
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

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
          headingFont.className,
            theme === "light" && "text-black"
        )}>
          wisper chat
        </p>
      </div>
    </Link>
  );
};