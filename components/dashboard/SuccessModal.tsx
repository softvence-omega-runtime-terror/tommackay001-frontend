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
    <div className="px-8 py-10 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-[#ECFDF3] flex items-center justify-center mb-5">
        <CheckCircle2 className="w-8 h-8 text-[#027A48]" />
      </div>

      <h3 className="text-2xl font-bold text-[#181d27] mb-3">{title}</h3>

      <p className="text-[#535862] text-sm leading-relaxed max-w-xs">
        {message}
      </p>

      <Link
        href={role}
        className="mt-8 bg-secondary hover:bg-[#d94118] text-white font-bold text-sm px-8 py-3 rounded-lg tracking-wide transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}
