"use client";
import { MobileHeader } from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";


export default function ChatLayout({ children }: { children: React.ReactNode }) {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <body>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <div className="lg:pl-80 h-full pt-[50px] lg:pt-0">
                <div className="w-full mx-auto pt-6 h-full">
                    {children}
                </div>
            </div>
        </body>
    )
}