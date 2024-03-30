"use client"
import ChatHeader from "@/components/chat-header";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { getChainInfo } from "@/actions/get-chain-info";
import ChatForm from "@/components/chat-form";
import ChatMessages from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";



interface ChatClientProps {

};

export default function ChatClient({ }: ChatClientProps) {

    const router = useRouter();
    const [messages, setMessages] = useState<ChatMessageProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (input.trim() === "") return;
        setIsLoading(true);
        const userMessage: ChatMessageProps = {
            role: "user",
            content: input
        }
        setMessages((current) => [...current, userMessage])
        getChainInfo({userQuery:input})
            .then((response) => {
                const botMessage: ChatMessageProps = {
                    role: "system",
                    content: response.message
                }
                setMessages((current) => [...current, botMessage])
                setInput("");
                setIsLoading(false);
            })
            .catch((error)=>{
                console.error(error)
            })
    }


    return (
        <div className="flex flex-col h-full w-full">
            <ChatHeader />
            <ChatMessages
                isLoading={isLoading}
                messages={messages}
            />
            <ChatForm
                isLoading={isLoading}
                input={input}
                handleInputChange={handleInputChange}
                handleOnSubmit={onSubmit}
            />
        </div>
    )
}