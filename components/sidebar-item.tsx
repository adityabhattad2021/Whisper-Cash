"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Wallet2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  
  href: string;
};

export default function SidebarItem({
  label,
  href,
}: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline"  : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Wallet2Icon/>
        {label}
      </Link>
    </Button>
  );
};
