import React, { useState } from "react";
import {
  X,
  Globe,
  Layers,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code,
  FileImage,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

interface ConnectWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ConnectWebsiteModal: React.FC<ConnectWebsiteModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState("meta");
  const [formData, setFormData] = useState({
    url: "",
    industry: "",
    country: "",
  });

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleComplete = () => {
    onSuccess?.();
    onClose();
    // Reset state
    setStep(1);
    setFormData({ url: "", industry: "", country: "" });
    setSelectedMethod("meta");
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (!isOpen) return null;

  const renderStep1 = () => (
    <>
      <div className="w-12 h-12 bg-[#e0eaff] border-8 border-[#ebe9ff] rounded-xl flex items-center justify-center mx-auto">
        <ShieldCheck size={24} className="text-primary" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold font-sora text-gray-900">
          Connect your website
        </h2>
        <p className="text-sm text-gray-500">
          To begin building or offering placements, we need to index your
          domain&apos;s authority metrics.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 uppercase">
            Website URL
          </Label>
          <div className="relative">
            <Globe
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="https://example.com"
              className="pl-10 h-11 rounded-lg border-gray-200"
              value={formData.url}
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 uppercase">
              Industry
            </Label>
            <div className="relative">
              <Layers
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <select
                className="w-full pl-10 pr-4 h-11 bg-white border border-gray-200 rounded-lg text-sm appearance-none cursor-pointer"
                value={formData.industry}
                onChange={(e) =>
                  setFormData({ ...formData, industry: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="tech">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                <option value="health">Health & Wellness</option>
                <option value="ecommerce">E-commerce</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 uppercase">
              Country
            </Label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <select
                className="w-full pl-10 pr-4 h-11 bg-white border border-gray-200 rounded-lg text-sm appearance-none cursor-pointer"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <Button
          onClick={handleContinue}
          disabled={!formData.url || !formData.industry || !formData.country}
          className="w-full h-11 bg-[#331ffd] hover:bg-[#2815d6] text-white font-semibold rounded-lg flex items-center justify-center gap-2"
        >
          CONTINUE TO VERIFICATION <ArrowRight size={18} />
        </Button>
        <button
          onClick={onClose}
          className="w-full text-sm font-medium text-gray-500 hover:text-gray-700 uppercase tracking-wide"
        >
          Cancel
        </button>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="w-12 h-12 bg-[#e0eaff] border-8 border-[#ebe9ff] rounded-xl flex items-center justify-center mx-auto">
        <ShieldCheck size={24} className="text-primary" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold font-sora text-gray-900">
          Verify your website
        </h2>
        <p className="text-sm text-gray-500">
          Choose a verification method to prove ownership and activate your
          placement.
        </p>
      </div>

      <div className="space-y-3">
        {/* HTML Meta Tag */}
        <div
          onClick={() => setSelectedMethod("meta")}
          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
            selectedMethod === "meta"
              ? "border-[#7a5af8] bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <Code
            size={20}
            className={
              selectedMethod === "meta" ? "text-[#7a5af8]" : "text-gray-400"
            }
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">HTML Meta Tag</p>
            <p className="text-xs text-gray-500">
              Add a meta tag to the head section of your homepage.
            </p>
          </div>
          {selectedMethod === "meta" && (
            <CheckCircle2 size={20} className="text-[#7a5af8]" />
          )}
        </div>

        {selectedMethod === "meta" && (
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
              Copy and paste this code:
            </p>
            <code className="text-xs text-white break-all">
              &lt;meta name=&quot;backlyst-verification&quot;
              content=&quot;b1_9a2f1b8415412&quot; /&gt;
            </code>
          </div>
        )}

        {/* DNS TXT */}
        <div
          onClick={() => setSelectedMethod("dns")}
          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
            selectedMethod === "dns"
              ? "border-[#7a5af8] bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <Globe
            size={20}
            className={
              selectedMethod === "dns" ? "text-[#7a5af8]" : "text-gray-400"
            }
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              DNS TXT Record
            </p>
            <p className="text-xs text-gray-500">
              Add a TXT record to your DNS configuration.
            </p>
          </div>
          {selectedMethod === "dns" && (
            <CheckCircle2 size={20} className="text-[#7a5af8]" />
          )}
        </div>

        {selectedMethod === "dns" && (
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
              Add this TXT record:
            </p>
            <code className="text-xs text-white break-all">
              backlyst-verification=b1_9a2f1b8415412
            </code>
          </div>
        )}

        {/* Screenshot */}
        <div
          onClick={() => setSelectedMethod("screenshot")}
          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
            selectedMethod === "screenshot"
              ? "border-[#7a5af8] bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <FileImage
            size={20}
            className={
              selectedMethod === "screenshot"
                ? "text-[#7a5af8]"
                : "text-gray-400"
            }
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              Screenshot Proof
            </p>
            <p className="text-xs text-gray-500">
              Upload a screenshot of your site admin dashboard.
            </p>
          </div>
          {selectedMethod === "screenshot" && (
            <CheckCircle2 size={20} className="text-[#7a5af8]" />
          )}
        </div>

        {selectedMethod === "screenshot" && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <FileImage size={24} className="text-[#7a5af8] mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        )}
      </div>

      <div className="pt-4 space-y-3">
        <Button
          onClick={handleContinue}
          className="w-full h-11 bg-[#331ffd] hover:bg-[#2815d6] text-white font-semibold rounded-lg"
        >
          VERIFY WEBSITE
        </Button>
        <button
          onClick={handleBack}
          className="w-full text-sm font-medium text-gray-500 hover:text-gray-700 uppercase tracking-wide"
        >
          Back to Details
        </button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 size={32} className="text-green-500" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold font-sora text-gray-900">
          Website Connected!
        </h2>
        <p className="text-sm text-gray-500">
          Your website <span className="font-semibold">{formData.url}</span> has
          been successfully added and is pending verification.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Domain</span>
          <span className="font-medium text-gray-900">{formData.url}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Status</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-medium">
            PENDING VERIFICATION
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Verification Method</span>
          <span className="font-medium text-gray-900 capitalize">
            {selectedMethod === "meta"
              ? "HTML Meta Tag"
              : selectedMethod === "dns"
                ? "DNS TXT Record"
                : "Screenshot Proof"}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Verification usually takes 24-48 hours. You&apos;ll receive an email
        once your website is verified.
      </p>

      <Button
        onClick={handleComplete}
        className="w-full h-11 bg-[#331ffd] hover:bg-[#2815d6] text-white font-semibold rounded-lg"
      >
        DONE
      </Button>
    </>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="bg-[#fff1e9] text-[#fd751f] text-xs font-medium px-2 py-1 rounded-full">
              STEP {step} OF 3
            </span>
            <span className="text-sm font-medium text-gray-600">
              {step === 1
                ? "Website Details"
                : step === 2
                  ? "Verification"
                  : "Complete"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-100">
          <div
            className="h-full bg-[#fd751f] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>
      </div>
    </div>
  );
};

export default ConnectWebsiteModal;
