import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import React from "react";
import SidebarItem from "./sidebar-item";

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      <Link href="/learn">
        <Logo/>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Wallet" 
          href="/wallet"
        />
      </div>
    </div>
  );
};
