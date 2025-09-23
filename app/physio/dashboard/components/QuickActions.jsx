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
    <div className="max-w-5xl w-full flex justify-center px-4">
      <div className="inline-flex backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-3 gap-3">
        {actions.map((action, idx) => (
          <Link
            key={action.label}
            href={action.href}
            className={`
              group flex items-center gap-3 px-5 py-3 rounded-xl font-medium
              transition-all duration-300 ease-in-out
              hover:shadow-lg hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                idx === 0
                  ? "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 hover:from-teal-100 hover:to-teal-200 focus:ring-teal-400"
                  : idx === 1
                  ? "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 hover:from-purple-100 hover:to-purple-200 focus:ring-purple-400"
                  : "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 hover:from-orange-100 hover:to-orange-200 focus:ring-orange-400"
              }
            `}
          >
            <span className="text-xl transition-transform group-hover:scale-110">{action.icon}</span>
            <span className="hidden sm:block text-sm tracking-wide">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
