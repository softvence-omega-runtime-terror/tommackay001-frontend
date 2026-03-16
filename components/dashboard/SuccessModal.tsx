import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type SuccessModalProps = {
  role: string;
  title?: string;
  message?: string;
  buttonText?: string;
};

export default function SuccessModal({
  role,
  title = "Submission Successful",
  message = "Your delivery has been submitted and is now awaiting requester review.",
  buttonText = "RETURN TO DASHBOARD",
}: SuccessModalProps) {
  return (
    <div className="p-4 md:p-8 py-6 md:py-10 flex flex-col items-center text-center">
      <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-[#ECFDF3] flex items-center justify-center mb-4 md:mb-5">
        <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-[#027A48]" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#181d27] mb-2 md:mb-3">
        {title}
      </h3>

      <p className="text-[#535862] text-xs md:text-sm leading-relaxed max-w-xs">
        {message}
      </p>

      <Link
        href={role}
        className="mt-6 md:mt-8 bg-secondary hover:bg-[#d94118] text-white font-bold text-xs md:text-sm px-6 md:px-8 py-2 md:py-3 rounded-lg tracking-wide transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}
