"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import ViewTaskModal, { TaskDetail } from "./view/Viewtaskmodal";
import type { Website } from "@/app/(dashboard)/dashboard/websites/page";

type TaskTab = "requested" | "provided";

interface Task {
  name: string;
  type: "Follow" | "No-Follow";
  status: "In Progress" | "Completed" | "Pending";
  provider: string;
  created: string;
}

const REQUESTED_TASKS: Task[] = [
  {
    name: "Homepage backlink placement",
    type: "Follow",
    status: "In Progress",
    provider: "SaaSMarketing.io",
    created: "Jan 15, 2026",
  },
  {
    name: "Blog post guest article",
    type: "Follow",
    status: "Completed",
    provider: "TechBlog.com",
    created: "Jan 10, 2026",
  },
  {
    name: "Footer link exchange",
    type: "No-Follow",
    status: "Pending",
    provider: "StartupHub.co",
    created: "Jan 18, 2026",
  },
];

const PROVIDED_TASKS: Task[] = [
  {
    name: "Guest post on techtrends.net",
    type: "Follow",
    status: "Completed",
    provider: "SaaSMarketing.io",
    created: "Dec 20, 2025",
  },
  {
    name: "Niche edit insertion",
    type: "No-Follow",
    status: "In Progress",
    provider: "GrowthLabs.io",
    created: "Jan 05, 2026",
  },
];

const STATUS_STYLES: Record<Task["status"], string> = {
  "In Progress": "bg-[#EFF8FF] text-[#175CD3]",
  Completed: "bg-[#ECFDF3] text-[#027A48]",
  Pending: "bg-[#FFF6ED] text-[#B54708]",
};

const TYPE_STYLES: Record<Task["type"], string> = {
  Follow: "bg-[#EFF8FF] text-[#175CD3]",
  "No-Follow": "bg-[#f2f4f7] text-[#535862]",
};

type Props = {
  website: Website | null;
  open: boolean;
  onClose: () => void;
};

export default function WebsiteWorkspaceModal({
  website,
  open,
  onClose,
}: Props) {
  const [activeTab, setActiveTab] = useState<TaskTab>("requested");
  const [search, setSearch] = useState("");
  const [viewTask, setViewTask] = useState<TaskDetail | null>(null);
  const [viewTaskOpen, setViewTaskOpen] = useState(false);

  if (!website) return null;

  const tasks = activeTab === "requested" ? REQUESTED_TASKS : PROVIDED_TASKS;
  const filtered = tasks.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.provider.toLowerCase().includes(search.toLowerCase()),
  );

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setActiveTab("requested");
      setSearch("");
    }, 200);
  };

  const openViewTask = (task: Task) => {
    setViewTask({
      name: task.name,
      type: task.type,
      status: task.status,
      provider: task.provider,
      created: task.created,
      domain: website.domain,
    });
    setViewTaskOpen(true);
  };

  return (
    <>
      <ViewTaskModal
        task={viewTask}
        open={viewTaskOpen}
        onClose={() => {
          setViewTaskOpen(false);
          setViewTask(null);
        }}
      />

      <ModalShell
        open={open && !viewTaskOpen}
        onClose={handleClose}
        widthClass="max-w-4xl"
      >
        <div className="flex flex-col max-h-[90vh]">
          <div className="px-6 pt-6 pb-4 flex items-start gap-4 pr-14">
            <div className="w-12 h-12 rounded-xl bg-[#181d27] flex items-center justify-center text-white font-bold text-lg shrink-0">
              {website.domain[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#181d27]">
                {website.domain}
              </h2>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs font-semibold bg-[#ECFDF3] text-[#027A48] px-2.5 py-0.5 rounded-full border border-[#6CE9A6]">
                  Verified
                </span>
                <span className="text-sm text-[#535862] font-medium">
                  DR {website.dr}
                </span>
              </div>
            </div>
          </div>

          <div className="mx-6 bg-[#f9fafb] rounded-xl px-4 py-3 mb-4">
            <p className="text-xs text-[#9DA4AE] font-medium">
              Website Workspace
            </p>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm text-[#181d27]">
                Connected since {website.connectedSince}
              </p>
              <span className="text-xs font-semibold bg-white border border-[#e9eaeb] text-[#535862] px-2.5 py-0.5 rounded-full">
                {website.category}
              </span>
            </div>
          </div>

          <div className="mx-6 flex rounded-full bg-[#f2f4f7] p-1 mb-4">
            <button
              onClick={() => setActiveTab("requested")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "requested"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-[#535862] hover:text-[#181d27]"
              }`}
            >
              Requested Tasks
            </button>
            <button
              onClick={() => setActiveTab("provided")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "provided"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-[#535862] hover:text-[#181d27]"
              }`}
            >
              Provided Tasks
            </button>
          </div>

          <div className="mx-6 mb-3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9DA4AE]" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#e2e2e2] rounded-full text-sm text-[#535862] focus:outline-none focus:border-secondary placeholder:text-[#9DA4AE] bg-white"
            />
          </div>

          <div className="flex-1 overflow-y-auto mx-6 border border-[#e9eaeb] rounded-xl bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e9eaeb] bg-[#f9fafb]">
                  {[
                    "Task Name",
                    "Type",
                    "Status",
                    "Provider",
                    "Created",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-[#535862]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e9eaeb]">
                {filtered.length > 0 ? (
                  filtered.map((task) => (
                    <tr
                      key={task.name}
                      className="hover:bg-[#fafafa] transition-colors"
                    >
                      <td className="px-4 py-4 text-sm text-[#181d27] font-medium">
                        {task.name}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_STYLES[task.type]}`}
                        >
                          {task.type}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[task.status]}`}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-[#535862]">
                        {task.provider}
                      </td>
                      <td className="px-4 py-4 text-sm text-[#535862]">
                        {task.created}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => openViewTask(task)}
                          className="bg-secondary hover:bg-[#d94118] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                        >
                          View Task
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-10 text-center text-sm text-[#9DA4AE]"
                    >
                      No tasks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-[#e9eaeb] flex items-center justify-between mt-2">
            <p className="text-xs text-[#9DA4AE]">
              Each website maintains its own task history.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleClose}
                className="border border-[#e9eaeb] text-[#535862] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="flex items-center gap-1.5 bg-secondary hover:bg-[#d94118] text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                Create Task
              </button>
            </div>
          </div>
        </div>
      </ModalShell>
    </>
  );
}
