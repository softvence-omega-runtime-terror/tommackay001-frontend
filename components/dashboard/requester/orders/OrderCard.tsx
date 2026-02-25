"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, MessageSquare, Users } from "lucide-react";
import { StatusBadge } from "@/components/ui/common/StatusBadge";

import OrderInProgressModal from "./orderModals/OrderInProgressModal";
import OrderWaitingModal from "./orderModals/OrderWaitingModal";
import OrderCompletedModal from "./orderModals/OrderCompletedModal";
import ProviderProfileModal from "../../provider/profile/ProviderProfileModal";

export type OrderItem = {
  name: string;
  id: string;
  status: string;
  applicants: number;
  requester?: {
    name: string;
    avatar: string;
  } | null;
};

type Props = { order: OrderItem };

export default function OrderCard({ order }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="grid items-center px-8 py-5 text-sm hover:bg-[#fafafa] transition-colors"
        style={{ gridTemplateColumns: "2.5fr 1fr 1fr 1.5fr 1fr" }}
      >
        <div className="space-y-1">
          <p className="font-semibold text-[#181d27]">{order.name}</p>
          <p className="text-[#535862]">{order.id}</p>
        </div>

        <div className="flex justify-center">
          <StatusBadge status={order.status} />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-[#f5f5f5] px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-[#535862]" />
            <span className="font-semibold text-[#181d27]">
              {order.applicants}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {order.requester ? (
            <>
              <Image
                src={order.requester.avatar}
                alt={order.requester.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-semibold text-[#181d27]">
                {order.requester.name}
              </span>
            </>
          ) : (
            <span className="text-[#b2b5b4] font-semibold">NOT ASSIGNED</span>
          )}
        </div>

        <div className="flex justify-center gap-5">
          <button
            onClick={() => setOpen(true)}
            className="text-[#2AB516] hover:text-[#22a010] cursor-pointer transition-colors"
            aria-label="View order details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            className="text-[#9E77ED] hover:text-[#6366f1] cursor-pointer transition-colors"
            aria-label="Open chat"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>

      {order.status === "In Progress" && (
        <OrderInProgressModal
          order={order}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}

      {order.status === "WAITING FOR APPLICANTS" && (
        <OrderWaitingModal
          order={order}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}

      {order.status === "Applied" && (
        // <DeliveryAppliedModal
        //   task={task}
        //   open={open}
        //   onClose={() => setOpen(false)}
        // />
        <ProviderProfileModal
          open={open}
          provider={order}
          onClose={() => setOpen(false)}
        />
      )}

      {order.status === "Completed" && (
        <OrderCompletedModal
          order={order}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
