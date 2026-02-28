"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { OrderItem } from "@/components/dashboard/requester/orders/OrderCard";
import RecentOrders from "@/components/dashboard/requester/orders/RecentOrders";

const recentActivity: OrderItem[] = [
  {
    name: "High-Authority Backlink Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    requester: { name: "Olivia Rhye", avatar: "/avatar/oli.png" },
  },
  {
    name: "Guest Post & Outreach Specialist",
    id: "#1249",
    status: "Completed",
    applicants: 8,
    requester: { name: "Phoenix Baker", avatar: "/avatar/phoenix.png" },
  },
  {
    name: "White-Hat Link Building Expert",
    id: "#1249",
    status: "WAITING FOR APPLICANTS",
    applicants: 8,
    requester: { name: "Natali Craig", avatar: "/avatar/oli.png" },
  },
  {
    name: "Content Placement Provider",
    id: "#1249",
    status: "In Progress",
    applicants: 8,
    requester: { name: "Lyle Kauffman", avatar: "/avatar/phoenix.png" },
  },
  {
    name: "Niche Edit",
    id: "#3310",
    status: "Applied",
    applicants: 1,
    requester: null,
  },
];

const RequesterOrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col gap-6 font-inter max-w-[98vw]">
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-[24px] md:text-[30px] font-semibold font-sora text-[#181d27] leading-none">
              My Orders
            </h1>
            <p className="text-sm font-medium text-[#535862] mt-1">
              Browse available placements, manage assigned work, and submit live
              links.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#535862]" />
            <input
              type="text"
              placeholder="Search by site, ID, or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" pl-11 pr-4 py-3 w-[90vw] md:w-full bg-white border border-[#e2e2e2] rounded-full text-sm focus:outline-none focus:border-[#6366f1] placeholder:text-[#535862]"
            />
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="flex flex-col gap-5 bg-white  rounded-2xl max-w-[90vw]">
        <RecentOrders
          title="Recent Activity"
          role="PROVIDER"
          orders={recentActivity}
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </div>
  );
};

export default RequesterOrderPage;
