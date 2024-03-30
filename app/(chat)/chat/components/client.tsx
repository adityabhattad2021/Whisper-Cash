"use client"
import ChatHeader from "@/components/chat-header";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCompletion } from "ai/react";
import ChatForm from "@/components/chat-form";
import ChatMessages from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";



interface ChatClientProps {
   
};

export default function ChatClient({  }: ChatClientProps) {

    const router = useRouter();
    const [messages, setMessages] = useState<ChatMessageProps[]>([]);

    // const {
    //     input,
    //     isLoading,
    //     handleInputChange,
    //     handleSubmit,
    //     setInput
    // } = useCompletion({
    //     api: `/api/chat/${character.id}`,
    //     onFinish(prompt,completion) {
    //         const systemMessage: ChatMessageProps = {
    //             role: "system",
    //             content: completion,
    //         }
    //         console.log(completion);
            
    //         setMessages((current) => [...current, systemMessage]);
    //         setInput("")
    //         router.refresh();
    //     },
    //     onError(error){
    //         console.log(error);
    //         router.refresh();
    //     },
    //     body:{
    //         userWalletAddress:address
    //     }
    // });

    // function onSubmit(e: FormEvent<HTMLFormElement>) {
    //     const userMessage: ChatMessageProps = {
    //         role: "user",
    //         content: input,
    //     };

    //     setMessages((current) => [...current, userMessage]);
    //     handleSubmit(e);
    // }

    const isLoading = true;
    const input = "";
    function handleInputChange(){

    }
    function onSubmit(){
        
    }
   
    
    return (
        <div className="flex flex-col h-full p-4 space-y-2">
            <ChatHeader  />
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