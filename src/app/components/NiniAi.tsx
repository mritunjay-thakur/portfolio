"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  Send,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
  Home,
} from "lucide-react";
import { gsap } from "gsap";
import CardNav from "./ui/CardNav";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const NiniChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const navItems = [
    {
      label: "Chat",
      bgColor: "#F3F4F6",
      textColor: "#5227FF",
      links: [
        {
          label: "Delete Chat",
          ariaLabel: "Clear all chat history",
          action: "delete-chat",
        },
        {
          label: "New Chat",
          ariaLabel: "Start a new conversation",
          action: "new-chat",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#F3F4F6",
      textColor: "#5227FF",
      links: [
        {
          label: "Clothify Ai",
          ariaLabel: "Visit Clothify AI project",
          url: "https://aiclothify.vercel.app",
        },
        {
          label: "Love & Learn Music",
          ariaLabel: "Visit Music project",
          url: "https://musicbyjay.vercel.app",
        },
        {
          label: "Thakur Events",
          ariaLabel: "Visit Events project",
          url: "https://eventsbyjay.vercel.app/",
        },
        {
          label: "Dinder Tinder",
          ariaLabel: "Visit Dinder project",
          url: "https://dinderbyjay.vercel.app/",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#F3F4F6",
      textColor: "#5227FF",
      links: [
        {
          label: "Email",
          ariaLabel: "Send email to Mritunjay",
          href: "mailto:mritunjaythakur903@gmail.com",
        },
        {
          label: "Github",
          ariaLabel: "Visit GitHub profile",
          url: "https://github.com/mritunjay-thakur/mritunjay-thakur",
        },
        {
          label: "LinkedIn",
          ariaLabel: "Visit LinkedIn profile",
          url: "https://www.linkedin.com/in/mritunjay-thakur-jay/",
        },
        {
          label: "Instagram",
          ariaLabel: "Visit Instagram profile",
          url: "https://instagram.com/___jaythakur___",
        },
      ],
    },
  ];

  const suggestions = [
    "Tell me about Mritunjay's projects",
    "What technologies does he work with?",
    "What's his experience in web development?",
    "How can I contact him for a project?",
  ];

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const handleNewChat = () => {
    clearChat();
  };

  const handleDeleteChat = () => {
    clearChat();
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Hide welcome message when first message is sent
    if (showWelcome) {
      setShowWelcome(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          data.answer ||
          "I'm sorry, I couldn't generate a response. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowWelcome(true);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      <CardNav
        items={navItems}
        buttonBgColor="#5227FF"
        buttonTextColor="#FFFFFF"
      />

      <div className="flex flex-col h-full pt-20 md:pt-24">
        <div className="flex-1 overflow-hidden">
          {showWelcome ? (
            <div className="h-full flex items-center justify-center px-4 py-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 -mt-12">
                  <h1 className="text-4xl md:text-6xl font-bold bg-blue-500 bg-clip-text text-transparent mb-4">
                    Welcome to NiniAI
                  </h1>
                  <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Your personal assistant to discover everything about{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Mritunjay's journey
                    </span>{" "}
                    in web development, his projects, skills, and achievements.
                  </p>
                </div>

                {/* Suggestions */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                    Try asking me about:
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-lg text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-y-auto px-4 py-6 pb-24">
              <div className="max-w-4xl mx-auto space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.role === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === "user"
                          ? "bg-slate-700 dark:bg-slate-600"
                          : "bg-blue-600"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`flex-1 max-w-3xl ${
                        message.role === "user" ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block px-4 py-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-slate-700 dark:bg-slate-600 text-white rounded-br-md"
                            : "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-bl-md shadow-sm"
                        }`}
                      >
                        <p className="text-lg leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>
                      <p
                        className={`text-xs text-slate-400 mt-1 ${
                          message.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-4 py-3 rounded-2xl rounded-bl-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 left-0 right-0 border-slate-200 dark:border-slate-700 px-4 py-4 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Nini about Mritunjay's projects, skills, or anything else..."
                className="w-full pr-14 px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg placeholder-slate-400 dark:placeholder-slate-500 dark:text-white shadow-lg"
                style={{ minHeight: "56px", maxHeight: "56px" }}
                disabled={isLoading}
              />

              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 bg-blue-500 hover:bg-blue-600 mr-1  text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NiniChat;
