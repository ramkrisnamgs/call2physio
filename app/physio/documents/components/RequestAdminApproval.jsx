"use client"

import { usePhysioData } from "@/lib/firebase/physio/read";

export default function RequestAdminApproval({ uid }) {
  const { physioData, isLoading } = usePhysioData(uid);

  if (isLoading) return <p>Loading Status...</p>;

  const status = physioData?.status;
  const isApproved = physioData?.isApproved;

  let statusMessage = "";
  let color = "";

  if (isApproved && status === "approved") {
     statusMessage = "Your documents have been approved. You can now accept patients."
     color = "text-green-600"
  } else if ( status === "pending") {
     statusMessage = "Your documents are under review. Please wait for admin approval."
     color = "text-yellow-500"
  } else if ( status === "rejected") {
     statusMessage = "Your documents were rejected. Please re-upload or contact support."
     color = "text-red-600"
  } else {
     statusMessage = "Upload your documents to request admin approval."
     color = "text-gray-600"
  }

  return (
      <div className={`mt-6 border p-4 rounded bg-gray-50 text-center ${color}`}>
        <p className="text-sm font-medium">{statusMessage}</p>
      </div>
  )
}
