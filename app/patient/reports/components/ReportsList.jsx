"use client";

import { useEffect, useState } from "react";
import { usePatientReports } from "@/lib/firebase/reports/hooks";
import { deletePatientReport } from "@/lib/firebase/reports/write";
import toast from "react-hot-toast";
import { FaFilePdf, FaFileWord, FaFileAlt } from "react-icons/fa";

export default function ReportsList({ uid }) {
  const { reports, isLoading } = usePatientReports(uid);
  const [expanded, setExpanded] = useState(null);
  const [pageMap, setPageMap] = useState({}); // category => page number
  const pageSize = 8;

  // group reports by category
  const grouped = (reports || []).reduce((acc, r) => {
    const cat = r.category || "Other";
    acc[cat] = acc[cat] || [];
    acc[cat].push(r);
    return acc;
  }, {});

  // default expand: Lab Report if exists, else first category
  useEffect(() => {
    if (!expanded && Object.keys(grouped).length) {
      if (grouped["Lab Report"]) setExpanded("Lab Report");
      else setExpanded(Object.keys(grouped)[0]);
    }
  }, [reports, expanded]); // eslint-disable-line

  const handleDelete = async (report) => {
    if (!confirm("Delete this report?")) return;
    try {
      await deletePatientReport(uid, report.id, report.fileName);
      toast.success("Report deleted");
      // real-time hook will update list
    } catch (err) {
      console.error(err);
      toast.error("Delete failed: " + (err?.message || "unknown"));
    }
  };

  const renderIconOrThumbnail = (report) => {
    const ext = (report.fileName || "").split(".").pop()?.toLowerCase();
    if (["jpg", "jpeg", "png"].includes(ext)) {
      return (
        <img
          src={report.url}
          alt={report.name}
          className="w-12 h-12 object-cover rounded border"
          loading="lazy"
        />
      );
    }
    if (ext === "pdf") return <FaFilePdf className="text-red-500 text-2xl" />;
    if (["doc", "docx"].includes(ext)) return <FaFileWord className="text-blue-700 text-2xl" />;
    return <FaFileAlt className="text-gray-500 text-2xl" />;
  };

  if (isLoading) return <p className="text-gray-600">Loading reports...</p>;
  if (!reports || reports.length === 0) return <p className="text-gray-600">No reports uploaded yet.</p>;

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([category, files]) => {
        const page = pageMap[category] || 1;
        const visible = files.slice(0, page * pageSize);
        return (
          <div key={category} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === category ? null : category)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left"
            >
              <div>
                <div className="text-sm font-semibold">{category}</div>
                <div className="text-xs text-gray-500">{files.length} file(s)</div>
              </div>
              <div className="text-gray-500">{expanded === category ? "−" : "+"}</div>
            </button>

            {expanded === category && (
              <div className="p-4 bg-white space-y-3">
                {visible.map((report) => (
                  <div key={report.id} className="flex items-center justify-between border rounded p-3">
                    <div className="flex items-center gap-3">
                      {renderIconOrThumbnail(report)}
                      <div>
                        <div className="font-medium text-sm">{report.name}</div>
                        <div className="text-xs text-gray-500">
                          {report.uploadedAt?.seconds
                            ? new Date(report.uploadedAt.seconds * 1000).toLocaleString()
                            : "Uploaded"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-1 text-xs text-gray-600">
                        <input type="checkbox" disabled /> Share
                      </label>

                      <button
                        onClick={() => window.open(report.url, "_blank")}
                        className="text-blue-600 underline text-sm"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDelete(report)}
                        className="text-red-500 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                {files.length > visible.length && (
                  <div className="pt-2">
                    <button
                      onClick={() => setPageMap((m) => ({ ...m, [category]: page + 1 }))}
                      className="text-sm text-[#35B6B4] underline"
                    >
                      Load more
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
