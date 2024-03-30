"use client";

import Message from "./Message";
import { ThreeDotLoading } from "./ThreeDotLoading";
// import { getMessageObject } from "@/utilities/messageUtils";
import { useRecoilState } from "recoil";
import { messagesAtom } from "@/store/atoms/chatAtoms";
// import { DemoCards } from "./DemoCards";

function EmptyChat() {
  return (
    <div className="text-gray-500 text-center py-8 px-2 mx-auto">
      The chat is currently empty. No messages are available at the moment.
      Please feel free to start the conversation, and I'll be here to assist you
      promptly.
    </div>
  );
}

export function Chat({ isLoading, isError, isLoggedIn }) {
  const [messages, setMessages] = useRecoilState(messagesAtom);

  // function handleCardClick(prompt: string) {
  //   setMessages((prevMessages) => [getMessageObject(prompt, false)]);
  // }

  return (
    <div className="flex flex-col justify-between mx-auto min-h-full w-full max-w-2xl">
      <div className="flex flex-col">
        {messages.length === 0 && !isLoading && !isError && isLoggedIn && (
          <EmptyChat />
        )}
        {messages.length === 0 && !isLoading && !isError && !isLoggedIn && (
          <div className="text-gray-500 text-center py-8  mx-auto">
            You need to log in to continue the conversation. Please log in to
            access the chat and interact with me.
          </div>
        )}
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            userName="User"
            aiName="AI"
            userAvatar="/user_logo.png"
            aiAvatar="/ai_logo.png"
          />
        ))}
        {isLoading && <ThreeDotLoading />}
        {isError && <div>Error loading messages</div>}
      </div>

      {/* {messages.length === 0 && !isLoading && !isError && isLoggedIn && (
        <DemoCards onCardClick={handleCardClick} />
      )} */}
    </div>
  );
}
