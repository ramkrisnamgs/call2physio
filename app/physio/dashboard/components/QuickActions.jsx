import { useAuth } from "@/contexts/AuthContext";
import { usePhysioData } from "@/lib/firebase/physio/read";
import { Album, BadgeIndianRupee, UserPlus } from "lucide-react";
import Link from "next/link";

export default function QuickActions() {
  const { user } = useAuth();
  const { physioData, isLoading } = usePhysioData(user?.uid);

  const actions = [
    {
      label: "View Patients",
      href: "/physio/patients",
      icon: <UserPlus />,
    },
    {
      label: "View Earnings",
      href: "/physio/earnings",
      icon: <BadgeIndianRupee />,
    },
  ];

  if (!physioData?.isApproved) {
    actions.push({
      label: "Upload Documents",
      href: "/physio/documents",
      icon: <Album />,
    });
  }

  return (
    <div className="max-w-5xl flex justify-center">
      <div className="inline-flex bg-white border border-[#E0E7EF] rounded-full shadow-lg px-2 py-2 gap-2 md:gap-4">
        {actions.map((action, idx) => (
          <Link
            key={action.label}
            href={action.href}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition
              focus:outline-none focus:ring-2 focus:ring-[#35B6B4]/40
              ${
                idx === 0
                  ? "bg-[#F0FDFC] hover:bg-[#E1F7F6] text-[#35B6B4]"
                  : idx === 1
                  ? "bg-[#F8F5FF] hover:bg-[#F1EAFE] text-[#7C3AED]"
                  : "bg-[#FFF7F0] hover:bg-[#FEECDC] text-[#F59E42]"
              }
              shadow-sm hover:scale-105
            `}
            style={{ minWidth: 0 }}
          >
            <span className="text-xl">{action.icon}</span>
            <span className="hidden sm:inline">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
