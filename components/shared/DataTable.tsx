import React from "react";
import { Card } from "@/components/ui/Card";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

const DataTable = <T extends { id?: string | number }>({
  data,
  columns,
  onRowClick,
}: DataTableProps<T>) => {
  return (
    <Card className="border border-gray-100 bg-white rounded-[32px] shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-50 bg-gray-50/5">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest ${col.className}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((item, i) => (
              <tr
                key={item.id || i}
                onClick={() => onRowClick?.(item)}
                className={`hover:bg-gray-50/50 transition-colors group cursor-pointer`}
              >
                {columns.map((col, j) => (
                  <td key={j} className={`px-8 py-6 ${col.className}`}>
                    {typeof col.accessor === "function"
                      ? col.accessor(item)
                      : (item[col.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DataTable;
