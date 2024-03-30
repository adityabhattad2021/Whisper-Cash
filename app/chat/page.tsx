"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatInput from "@/components/chat/ChatInput";
import React, { useRef } from "react";
import { AccountSidebar } from "@/components/AccountSidebar";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});


export default function ChatPage() {
  const { theme } = useTheme();

  const chatRef = useRef(null);

  return (
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="px-4 py-4 mt-20 h-full">
          <div className="flex items-center justify-center h-full">
            {/* Sidebar */}
            <AccountSidebar />
            <div className="flex flex-col h-full w-full overflow-hidden">
              <div className="flex-1 overflow-y-scroll no-scrollbar">
                <ChatContainer
                  isLoading={false}
                  isError={false}
                  isLoggedIn={true}
                />
                <div
                  style={{ float: "left", clear: "both" }}
                  ref={chatRef}
                ></div>
              </div>
              <div className="sticky bottom-0 w-full">
                <ChatInput
                  onSubmit={() => {}}
                  isLoading={false}
                  isLoggedIn={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
