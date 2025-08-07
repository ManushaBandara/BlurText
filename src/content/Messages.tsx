"use client";

import React, { useState, useRef, useEffect } from "react";
import { TranslatedText } from "@/hooks/useTranslation";
import Icon from "@/components/Icon";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Message {
  id: number;
  username: string;
  displayName: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  unread: boolean;
  isOnline?: boolean;
}

interface ChatMessage {
  id: number;
  text: string;
  timestamp: string;
  isSent: boolean;
}

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<Message | null>(null);
  const [messageText, setMessageText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const recentMessages: Message[] = [
    {
      id: 1,
      username: "uki",
      displayName: "Uki",
      lastMessage: "waren yako wada karana",
      timestamp: "2m",
      avatar: "https://avatar.iran.liara.run/public/1",
      unread: true,
      isOnline: false,
    },
    {
      id: 2,
      username: "akash",
      displayName: "Akash",
      lastMessage: "adoo",
      timestamp: "15m",
      avatar: "https://avatar.iran.liara.run/public/2",
      unread: false,
      isOnline: true,
    },
  ];

  const followedUsers: Message[] = [
    {
      id: 3,
      username: "gayni",
      displayName: "Gayni",
      lastMessage: "",
      timestamp: "",
      avatar: "https://avatar.iran.liara.run/public/3",
      unread: false,
      isOnline: true,
    },
    {
      id: 4,
      username: "manusha",
      displayName: "Manusha",
      lastMessage: "",
      timestamp: "",
      avatar: "https://avatar.iran.liara.run/public/4",
      unread: false,
      isOnline: false,
    },
    {
      id: 5,
      username: "sahan",
      displayName: "Sahan",
      lastMessage: "",
      timestamp: "",
      avatar: "https://avatar.iran.liara.run/public/5",
      unread: false,
      isOnline: true,
    },
    {
      id: 6,
      username: "janidu",
      displayName: "Janidu",
      lastMessage: "",
      timestamp: "",
      avatar: "https://avatar.iran.liara.run/public/6",
      unread: false,
      isOnline: true,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const chatMessages: ChatMessage[] = [
    {
      id: 1,
      text: "elama?",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      text: "gamk thmi 😊",
      timestamp: "10:32 AM",
      isSent: true,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log(
        "Sending message:",
        messageText,
        "to:",
        selectedChat?.username
      );
      setMessageText("");
    }
  };

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setMessageText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleChatSelect = (chat: Message) => {
    setSelectedChat(chat);
  };

  const handleBackToMessages = () => {
    setSelectedChat(null);
  };

  const handleOpenNewChat = () => {
    setShowNewChatModal(true);
  };

  const handleCloseNewChat = () => {
    setShowNewChatModal(false);
  };

  if (selectedChat) {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#262335]">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToMessages}
              className="p-2 hover:bg-gray-500 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={selectedChat.avatar}
                alt={selectedChat.displayName}
                className="w-10 h-10 rounded-full"
              />
              {selectedChat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#262335]"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {selectedChat.displayName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                @{selectedChat.username}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#1a1625]">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isSent ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isSent
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-[#262335] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isSent
                      ? "text-blue-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#262335] border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Start a new message"
                className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1625] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                ref={emojiPickerRef}
              >
                <button
                  onClick={handleEmojiClick}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Add emoji"
                >
                  <span className="text-xl">😊</span>
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-full right-0 mb-2 z-50">
                    <EmojiPicker onEmojiClick={handleEmojiSelect} />
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Messages Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#262335]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            <TranslatedText>Messages</TranslatedText>
          </h1>
          <button
            onClick={handleOpenNewChat}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white dark:bg-[#262335]">
        {recentMessages.map((message) => (
          <div
            key={message.id}
            onClick={() => handleChatSelect(message)}
            className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-[#1a1625] cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-700"
          >
            <div className="relative">
              <img
                src={message.avatar}
                alt={message.displayName}
                className="w-12 h-12 rounded-full"
              />
              {message.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#262335]"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                  {message.displayName}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {message.timestamp}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm truncate ${
                    message.unread
                      ? "text-gray-900 dark:text-white font-medium"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {message.lastMessage}
                </p>
                {message.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showNewChatModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#262335] rounded-lg w-96 max-h-96 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                <TranslatedText>Start a new chat</TranslatedText>
              </h2>
              <button
                onClick={handleCloseNewChat}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* People You Follow List */}
            <div className="max-h-80 overflow-y-auto">
              {followedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-[#1a1625] transition-colors border-b border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.displayName}
                        className="w-10 h-10 rounded-full"
                      />
                      {user.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#262335]"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {user.displayName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors">
                    <TranslatedText>Message</TranslatedText>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
