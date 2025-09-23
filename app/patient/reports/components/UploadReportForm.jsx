"use client";

import { useState } from "react";
import { uploadPatientReport } from "@/lib/firebase/reports/write";
import toast from "react-hot-toast";

export default function UploadReportForm({ uid }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Lab Report");
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file");

    setIsUploading(true);
    try {
      await uploadPatientReport(uid, file, { category });
      toast.success("Report uploaded");
      setFile(null);
      // no manual refresh needed because usePatientReports hook is real-time
    } catch (err) {
      console.error(err);
      toast.error("Upload failed: " + (err?.message || "unknown error"));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg bg-white shadow-sm space-y-3">
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-1 rounded text-sm"
        >
          <option>Lab Report</option>
          <option>Prescription</option>
          <option>Other</option>
        </select>

        <button
          type="submit"
          disabled={isUploading}
          className="ml-auto bg-[#35B6B4] text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {/* <p className="text-xs text-gray-500">Accepted: PDF, JPG, PNG. Max file size depends on your Firebase plan.</p> */}
    </form>
  );
}
