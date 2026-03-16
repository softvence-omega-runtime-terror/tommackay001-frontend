import { ExternalLink, Globe } from "lucide-react";

export default function ProfileWebsite() {
  const websites = [
    { url: "startuply.io", type: "Primary" },
    { url: "techfriends.net", type: "Frequent" },
    { url: "crypto-niche.biz", type: "Occasional" },
    { url: "spam-blog.xyz", type: "Rare" },
  ];
  return (
    <div className="p-6 flex flex-col gap-4">
      <p className="text-sm font-bold text-[#181d27] uppercase tracking-widest">
        Websites
      </p>
      <div className="flex flex-col divide-y divide-[#f0f0f0]">
        {websites.map((site) => (
          <div
            key={site.url}
            className="flex items-center justify-between py-3.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#717680]" />
              </div>
              <div>
                <p className="text-md font-semibold text-[#fd751f] hover:underline cursor-pointer">
                  {site.url}
                </p>
                <p className="text-sm text-[#a4a7ae]">{site.type}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#a4a7ae]" />
          </div>
        ))}
      </div>
    </div>
  );
}
