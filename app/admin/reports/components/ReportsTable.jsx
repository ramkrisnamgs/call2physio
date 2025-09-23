"use client";

import { useState } from "react";
import { deleteReport } from "@/lib/firebase/reports/write";
import { getReportDownloadURL } from "@/lib/firebase/reports/read";
import ReportViewerModal from "./ReportViewerModal";
import toast from "react-hot-toast";

export default function ReportsTable({ reports, refresh }) {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleDelete = async (report) => {
    if (!confirm("Are you sure you want to delete this report?")) return;
    try {
      await deleteReport(report.id, report.filePath);
      toast.success("Report deleted");
      refresh();
    } catch {
      toast.error("Failed to delete report");
    }
  };

  const handleView = async (report) => {
    try {
      const url = await getReportDownloadURL(report.filePath);
      setSelectedReport({ ...report, url });
    } catch {
      toast.error("Failed to load report");
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
          <tr>
            <th className="p-3">Patient</th>
            <th className="p-3">File Name</th>
            <th className="p-3">Uploaded At</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {reports.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No reports found
              </td>
            </tr>
          ) : (
            reports.map((report) => (
              <tr key={report.id} className="border-t">
                <td className="p-3">{report.patientName || "Unknown"}</td>
                <td className="p-3">{report.fileName}</td>
                <td className="p-3">
                  {report.uploadedAt?.toDate
                    ? report.uploadedAt.toDate().toLocaleString()
                    : "N/A"}
                </td>
                <td className="p-3 flex gap-3">
                  <button
                    onClick={() => handleView(report)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(report)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Viewer Modal */}
      {selectedReport && (
        <ReportViewerModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
}
