"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePhysioData } from "@/lib/firebase/physio/read";
import Link from "next/link";

export default function VerificationBanner() {
  const { user } = useAuth();
  const { physioData, isLoading } = usePhysioData(user?.uid);

  if (isLoading || !user?.uid) return null;

  // Only show if the physio is NOT approved
  if (physioData?.isApproved) return null;

  return (
    <div className="flex items-center gap-4 bg-yellow-50 border border-yellow-300 rounded-lg px-5 py-4 mb-6 shadow-sm">
      <svg
        className="w-7 h-7 text-yellow-500 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#FEF3C7" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01"
          stroke="#F59E42"
          strokeWidth="2"
        />
      </svg>
      <div>
        <p className="text-yellow-900 font-semibold text-base">
          Your account is <span className="font-bold">pending verification</span>.
        </p>
        <p className="text-yellow-800 text-sm mt-1">
          Please upload your specialization documents on the{" "}
          <Link
            href="/physio/documents"
            className="underline font-semibold text-yellow-900 hover:text-yellow-700 transition"
          >
            Document Page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
