"use client";

import { useAuth } from "@/contexts/AuthContext";
import UploadReportForm from "./components/UploadReportForm";
import ReportsList from "./components/ReportsList";

export default function PatientReportsPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Please log in to access your reports.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Reports</h1>

      <UploadReportForm uid={user.uid} />

      <ReportsList uid={user.uid} />
    </div>
  );
}
