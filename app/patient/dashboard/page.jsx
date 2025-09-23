"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firebase/user/read";

export default function PatientDashboard() {
  const { user } = useAuth();
  const { data: userData, isLoading } = useUser({ uid: user?.uid });

  if (isLoading) {
    return <div className="text-center py-20">Loading Dashboard...</div>;
  }

  if (!userData) {
    return (
      <div className="text-center py-20 text-red-500">
        Unable to load your dashboard. Please make sure you are logged in as a
        physio.
      </div>
    );
  }

  return (
     <div>
          <h2>Patient Dashboard</h2>
     </div>
  )
}