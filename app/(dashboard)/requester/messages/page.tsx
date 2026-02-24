"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  MoreHorizontal,
  Check,
  Paperclip,
  Mic,
  Send,
  ArrowRight,
  ChevronRight,
  Shield,
  RotateCcw,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
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
    avatar: "SJ",
    avatarBg: "#8b5cf6",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 1,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "2",
    name: "Jude Bellingham",
    avatar: "JB",
    avatarBg: "#06b6d4",
    lastMessage: "Hi...",
    time: "1hr ago",
    unread: 0,
    tag: "WEBSITE.COM",
  },
  {
    id: "3",
    name: "Medyn Jr.",
    avatar: "MJ",
    avatarBg: "#10b981",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 0,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "4",
    name: "Vinicius Jr.",
    avatar: "VJ",
    avatarBg: "#8b5cf6",
    lastMessage: "Thanks for the project...",
    time: "2 min ago",
    unread: 0,
    tag: "TECHTRENDS.IO",
  },
  {
    id: "5",
    name: "Nora Alex",
    avatar: "NA",
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
    <div className="flex h-[80vh] bg-gray-50 font-sans overflow-hidden">
      {/* LEFT – Active Tasks List */}
      <div className="w-full lg:w-96 xl:w-120 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Active Tasks</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                SJ
              </div>
              <div>
                <p className="text-sm font-medium leading-tight">Sarah J.</p>
                <p className="text-xs text-gray-600">Provider</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <MoreHorizontal size={18} />
            </button>
          </div>
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
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 py-2 border-b flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              filter === "all"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              filter === "unread"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                onClick={() => setSelectedMember(member)}
                className={`px-4 py-3 border-b cursor-pointer hover:bg-orange-50/40 transition-colors ${
                  selectedMember?.id === member.id
                    ? "bg-orange-50 border-l-4 border-l-orange-500"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-semibold shrink-0"
                    style={{ backgroundColor: member.avatarBg }}
                  >
                    {member.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-gray-900 truncate text-sm">
                        {member.name}
                      </p>
                      {member.unread > 0 && (
                        <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">
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
      <div className="flex-1 flex flex-col bg-white min-w-0">
        {selectedMember ? (
          <>
            {/* Top Task Info Banner */}
            <div className="bg-white   py-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-6 border-b border-orange-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg border border-orange-200 flex items-center justify-center">
                    <FileText size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold uppercase tracking-wider text-orange-700">
                        TASK {taskDetails.taskNumber}
                      </span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                        {taskDetails.status}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mt-1">
                      {taskDetails.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 flex-wrap lg:flex-nowrap">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Placement Domain
                    </p>
                    <p className="font-semibold text-gray-900 text-sm mt-0.5">
                      {taskDetails.domain}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Authority
                    </p>
                    <p className="font-semibold text-gray-900 text-sm mt-0.5">
                      {taskDetails.authority}
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-accent hover:text-orange-700 hover:bg-orange-100/50 rounded-lg transition-colors">
                    VIEW TASK BRIEF <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 bg-accent border-t border-orange-200 flex items-center gap-6 flex-wrap text-sm m-6 rounded-2xl p-4">
                <div className="flex items-center gap-2.5">
                  <Shield size={18} className="text-emerald-500 shrink-0" />
                  <span className="font-semibold text-gray-800 uppercase tracking-wide text-xs">
                    Platform Escrow & Compliance Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                    {taskDetails.complianceTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                    TASK REQUIREMENTS SHARED BY REQUESTER
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                    SAT 18, 08:30AM
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                    PROVIDER ACCEPTED TASK - ESCROW ACTIVE
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                    SAT 18, 08:30AM
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
              {chatMessages.map((msg, idx) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.sender === "you" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "provider" && (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {selectedMember.avatar}
                    </div>
                  )}
                  <div
                    className={`max-w-md rounded-xl px-4 py-3 ${
                      msg.sender === "you"
                        ? "bg-orange-500 text-white"
                        : "bg-orange-50 text-gray-900 border border-orange-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-2">
                      <span className="text-xs opacity-70">{msg.time}</span>
                      {msg.sender === "you" && (
                        <Check size={14} className="opacity-80" />
                      )}
                    </div>
                  </div>
                  {msg.sender === "you" && (
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      You
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Approval Console + Input */}
            <div className="border-t border-gray-200">
              {/* Requester Approval Console */}
              <div className="bg-orange-50 border-b border-orange-200 px-6 py-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-accent shrink-0" size={20} />
                    <span className="font-bold text-orange-800 uppercase text-sm tracking-wide">
                      Requester Approval Console
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
                    <Button variant="white">
                      <RotateCcw size={16} /> REQUEST REVISION
                    </Button>
                    <Button variant="secondary" className="rounded-lg">
                      APPROVE & RELEASE ESCROW <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500/20 transition-all">
                  <button className="text-gray-500 hover:text-orange-500 shrink-0 transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Write Something ..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
                  />
                  <button className="text-gray-500 hover:text-orange-500 shrink-0 transition-colors">
                    <Mic size={20} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-orange-500 text-white rounded-full hover:bg-accent shrink-0 transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a task to view conversation
          </div>
        )}
      </div>
    </div>
  );
}
