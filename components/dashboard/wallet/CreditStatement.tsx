import { Button } from "@/components/ui/Button";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  FileDown,
  ListRestart,
} from "lucide-react";

export default function CreditStatement() {
  const transactions = [
    {
      date: "Oct 12, 2026 10:42 AM",
      description: "Project Allocation: techtrends.io Outreach",
      tx: "TXN-072A-X",
      status: "FINALIZED",
      amount: 120.0,
      type: "received",
    },
    {
      date: "Oct 10, 2026 10:42 AM",
      description: "Capital Injection: Secure Credit Purchase",
      tx: "TXN-072A-X",
      status: "COMPLETED",
      amount: -120.0,
      type: "payment",
    },
    {
      date: "Oct 12, 2026 10:42 AM",
      description: "Affiliate Settlement: Partner Activation #8912",
      tx: "TXN-072A-X",
      status: "CREDITED",
      amount: 45.0,
      type: "received",
    },
    {
      date: "Oct 05, 2026 10:42 AM",
      description: "Escrow Deployment: authorityblog.com Placement",
      tx: "TXN-072A-X",
      status: "IN ESCROW",
      amount: -120.0,
      type: "payment",
    },
    {
      date: "Oct 28, 2026 10:42 AM",
      description: "Capital Injection: Secure Credit Purchase",
      tx: "TXN-072A-X",
      status: "REFUNDED",
      amount: 120.0,
      type: "received",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <div className="border-b border-purple-100 bg-white rounded-xl">
        <div className="px-6 py-5 ">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ListRestart />
              <span className="">Credit Statement</span>
            </h2>

            <div className="flex items-center gap-2 border  p-2 rounded-full border-secondary bg-amber-600/20">
              {["ALL", "PAYMENTS", "RECEIVED", "REFUNDS"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-1.5 text-sm cursor-pointer font-medium rounded-full transition ${
                    tab === "ALL"
                      ? "bg-secondary text-white"
                      : "text-secondary hover:bg-purple-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="w-full text-sm">
            <thead className=" border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  TIMESTAMP (UTC)
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  CAPITAL ALLOCATION DETAILS
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  LIFECYCLE STATUS
                </th>
                <th className="px-6 py-4 text-right font-semibold text-gray-700">
                  SETTLEMENT (CR)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((tx, i) => (
                <tr key={i} className="hover:bg-gray-50/70 transition">
                  <td className="px-6 py-4 text-gray-600">{tx.date}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <div className="">
                      {tx.type === "received" ? (
                        <div className="text-green-600 bg-green-600/20 p-2 rounded-full font-normal">
                          <ArrowUpRight />
                        </div>
                      ) : (
                        <div className="text-red-600 bg-red-500/20 p-2 rounded-full">
                          <ArrowDownRight />
                        </div>
                      )}
                    </div>
                    <div className=" gap-2">
                      <div className="font-medium text-gray-900">
                        {tx.description}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Received • {tx.tx}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        tx.status === "FINALIZED" || tx.status === "COMPLETED"
                          ? "bg-green-100 text-green-800"
                          : tx.status === "CREDITED" || tx.status === "RECEIVED"
                            ? "bg-blue-100 text-blue-800"
                            : tx.status === "IN ESCROW"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    <span
                      className={
                        tx.amount > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {tx.amount > 0 ? "+" : ""}
                      {tx.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition">
            <Download size={16} />
            CSV Export
          </button>
          <Button className="flex items-center gap-1.5 px-4 py-2 bg-secondary hover:bg-secondary text-white rounded-lg font-medium transition">
            <FileDown size={16} />
            Statement PDF
          </Button>
        </div>
      </div>
      <p className="max-w-3xl text-center mx-auto text-[#A4A7AE]">
        CAPITAL SETTLEMENTS AND ESCROW DEPLOYMENTS ARE GOVERNED BY BACKLYST.
        INSTITUTIONAL FULFILLMENT PROTOCOLS AND AUTOMATED FINANCIAL GOVERNANCE
        POLICIES.
      </p>
    </div>
  );
}
