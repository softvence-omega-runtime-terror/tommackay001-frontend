"use client";

import { useRole } from "@/context/RoleContext";
import ProviderDashboardHome from "@/components/dashboard/provider/ProviderDashboardHome";
import RequesterDashboardHome from "@/components/dashboard/requester/RequesterDashboardHome";

export default function DashboardPage() {
  const { role } = useRole();

  return role === "provider" ? (
    <ProviderDashboardHome />
  ) : (
    <RequesterDashboardHome />
  );
}
