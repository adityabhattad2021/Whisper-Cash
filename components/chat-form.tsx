"use client";

import type { ChatRequestOptions } from "ai";
import { ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    handleOnSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

export default function ChatForm({ input, handleInputChange, handleOnSubmit, isLoading }: ChatFormProps) {
    return (
        <form
            onSubmit={handleOnSubmit}
            className="border-t border-primary/10 py-4 flex items-center gap-x-2"
        >
            <Input
                disabled={isLoading}
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message"
                className="rounded-lg bg-primary/10"
            />
            <Button disabled={isLoading} variant={"ghost"} size={"icon"}>
                <SendHorizonal
                    className="h-4 w-4"
                />
            </Button>
        </form>
    )
}