"use client";

// import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";
import BotAvatar from "@/components/bot-avatar";
import UserAvatar from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";


export interface ChatMessageProps {
    role: "system" | "user";
    content?: string;
    isLoading?: boolean;
    src?: string;
}

export default function ChatMessage({
    role,
    content,
    isLoading,
    src
}: ChatMessageProps) {

    // const { toast } = useToast();
    const { theme } = useTheme();

    function copyToClipboard() {
        if (!content) {
            return;
        }
        navigator.clipboard.writeText(content);
        // toast({
        //     description: "Message copied to clipboard"
        // });
    }

    return (
        <div className={cn(
            "group flex items-center gap-x-3 py-4 w-full ",
            role === "user" && "justify-end"
        )}>
            {role !== "user" && src && <BotAvatar/>}
            <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
                {isLoading ? <BeatLoader size={5} color={theme === "light" ? "black" : "white"} /> : content}
            </div>
            {role === "user" && <UserAvatar />}
            {role !== "user" && !isLoading && (
                <Button
                    className="opacity-0 group-hover:opacity-100 transition"
                    onClick={copyToClipboard}
                    size="icon"
                    variant="ghost"
                >
                    <Copy className="w-4 h-4" />
                </Button>
            )}
        </div>
    )
}