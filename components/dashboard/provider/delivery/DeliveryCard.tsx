"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Clock, Eye, MessageSquare } from "lucide-react";
import { StatusBadge } from "@/components/ui/common/StatusBadge";

import DeliveryAvailableModal from "./modals/DeliveryAvailableModal";
import DeliveryAppliedModal from "./modals/DeliveryAppliedModal";
import DeliverySubmittedModal from "./modals/DeliverySubmittedModal";
import DeliveryInProgressModal from "./modals/DeliveryInProgressModal";
import DeliveryCompletedModal from "./modals/DeliveryCompletedModal";

export type DeliveryItem = {
  title: string;
  requester: string;
  reward: string;
  timeLeft: string;
  status:
    | "AVAILABLE TO APPLY"
    | "APPLIED"
    | "SUBMITTED"
    | "IN PROGRESS"
    | "COMPLETED";
  image: StaticImageData | string;
};

type Props = {
  task: DeliveryItem;
};

export default function DeliveryCard({ task }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card row */}
      <div className="bg-white border border-[#e9eaeb] rounded-xl p-5 hover:shadow-sm transition-shadow">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] sm:grid-cols-6 items-center gap-4">
          {/* Title + requester */}
          <div className="flex col-span-2 gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
              <Image
                src={task.image}
                alt={task.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#181d27]">{task.title}</p>
              <p className="text-sm text-[#535862] mt-0.5">{task.requester}</p>
            </div>
          </div>

          {/* Reward */}
          <div className="text-center px-6">
            <p className="font-semibold mb-1 text-[#027A48] bg-[#ECFDF3] rounded w-full">
              {task.reward}
            </p>
            <p className="text-sm text-[#535862]">REWARD</p>
          </div>

          {/* Time left */}
          <div className="text-center text-sm">
            <div className="flex pb-1 justify-center text-[#535862] items-center gap-1">
              <Clock className="w-6 h-6" />
              <p className="font-medium text-[#181d27]">{task.timeLeft}</p>
            </div>
            TIME LEFT
          </div>

          {/* Status badge */}
          <div className="flex items-center justify-end gap-4">
            <StatusBadge status={task.status} />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="text-[#2AB516] hover:text-[#2fe912] cursor-pointer"
              aria-label="View delivery details"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              className="text-[#9E77ED] hover:text-primary cursor-pointer"
              aria-label="Open chat"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Status-specific modals — only the matching one mounts */}
      {task.status === "AVAILABLE TO APPLY" && (
        <DeliveryAvailableModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {task.status === "APPLIED" && (
        <DeliveryAppliedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {task.status === "SUBMITTED" && (
        <DeliverySubmittedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {task.status === "IN PROGRESS" && (
        <DeliveryInProgressModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {task.status === "COMPLETED" && (
        <DeliveryCompletedModal
          task={task}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
