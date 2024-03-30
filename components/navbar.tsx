"use client";

import { cn } from "@/lib/utils";
import { Wallet } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import MobileSidebar from "@/components/mobile-sidebar";

import { useEffect, useState } from "react";
import { Plus, Settings, StoreIcon, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Logo } from "./logo";

const font = Poppins({
    weight: "600",
    subsets: ['latin']
})

const routes = [
    {
        icon: StoreIcon,
        href: "/TODO",
        label: "#",
        logined: false
    },

    {
        icon: User2,
        href: "/profile",
        label: "Profile",
        logined: true,
    },
]


export default function Navbar() {

    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar />
                <Link
                    href="/"
                >
                    <Logo />
                </Link>
            </div>

            <div className="flex items-center gap-x-3">
                <div className="hidden md:flex gap-6 pr-20">
                    {routes.map((route) => {
                        return (
                            <Button variant="ghost" onClick={() =>router.push(route.href)} key={route.href}>
                                <h1 className={cn("font-bold text-lg cursor-pointer", font.className)} >
                                    {route.label}
                                </h1>
                            </Button>
                        )
                    })}
                </div>
                <Button size="sm" onClick={() => {}}>
                    Connect
                    <Wallet
                        className="h-4 w-4 fill-white ml-2"
                    />
                </Button>
                <ModeToggle />
            </div>
        </div>
    )
}