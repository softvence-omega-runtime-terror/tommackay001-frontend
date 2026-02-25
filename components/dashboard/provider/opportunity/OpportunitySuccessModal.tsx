import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface OpportunitySuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OpportunitySuccessModal({
  isOpen,
  onClose,
}: OpportunitySuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Content */}
        <div className="flex flex-col items-center justify-center py-12 px-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-[#181d27] mb-2 text-center">
            Application Submitted
          </h2>

          {/* Description */}
          <p className="text-center text-[#535862] text-sm mb-8">
            Your application was submitted to “Alpha Brands Inc.”
          </p>

          {/* Action Button */}
          <Button
            onClick={onClose}
            className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-3 rounded-xl font-semibold"
          >
            RETURN TO DASHBOARD
          </Button>
        </div>
      </div>
    </div>
  );
}
