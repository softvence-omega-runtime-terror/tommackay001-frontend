"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Check,
  Paperclip,
  Mic,
  Send,
  ArrowRight,
  ChevronRight,
  RotateCcw,
  AlertCircle,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

import saraAvatar from "@/public/avatar/you.png";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  id: string;
  name: string;
  avatar: string | StaticImageData;
  avatarBg: string;
  lastMessage: string;
  time: string;
  unread: number;
  tag: string;
}

interface ChatMessage {
  id: number;
  sender: "provider" | "you";
  text: string;
  time: string;
  read: boolean;
}

interface TaskDetail {
  id: string;
  taskNumber: string;
  title: string;
  domain: string;
  authority: string;
  status: string;
  compliance: boolean;
  complianceTime: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/avatar/Sarah.jpg",
    avatarBg: "#8b5cf6",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 1,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "2",
    name: "Jude Bellingham",
    avatar: "/avatar/judge.png",
    avatarBg: "#06b6d4",
    lastMessage: "Hi...",
    time: "1hr ago",
    unread: 0,
    tag: "WEBSITE.COM",
  },
  {
    id: "3",
    name: "Medyn Jr.",
    avatar: "/avatar/medny.png",
    avatarBg: "#10b981",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 0,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "4",
    name: "Vinicius Jr.",
    avatar: "/avatar/vinicius.png",
    avatarBg: "#8b5cf6",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 0,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "5",
    name: "Nora Alex",
    avatar: "/avatar/nora.png",
    avatarBg: "#f59e0b",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 1,
    tag: "TECHTRENDS.IO",
  },
];

const taskDetails: TaskDetail = {
  id: "7821",
  taskNumber: "#7821",
  title: "Guest Post Placement",
  domain: "techtrends.io",
  authority: "DR 72 Metric",
  status: "DELIVERY SUBMITTED",
  compliance: true,
  complianceTime: "SAT 18, 08:30AM",
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "provider",
    text: "Hey! How is the new project coming along?",
    time: "10:18 AM",
    read: true,
  },
  {
    id: 2,
    sender: "you",
    text: "Going great! Just finished the wireframes. Will share them with you shortly.",
    time: "10:18 AM",
    read: true,
  },
  {
    id: 3,
    sender: "provider",
    text: "Hey! How is the new project coming along?",
    time: "10:18 AM",
    read: true,
  },
  {
    id: 4,
    sender: "you",
    text: "Going great! Just finished the wireframes. Will share them with you shortly.",
    time: "10:18 AM",
    read: true,
  },
  {
    id: 5,
    sender: "provider",
    text: "Hey! How is the new project coming along?",
    time: "10:18 AM",
    read: true,
  },
];

