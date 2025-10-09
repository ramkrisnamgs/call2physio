"use client";

import {
  listPhysioFiles,
  usePhysioVerificationDocs,
} from "@/lib/firebase/physio/read";
import {
  deletePhysioFile,
  getDownloadURLForPhysioDoc,
} from "@/lib/firebase/physio/write";
import { Button } from "@heroui/react";
import { Eye, Plus, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DocumentsList({ uid }) {
  const { docs, isLoading } = usePhysioVerificationDocs(uid);

  const handleDelete = async (file) => {
    if (!confirm("Delete this document?")) return;
    try {
      await deletePhysioDocument(uid, file);
      toast.success("Document deleted");
    } catch (error) {
      toast.error("Failed to delete document");
    }
  };

  if (isLoading) return <p>Loading document...</p>;

  if (!docs.length)
    return <p className="text-gray-500">No documents uploaded yet.</p>;

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Preview</th>
            <th className="px-4 py-3 text-left font-semibold">Document Name</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
            <th className="px-4 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {docs.map((d, i) => (
            <tr key={d.fullPath || i} className="hover:bg-gray-50 transition-colors">
              {/* Preview */}
              <td className="px-4 py-3 align-top">
                {d.name?.match(/\.(jpg|jpeg|png)$/i) ? (
                  <img
                    src={d.url}
                    alt={d.name}
                    className="h-16 w-16 object-cover rounded border border-gray-200"
                  />
                ) : d.name?.endsWith(".pdf") ? (
                  <iframe
                    src={d.url + "#toolbar=0&navpanes=0&scrollbar=0"}
                    title={d.name}
                    className="h-16 w-16 rounded border border-gray-200"
                  />
                ) : (
                  <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded border border-gray-200 text-xs text-gray-400">
                    No preview
                  </div>
                )}
              </td>

              {/* Document Name */}
              <td className="px-4 py-3 font-medium text-gray-900 break-words max-w-xs">
                {d.name}
              </td>

              {/* Document Type */}
              <td className="px-4 py-3 text-gray-600 capitalize">
                {d.docType?.replace("-", "")}
              </td>

              {/* Status */}
              <td className="px-4 py-3">
                {d.status === "approved" ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                ) : d.status === "rejected" ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Rejected
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                )}
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(d.url, "_blank")}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-[#35B6B4] text-white hover:bg-[#2da9a7] transition-colors"
                    title="View document"
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(d)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                    title="Delete document"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default function DocumentsList({ uid, files, loading, refreshFiles }) {
//   const [confirmDelete, setConfirmDelete] = useState(null);

//   // Delete document
//   const handleDelete = async (fileName) => {
//     if (!confirm("Are you sure, you want to delete")) return;
//     try {
//       await deletePhysioFile(uid, fileName);
//       toast.success("Document deleted successfully");
//       if (refreshFiles) refreshFiles(); // Refresh
//       // mutate(); // re-fetch the docs list
//     } catch (error) {
//       toast.error("Failed to delete document");
//     }
//   };

//   // Download/View document
//   const handleDownload = async (file) => {
//     try {
//       // If you need to get a fresh download URL, uncomment the next line:
//       const url = await getDownloadURLForPhysioDoc(uid, file.name);
//       // window.open(url, "_blank");
//       // If file.url is already a valid download URL, use it directly:
//       window.open(file.url, "_blank");
//     } catch (error) {
//       console.error("Failed to get download URL:", error);
//       toast.error("Failed to retrieve file");
//     }
//   };

//   if (loading) return (
//     <div className="flex items-center justify-center py-8 bg-gray-50 rounded shadow-inner">
//       <div className="flex flex-col items-center space-y-3">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-[#35B6B4]"></div>
//         <p className="text-gray-500 text-sm">Loading documents...</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-4">
//       {files.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-8 bg-gray-50 rounded shadow-inner">
//           <svg
//             className="w-10 h-10 text-gray-300 mb-2"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={1.5}
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12 4.5V6.75A2.25 2.25 0 0 0 17.75 4.5H6.25A2.25 2.25 0 0 0 4 6.75v10.5A2.25 2.25 0 0 0 6.25 19.5h11.5A2.25 2.25 0 0 0 20 17.25z"
//             />
//           </svg>
//           <p className="text-gray-500 text-sm">No documents uploaded yet.</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded shadow">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700 text-sm">
//                 <th className="py-2 px-4 text-left">Preview</th>
//                 <th className="py-2 px-4 text-left">Document Name</th>
//                 <th className="py-2 px-4 text-left">Type</th>
//                 <th className="py-2 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {files.map((file) => (
//                 <tr
//                   key={file.fullPath}
//                   className="border-b last:border-b-0 hover:bg-gray-50"
//                 >
//                   <td className="py-2 px-4 w-32">
//                     {file.name.match(/\.(jpg|jpeg|png)$/i) ? (
//                       <img
//                         src={file.url}
//                         alt={file.name}
//                         className="h-16 w-16 object-cover rounded border"
//                       />
//                     ) : file.name.endsWith(".pdf") ? (
//                       <iframe
//                         src={file.url + "#toolbar=0&navpanes=0&scrollbar=0"}
//                         title={file.name}
//                         className="h-16 w-16 rounded border"
//                         style={{ minWidth: "64px", minHeight: "64px" }}
//                       />
//                     ) : (
//                       <div className="flex items-center justify-center h-16 w-16 bg-gray-100 rounded border text-xs text-gray-400">
//                         No preview
//                       </div>
//                     )}
//                   </td>
//                   <td className="py-2 px-4 text-sm font-medium break-all">
//                     {file.name}
//                   </td>
//                   <td className="py-2 px-4 text-xs text-gray-500">
//                     {file.name.endsWith(".pdf")
//                       ? "PDF"
//                       : file.name.match(/\.(jpg|jpeg|png)$/i)
//                       ? "Image"
//                       : "File"}
//                   </td>
//                   <td className="py-2 px-4">
//                     <div className="flex gap-2">
//                       <Button
//                         onClick={() => handleDownload(file)}
//                         className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-[#35B6B4] hover:bg-[#003A70] rounded transition-all delay-200 cursor-pointer"
//                         title="View or Download"
//                       >
//                         {/* <Plus size={20} /> */}
//                         <Eye size={20} />
//                         {/* View */}
//                       </Button>
//                       <Button
//                         onClick={() => handleDelete(file.name)}
//                         className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded transition cursor-pointer"
//                         title="Delete"
//                       >
//                         <Trash2  size={20} />
//                         {/* Delete */}
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
