import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const ChatButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="ml-4 mb-3 fixed w-24 h-16 bottom-5 left-5 bg-blue-500 text-white flex flex-col items-center justify-center rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
      aria-label="챗봇 열기"
    >
      <ChatBubbleLeftRightIcon className="h-8 w-8 mb-1" />
      <p className="text-xs sm:text-sm">훈련추천</p>
    </button>
  );
};

export default ChatButton;