export default function ActiveTasksPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(
    teamMembers[0],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(initialMessages);
  const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || member.unread > 0;
    return matchesSearch && matchesFilter;
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: chatMessages.length + 1,
        sender: "you",
        text: inputMessage,
        time: getCurrentTime(),
        read: true,
      };
      setChatMessages([...chatMessages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-[90vh] md:h-[85vh] bg-gray-50 font-sans overflow-hidden rounded-2xl relative w-full max-w-[90vw] lg:max-w-[65vw] xl:max-w-[85vw] 2xl:max-w-[90vw] md:mx-auto lg:mx-0">
      {/* Mobile Sidebar Overlay */}
      {showSidebarOnMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setShowSidebarOnMobile(false)}
        />
      )}

      {/* LEFT – Active Tasks List */}
      <div
        className={`absolute md:relative z-50 md:z-auto inset-y-0 left-0 w-full  md:w-72  xl:w-96 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 md:transition-none ${
          showSidebarOnMobile
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0 "
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Active Tasks</h1>
          <button
            onClick={() => setShowSidebarOnMobile(false)}
            className="md:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search tasks or partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 py-2 border-b flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 cursor-pointer text-sm font-medium rounded-full transition-colors ${
              filter === "all"
                ? "bg-secondary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-2 py-1 cursor-pointer text-sm font-medium rounded-full transition-colors ${
              filter === "unread"
                ? "bg-secondary text-white"
                : "bg-accent text-secondary hover:bg-gray-200"
            }`}
          >
            Unread
          </button>
        </div>

        {/* Task List */}
        <div className="flex-1 overflow-y-auto">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  (setSelectedMember(member), setShowSidebarOnMobile(false));
                }}
                className={`px-4 py-3 border-b cursor-pointer ${member.unread ? "bg-accent" : ""} hover:bg-accent/40 transition-colors m-4 rounded-lg ${
                  selectedMember?.id === member.id ? "bg-[#fd751f50]   " : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    height={60}
                    width={60}
                    className="w-12 mt-3 h-12 object-cover rounded-full"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-gray-900 truncate text-sm">
                        {member.name}
                      </p>
                      {member.unread > 0 && (
                        <span className="bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                          {member.unread}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-600 mt-0.5 truncate">
                      {member.lastMessage}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      <span className="inline-block bg-gray-100 px-2 py-0.5 rounded text-gray-700">
                        {member.tag}
                      </span>
                    </p>
                  </div>

                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {member.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-32 text-gray-500">
              No tasks found
            </div>
          )}
        </div>
      </div>

      {/* RIGHT – Chat Area */}
      <div className="flex-1 flex flex-col bg-white min-w-0 md:min-w-0">
        {selectedMember ? (
          <>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-white">
              <button
                onClick={() => setShowSidebarOnMobile(true)}
                className="text-gray-700 hover:text-gray-900"
              >
                <Menu size={20} />
              </button>
              <span className="text-sm font-medium text-gray-700 truncate">
                {selectedMember.name}
              </span>
            </div>
            {/* Top Task Info Banner */}
            <div className="bg-white py-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-4 md:px-6 border-b border-orange-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={saraAvatar}
                        alt={selectedMember.name}
                        height={60}
                        width={60}
                        className="w-12 h-12 object-cover rounded-full shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium leading-tight">
                          Sarah J.
                        </p>
                        <p className="text-xs text-gray-600">Provider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedMember.id == "1" && (
                <div className="mt-4 pt-4 bg-accent border-t border-orange-200 text-sm m-4 md:m-6 rounded-2xl p-4">
                  <div className="flex flex-col gap-4">
                    <div className="hidden md:flex gap-4 items-start">
                      <div className="h-10 w-10 bg-white rounded-lg border border-orange-200 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                            TASK {taskDetails.taskNumber}
                          </span>
                          <span className="text-xs bg-white border border-secondary text-secondary px-3 py-1 rounded-full font-medium">
                            {taskDetails.status}
                          </span>
                        </div>
                        <h2 className="text-xs text-gray-500 mt-1">
                          {taskDetails.title}
                        </h2>
                      </div>
                    </div>

                    {/* Task Info - Second Row (Responsive Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
                          Placement Domain
                        </p>
                        <p className="font-semibold text-gray-900 text-sm mt-0.5">
                          {taskDetails.domain}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
                          Authority
                        </p>
                        <p className="font-semibold text-gray-900 text-sm mt-0.5">
                          {taskDetails.authority}
                        </p>
                      </div>
                      <div className="flex items-end">
                        <Button
                          variant="white"
                          className="rounded-lg w-full md:w-auto text-secondary border border-secondary!"
                        >
                          <span className="text-xs md:text-sm">
                            VIEW TASK BRIEF
                          </span>{" "}
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4 bg-white">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 md:gap-3 ${
                    msg.sender === "you" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "provider" && (
                    <Image
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      height={60}
                      width={60}
                      className="w-10 md:w-12 h-10 md:h-12 object-cover rounded-full shrink-0"
                    />
                  )}
                  <div
                    className={`max-w-xs md:max-w-md rounded-xl px-3 md:px-4 py-2 md:py-3 bg-accent text-gray-900 border border-orange-100`}
                  >
                    <p className="text-xs md:text-sm leading-relaxed">
                      {msg.text}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-2">
                      <span className="text-xs opacity-70">{msg.time}</span>
                      {msg.sender === "you" && (
                        <Check size={14} className="opacity-80" />
                      )}
                    </div>
                  </div>
                  {msg.sender === "you" && (
                    <Image
                      src={saraAvatar}
                      alt={selectedMember.name}
                      height={60}
                      width={60}
                      className="w-8 md:w-8 h-8 md:h-8 object-cover rounded-full shrink-0"
                    />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t border-gray-200">
              {selectedMember.id == "1" && (
                <div className="hidden lg:block bg-accent border-b border-orange-200 px-4 md:px-6 py-3 md:py-4">
                  <div className="flex flex-col lg:flex-row flex-wrap lg:items-center justify-between gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="text-accent shrink-0" size={20} />
                      <span className="font-bold text-secondary uppercase text-xs md:text-sm tracking-wide">
                        Requester Approval Console
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 flex-wrap ">
                      <Button variant="white" className="text-xs md:text-sm">
                        <RotateCcw size={16} /> REQUEST REVISION
                      </Button>
                      <Button
                        variant="secondary"
                        className="rounded-lg text-xs md:text-sm"
                      >
                        APPROVE & RELEASE ESCROW <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="p-3 md:p-4 bg-white">
                <div className="flex items-center gap-2 md:gap-3 bg-gray-100 rounded-xl px-3 md:px-4 py-2 md:py-3 border border-gray-200 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary/20 transition-all">
                  <button className="text-gray-500 hover:text-secondary shrink-0 transition-colors hidden md:block">
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Write Something ..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 bg-transparent outline-none text-xs md:text-sm placeholder-gray-500"
                  />
                  <button className="text-gray-500 hover:text-secondary shrink-0 transition-colors hidden md:block">
                    <Mic size={20} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-secondary text-white rounded-full hover:bg-accent shrink-0 transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 px-4">
            Select a task to view conversation
          </div>
        )}
      </div>
    </div>
  );
}
