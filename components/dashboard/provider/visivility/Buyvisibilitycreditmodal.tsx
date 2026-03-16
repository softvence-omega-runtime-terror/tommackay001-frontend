"use client";

import { useState } from "react";
import {
  Database,
  CreditCard,
  Landmark,
  Lock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import ModalShell from "@/components/dashboard/provider/delivery/modals/ModalShell";
import { Button } from "@/components/ui/Button";

type PaymentMethod = "card" | "bank";
type Screen = "form" | "success";

type Props = {
  open: boolean;
  onClose: () => void;
};

const QUICK_AMOUNTS = [100, 500, 1000];

export default function BuyVisibilityCreditModal({ open, onClose }: Props) {
  const [screen, setScreen] = useState<Screen>("form");
  const [amount, setAmount] = useState("500");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const confirmedAmount = amount || "0";

  const handleConfirm = () => setScreen("success");

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setScreen("form");
      setAmount("500");
      setPaymentMethod("card");
    }, 200);
  };

  return (
    <ModalShell
      open={open}
      onClose={handleClose}
      widthClass={` ${screen === "form" ? "max-w-3xl" : "max-w-sm"}`}
      maxHeightClass={` ${screen === "form" ? "max-w-3xl" : "h-80"}`}
      minHeightClass={` ${screen === "form" ? "min-h-20" : "h-110"}`}
    >
      {screen === "form" ? (
        <FormScreen
          amount={amount}
          setAmount={setAmount}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          onCancel={handleClose}
          onConfirm={handleConfirm}
        />
      ) : (
        <SuccessScreen amount={confirmedAmount} onClose={handleClose} />
      )}
    </ModalShell>
  );
}

