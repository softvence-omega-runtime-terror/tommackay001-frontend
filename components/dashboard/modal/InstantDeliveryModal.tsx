"use client";

import {
  useState,
  useRef,
  type DragEvent,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import {
  X,
  Search,
  Link2,
  AlertCircle,
  Zap,
  Upload,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import DeliverySuccessModal from "./DeliverySuccessModal";
import { FulfillmentProposalModal } from "./FulfillmentProposalModal";

interface Task {
  id: number;
  label: string;
}

interface InstantDeliveryModalProps {
  onClose: () => void;
}

const ACTIVE_TASKS: Task[] = [
  { id: 1, label: "High Authority SaaS Guest Post Placement" },
  { id: 2, label: "Niche Edit - Marketing Blog DR 60+" },
  { id: 3, label: "Technology Blog Link Insertion" },
];

export function InstantDeliveryModal({ onClose }: InstantDeliveryModalProps) {
  const [taskQuery, setTaskQuery] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showTaskDropdown, setShowTaskDropdown] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [proofUrl, setProofUrl] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [showProposal, setShowProposal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredTasks: Task[] = ACTIVE_TASKS.filter((t) =>
    t.label.toLowerCase().includes(taskQuery.toLowerCase()),
  );

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleDropZoneClick = () => fileInputRef.current?.click();

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles((prev) => [...prev, ...Array.from(e.target.files as FileList)]);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskQuery(e.target.value);
    setSelectedTask(null);
    setShowTaskDropdown(true);
  };

  const handleTaskInputClick = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowTaskDropdown(true);
  };

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
    setTaskQuery("");
    setShowTaskDropdown(false);
  };

  const handleToggleDropdown = () => setShowTaskDropdown((v) => !v);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);
  const handleProofUrlChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProofUrl(e.target.value);
  const handleAdditionalNotesChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAdditionalNotes(e.target.value);

  const handleSaveDraft = () => {
    setShowProposal(true);
  };
  const handleSubmitDelivery = () => setShowSuccess(true);
  const handleProposalSubmit = () => {
    setShowProposal(false);
    setShowSuccess(true);
  };
  const handleCloseProposal = () => onClose;

  const handleBackdropClick = () => onClose();
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  if (showSuccess) {
    return <DeliverySuccessModal onClose={onClose} />;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 flex flex-col max-h-[95vh]"
          onClick={handleContentClick}
        >
          <div className="px-7 pt-6 pb-5 flex items-center justify-between border-b border-[#f0f0f0] shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fd751f] flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-white fill-white" />
              </div>
              <h1 className="text-xl font-black text-[#181d27] tracking-tight uppercase">
                Instant Submit Delivery
              </h1>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-[#e9eaeb] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors"
            >
              <X className="w-4 h-4 text-[#717680]" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2 relative">
              <label className="text-xs font-bold text-[#181d27] uppercase tracking-widest">
                Select Task to Deliver
              </label>
              <div
                className={`flex items-center gap-3 border rounded-xl px-4 py-3 bg-white transition-colors cursor-pointer ${
                  showTaskDropdown
                    ? "border-[#fd751f]"
                    : "border-[#e9eaeb] hover:border-[#d5d7da]"
                }`}
                onClick={handleToggleDropdown}
              >
                <Search className="w-4 h-4 text-[#a4a7ae] shrink-0" />
                <input
                  type="text"
                  placeholder="Choose an active task..."
                  value={selectedTask ? selectedTask.label : taskQuery}
                  onChange={handleTaskInputChange}
                  onClick={handleTaskInputClick}
                  className="flex-1 text-sm text-[#181d27] placeholder-[#a4a7ae] outline-none bg-transparent cursor-text"
                />
              </div>
              {showTaskDropdown && filteredTasks.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e9eaeb] rounded-xl shadow-lg z-10 overflow-hidden">
                  {filteredTasks.map((task) => (
                    <button
                      key={task.id}
                      type="button"
                      className="w-full text-left px-4 py-3 text-sm text-[#181d27] hover:bg-[#fff7ed] hover:text-[#fd751f] transition-colors flex items-center gap-2"
                      onClick={() => handleSelectTask(task)}
                    >
                      <FileText className="w-4 h-4 text-[#a4a7ae]" />
                      {task.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#181d27] uppercase tracking-widest">
                Delivery Message
              </label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Write a brief submission note the requester..."
                rows={4}
                className="w-full bg-[#f9f9f9] border border-[#e9eaeb] rounded-xl px-4 py-3 text-sm text-[#181d27] placeholder-[#a4a7ae] outline-none resize-none focus:border-[#fd751f] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#181d27] uppercase tracking-widest">
                Proof Attachments
              </label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleDropZoneClick}
                className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                  dragOver
                    ? "border-[#fd751f] bg-[#fff7ed]"
                    : "border-[#e0e0e0] bg-[#f9f9f9] hover:border-[#c5c5c5] hover:bg-[#f5f5f5]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    dragOver ? "bg-[#fd751f]/10" : "bg-[#f0f0f0]"
                  }`}
                >
                  <Upload
                    className={`w-6 h-6 transition-colors ${dragOver ? "text-[#fd751f]" : "text-[#a4a7ae]"}`}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#414651] uppercase tracking-wide">
                    Drag &amp; Drop Files Here
                  </p>
                  <p className="text-xs text-[#a4a7ae] mt-1">
                    Upload screenshots, reports, or source files as proof of
                    completion. (Up to 100 MB)
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>
              {files.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-1">
                  {files.map((file, i) => (
                    <div
                      key={`${file.name}-${i}`}
                      className="flex items-center justify-between bg-[#f5f5f5] border border-[#e9eaeb] rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="w-4 h-4 text-[#fd751f] shrink-0" />
                        <span className="text-xs font-medium text-[#414651] truncate">
                          {file.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(i)}
                        className="w-5 h-5 rounded-full bg-[#e9eaeb] flex items-center justify-center hover:bg-[#d5d7da] transition-colors shrink-0 ml-2"
                      >
                        <X className="w-3 h-3 text-[#717680]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#181d27] uppercase tracking-widest">
                  Proof URL (Optional)
                </label>
                <div
                  className={`flex items-center gap-2.5 border rounded-xl px-3 py-3 bg-white transition-colors ${
                    proofUrl ? "border-[#fd751f]" : "border-[#e9eaeb]"
                  }`}
                >
                  <Link2 className="w-4 h-4 text-[#a4a7ae] shrink-0" />
                  <input
                    type="url"
                    placeholder="https://google.drive/....."
                    value={proofUrl}
                    onChange={handleProofUrlChange}
                    className="flex-1 text-sm text-[#181d27] placeholder-[#a4a7ae] outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#181d27] uppercase tracking-widest">
                  Additional Notes (Optional)
                </label>
                <div
                  className={`flex items-center gap-2.5 border rounded-xl px-3 py-3 bg-white transition-colors ${
                    additionalNotes ? "border-[#fd751f]" : "border-[#e9eaeb]"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Password for archives, etc..."
                    value={additionalNotes}
                    onChange={handleAdditionalNotesChange}
                    className="flex-1 text-sm text-[#181d27] placeholder-[#a4a7ae] outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-7 py-4 border-t border-[#f0f0f0] flex items-center justify-between gap-4 bg-[#fafafa] rounded-b-2xl shrink-0">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#717680] shrink-0" />
              <p className="text-xs font-semibold text-[#717680] uppercase tracking-wide">
                Submission is final. Ensure all files are correct.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="bg-[#f5f5f5] border cursor-pointer rounded-lg  border-[#e9eaeb] hover: transition-colors text-[#414651] font-bold text-sm px-6 py-2.5 "
              >
                SAVE DRAFT
              </button>
              <Button
                variant="secondary"
                type="button"
                onClick={handleSubmitDelivery}
                className="rounded-lg "
              >
                <Zap className="w-4 h-4 fill-white" />
                SUBMIT DELIVERY
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showProposal && (
        <FulfillmentProposalModal
          taskLabel={selectedTask?.label}
          onClose={handleCloseProposal}
          onSubmit={handleProposalSubmit}
        />
      )}
    </>
  );
}
