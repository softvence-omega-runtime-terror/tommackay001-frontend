import { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How are publishers verified on Backlyst?",
    a: "Every publisher undergoes a rigorous 12-point verification process including DR metrics, organic traffic auditing, and manual content quality checks by our internal SEO team.",
  },
  {
    q: "Can I request custom anchor or content?",
    a: "Absolutely! When creating a task, you have full control over anchor text, surrounding content guidelines, and even the writer's tone and style preferences.",
  },
  {
    q: "How does the audit process system work?",
    a: "Our system continuously monitors your link status. If a link drops or metrics change significantly within the guarantee period, a replacement protocol is automatically triggered.",
  },
  {
    q: "What happens if a link is removed?",
    a: "All professional and enterprise plans include our Link Replacement Guarantee. If a link is removed within 12 months, we will reach out to the provider or provide a comparable alternative at no extra cost.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-25 px-6 bg-[#fdfdff]" id="faq">
      <div className="max-w-189.25 mx-auto flex flex-col gap-10 items-center justify-center">
        {/* Heading */}
        <h2 className="font-sora font-semibold text-[48px] leading-15 tracking-[-0.96px] text-gray-900 text-center">
          Frequently Asked
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4 w-full ">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#FAFAFA] cursor-pointer rounded-[10px] border border-gray-200 shadow-[0_0_10px_0_rgba(161,152,254,0.1)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-inter font-semibold text-base leading-6 text-gray-700">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 cursor-pointer">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="font-inter font-normal text-sm leading-5 text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