type FormProps = {
  amount: string;
  setAmount: (v: string) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (v: PaymentMethod) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

function FormScreen({
  amount,
  setAmount,
  paymentMethod,
  setPaymentMethod,
  onCancel,
  onConfirm,
}: FormProps) {
  return (
    <div className="flex flex-col max-w-3xl">
      <div className="px-6 pt-6 pb-5  flex items-start gap-4 pr-12">
        <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] border border-[#FDCFBE] flex items-center justify-center shrink-0">
          <Database className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h2 className="md:text-xl font-bold text-[#181d27]">
            Add Credits to Wallet
          </h2>
          <p className="text-xs font-semibold text-[#535862] uppercase md:tracking-widest mt-0.5">
            Secure Institutional Funding
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 py-1 space-y-5">
        <p className=" text-gray-900 mb-3">
          Credits are used for escrow deployment, task allocation , and
          automated settlements within the backlyst ecosystem.
        </p>

        <div className="space-y-4 md:space-y-0 md:flex justify-between max-w-md px-8 py-4">
          {/* Option 1 */}
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="option"
              className="appearance-none w-5 h-5 rounded-full border-2 border-secondary 
                 checked:bg-[#fd751f] checked:ring-2 checked:ring-inset 
                 checked:ring-white focus:outline-none transition-all cursor-pointer"
            />
            <span className="text-sm font-medium">Credits</span>
          </label>

          {/* Option 2 */}
          <label className="flex items-center space-x-2 cursor-pointer ">
            <input
              type="radio"
              name="option"
              className="appearance-none w-5 h-5 rounded-full border-2 border-secondary 
                 checked:bg-[#fd751f] checked:ring-2 checked:ring-inset 
                 checked:ring-white focus:outline-none transition-all cursor-pointer"
            />
            <span className="text-sm font-medium">Visibility Credits</span>
          </label>
        </div>
      </div>

      <div className="px-6 py-5 space-y-3">
        <div className="text-sm font-medium text-[#535862] uppercase tracking-wide">
          ENTER CREDIT AMOUNT
        </div>
        <div className="flex items-center justify-between border border-[#e9eaeb] rounded-xl px-5 py-4">
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-2xl font-semibold text-[#535862] bg-transparent outline-none w-full"
            placeholder="0"
          />
          <span className="text-xl font-semibold text-[#535862] ml-4">CR</span>
        </div>

        <div>
          <p className="text-md font-bold uppercase tracking-widest text-[#535862] mb-3">
            Historical Performance
          </p>
          <div className="grid md:grid-cols-2 gap-3 cursor-pointer">
            <PaymentCard
              active={paymentMethod === "card"}
              onClick={() => setPaymentMethod("card")}
              icon={<CreditCard className="w-6 h-6" />}
              label="Credit 1 Debit Card"
            />
            <PaymentCard
              active={paymentMethod === "bank"}
              onClick={() => setPaymentMethod("bank")}
              icon={<Landmark className="w-6 h-6" />}
              label="Bank Transfer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {QUICK_AMOUNTS.map((qty) => (
              <button
                key={qty}
                onClick={() => setAmount(String(qty))}
                className={`px-4 py-2 cursor-pointer rounded-lg border text-sm font-semibold transition-colors ${
                  Number(amount) === qty
                    ? "border-secondary bg-[#FFF4ED] text-secondary"
                    : "border-[#e9eaeb] text-[#535862] hover:border-secondary hover:text-secondary"
                }`}
              >
                +{qty} CR
              </button>
            ))}
          </div>
          <p className="text-xs text-[#9DA4AE]">
            1 Credit = 1 USD (used internally for platform settlements)
          </p>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl p-5 space-y-3 max-w-md mx-auto">
          <p className="text-sm font-bold text-[#181d27] uppercase tracking-wide">
            Security &amp; Compliance Protocol
          </p>
          {[
            "Funds are held in institutional escrow",
            "Ledger transactions are encrypted and audited",
            "All credit additions are immutable once confirmed",
          ].map((line) => (
            <div
              key={line}
              className="flex items-start gap-3 text-sm text-[#535862]"
            >
              <Lock className="w-4 h-4 text-[#4169E1] shrink-0 mt-0.5" />
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex flex-col md:flex-row gap-3 w-full border justify-between">
        <Button variant="white" onClick={onCancel} className=" border-none">
          CANCEL
        </Button>
        <Button variant="secondary" onClick={onConfirm} className="rounded-md">
          CONFIRM &amp; ADD CREDITS
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function SuccessScreen({
  amount,
  // onClose,
}: {
  amount: string;
  onClose: () => void;
}) {
  return (
    <div className="px-8 py-16 flex flex-col items-center text-center max-w-md">
      <div className="w-14 h-14 rounded-full bg-[#ECFDF3] flex items-center justify-center mb-6 cursor-pointer">
        <CheckCircle2 className="w-8 h-8 text-[#027A48]" />
      </div>

      <h3 className="text-2xl font-bold text-[#181d27]">
        Capital Ledger Updated
      </h3>

      <p className="text-xs  text-[#535862] mt-3 md:leading-relaxed max-w-sm">
        Credits successfully added to your Capital Ledger.
        <br />
        Your balance Will reflect this change immediately.
      </p>

      <div className="w-full border  border-[#e9eaeb] rounded-xl px-6 py-5  mt-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#535862]">
          Transaction Proof
        </p>
        <p className="text-3xl font-bold text-[#181d27] mt-2">
          +{Number(amount).toFixed(2)} CR
        </p>
      </div>
    </div>
  );
}

function PaymentCard({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col cursor-pointer max-w-3xl gap-3 p-5 rounded-xl border-2 text-left transition-colors ${
        active
          ? "border-secondary bg-white"
          : "border-[#e9eaeb] bg-white hover:border-secondary/40"
      }`}
    >
      <span className={active ? "text-secondary" : "text-[#9DA4AE]"}>
        {icon}
      </span>
      <span
        className={`text-sm font-bold uppercase tracking-wide ${
          active ? "text-secondary" : "text-[#181d27]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
