"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePhysioOverview } from "@/lib/firebase/physio/hooks";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { CheckCheck, GraduationCap, Star, UserPlus, X } from "lucide-react";

export default function PhysioStats() {
  const { user } = useAuth();
  const { data: stats, isLoading, error } = usePhysioOverview(user?.uid);

  if (isLoading) return <div className="text-gray-500">Loading stats...</div>;

  if (error || !stats)
    return (
      <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-5 py-4 mb-6 shadow-sm ">
        <svg
          className="w-6 h-6 text-red-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="#FEE2E2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01"
            stroke="#EF4444"
            strokeWidth="2"
          />
        </svg>
        <div>
          <p className="font-semibold text-base">Failed to load your stats.</p>
          <p className="text-sm text-red-600">
            {error
              ? "An error occurred while loading your stats. Please try refreshing the page or check your connection."
              : "No stats available for your account yet."}
          </p>
        </div>
      </div>
    );

  const statList = [
    {
      label: "Patients Treated",
      value: stats.totalPatients,
      icon: <UserPlus />,
    },
    {
      label: "Average Rating",
      value: stats.avgRating?.toFixed(1) || "N/A",
      icon: <Star />,
    },
    {
      label: "Experience",
      value: stats.experience || "N/A",
      icon: <GraduationCap />,
    },
    {
      label: "Approval Status",
      value: stats.isApproved ? "Approved" : "Pending",
      icon: stats.isApproved ? <CheckCheck /> : <X />,
    },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border relative overflow-hidden">
      {/* Decorative  background circle */}
      <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="70" fill="#35B6B4" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-[#003A70] flex items-center gap-2">
        <svg
          className="w-6 h-6 text-[#35B6B4]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M2 12h20" stroke="#35B6B4" strokeWidth="2" />
        </svg>
        Your Practice Stats
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statList.map((item) => (
          <div
            key={item.label}
            className="bg-gradient-to-br from-[#f0fdfd] to-[#e0f7fa] rounded-xl border border-[#35B6B4]/10 p-6 text-center shadow group hover:shadow-lg transition-all duration-200 relative overflow-hidden"
          >
            <div className="flex items-center justify-center mb-3">
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full shadow-md text-3xl transition-all duration-200 ${
                  item.label === "Approval Status"
                    ? item.value === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    : "bg-[#35B6B4]/10 text-[#35B6B4]"
                } group-hover:scale-110`}
              >
                {item.icon}
              </span>
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
              {item.label}
            </div>
            <div
              className={`text-2xl font-extrabold ${
                item.label === "Approval Status"
                  ? item.value === "Approved"
                    ? "text-green-600"
                    : "text-yellow-600"
                  : "text-[#003A70]"
              }`}
            >
              {item.value}
            </div>
            {/* Subtle animated accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#35B6B4]/10 rounded-full blur-sm group-hover:w-28 transition-all duration-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
