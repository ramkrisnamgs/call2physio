"use client";

import { listPhysioFiles } from "@/lib/firebase/physio/read";
import {
  deletePhysioFile,
  getDownloadURLForPhysioDoc,
} from "@/lib/firebase/physio/write";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DocumentsList({ uid, files, loading, refreshFiles }) {
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Delete document
  const handleDelete = async (fileName) => {
    if (!confirm("Are you sure, you want to delete")) return;
    try {
      await deletePhysioFile(uid, fileName);
      toast.success("Document deleted successfully");
      if (refreshFiles) refreshFiles(); // Refresh
      // mutate(); // re-fetch the docs list
    } catch (error) {
      toast.error("Failed to delete document");
    }
  };

  // Download/View document
  const handleDownload = async (file) => {
    try {
      // If you need to get a fresh download URL, uncomment the next line:
      const url = await getDownloadURLForPhysioDoc(uid, file.name);
      // window.open(url, "_blank");
      // If file.url is already a valid download URL, use it directly:
      window.open(file.url, "_blank");
    } catch (error) {
      console.error("Failed to get download URL:", error);
      toast.error("Failed to retrieve file");
    }
  };

  if (loading) return <p>Loading documents...</p>;

  return (
    <div className="space-y-4">
      {files.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 bg-gray-50 rounded shadow-inner">
          <svg
            className="w-10 h-10 text-gray-300 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12 4.5V6.75A2.25 2.25 0 0 0 17.75 4.5H6.25A2.25 2.25 0 0 0 4 6.75v10.5A2.25 2.25 0 0 0 6.25 19.5h11.5A2.25 2.25 0 0 0 20 17.25z"
            />
          </svg>
          <p className="text-gray-500 text-sm">No documents uploaded yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="py-2 px-4 text-left">Preview</th>
                <th className="py-2 px-4 text-left">Document Name</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr
                  key={file.fullPath}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="py-2 px-4 w-32">
                    {file.name.match(/\.(jpg|jpeg|png)$/i) ? (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="h-16 w-16 object-cover rounded border"
                      />
                    ) : file.name.endsWith(".pdf") ? (
                      <iframe
                        src={file.url + "#toolbar=0&navpanes=0&scrollbar=0"}
                        title={file.name}
                        className="h-16 w-16 rounded border"
                        style={{ minWidth: "64px", minHeight: "64px" }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded border text-xs text-gray-400">
                        No preview
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-4 text-sm font-medium break-all">
                    {file.name}
                  </td>
                  <td className="py-2 px-4 text-xs text-gray-500">
                    {file.name.endsWith(".pdf")
                      ? "PDF"
                      : file.name.match(/\.(jpg|jpeg|png)$/i)
                      ? "Image"
                      : "File"}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(file)}
                        className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded transition"
                        title="View or Download"
                      >
                        <Plus size={16} />
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(file.name)}
                        className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded transition"
                        title="Delete"
                      >
                        <X />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
