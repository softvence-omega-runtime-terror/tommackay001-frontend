import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  {
    q: "How many credits does a backlink or guest post cost?",
    a: "A backlink costs 1 task credit. A guest post costs 2 task credits because it provides greater SEO value. Domain Authority (DA) does not affect credit cost. Credits are only deducted after the backlink or guest post is verified and accepted by the receiving user.",
  },
  {
    q: "How can I earn additional task credits?",
    a: "You can earn task credits in three ways: (1) Weekly contribution: +1 task credit per verified backlink. (2) Milestones: Every 10 verified backlinks earns +1 bonus credit. (3) Referrals: The referrer earns +1 credit after the referred user posts their first verified backlink, and the new confirmed paid user earns +2 credits after their first verified backlink. Referral rewards are limited to one per confirmed user.",
  },
  {
    q: "How does marketplace visibility work?",
    a: "To remain visible in the marketplace, you must post at least 1 verified backlink per week. If missed, there is a 2-day grace period before visibility pauses. Visibility credits (£9.99 each) can extend marketplace exposure by 7 days per credit. Posting a verified backlink restores visibility for free. DA affects ranking position only, not credits.",
  },
  {
    q: "Are there limits on how many credits I can hold?",
    a: "Yes. Each subscription tier has a maximum task credit capacity. Users cannot exceed their tier limit. Visibility credits cannot be used for tasks and are strictly for marketplace exposure. All credit balances are tracked separately and enforced automatically.",
  },
  {
    q: "How do milestones and badges work?",
    a: "Milestones are tracked per website. Every 10 verified backlinks earns a bonus task credit. Badges such as Top Contributor and Verified are displayed on your dashboard and marketplace listing. Badges are valid for 30 days and are continuously re-evaluated. Some badges may include visibility credit rewards.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-6 md:py-25 px-6 bg-[#fdfdff]" id="faq">
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
