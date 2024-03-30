"use client"
import ChatHeader from "@/components/chat-header";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ChatForm from "@/components/chat-form";
import ChatMessages from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";
import { useUIState, useActions } from "ai/rsc";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import type { AI } from "../../../action";


interface ChatClientProps {

};

export default function ChatClient({ }: ChatClientProps) {

    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useUIState<typeof AI>();
    const { submitUserMessage } = useActions<typeof AI>();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        // @ts-ignore
        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: Date.now(),
                display: <div>{input}</div>,
            },
        ]);

        const responseMessage = await submitUserMessage(input);
        // @ts-ignore
        setMessages((currentMessages) => [
            ...currentMessages,
            responseMessage,
        ]);
        setIsLoading(false);
        setInput('');

    }


    return (
        <div className="flex flex-col h-full w-full">
            <ChatHeader />
            {/* <ChatMessages
                isLoading={isLoading}
                messages={messages}
            /> */}
            {
                // View messages in UI state
                // @ts-ignore
                messages.map((message) => (
                    <div key={message.id}>
                        {message.display}
                    </div>
                ))
            }
            <form
            onSubmit={onSubmit}
            className="border-t border-primary/10 py-4 flex items-center gap-x-2 px-4"
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
            {/* <ChatForm
                isLoading={isLoading}
                input={input}
                handleInputChange={handleInputChange}
                handleOnSubmit={onSubmit}
            /> */}
        </div>
    )
}