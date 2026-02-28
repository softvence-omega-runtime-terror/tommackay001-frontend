import DeliveryCard, { DeliveryItem } from "./DeliveryCard";
import Pagination from "@/components/ui/Pagination";

type Props = {
  title?: string;
  deliveries: DeliveryItem[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ActiveDeliveries({
  title = "Active Deliveries",
  deliveries,
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="md:text-2xl font-semibold font-sora text-[#181d27]">
          {title} ({deliveries.length})
        </h2>
      </div>

      {/* Scroll Wrapper */}
      <div className="w-full overflow-x-auto mt-4">
        <div className="min-w-[900px] space-y-4">
          {deliveries.map((task, i) => (
            <DeliveryCard key={i} task={task} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          className="w-full"
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
