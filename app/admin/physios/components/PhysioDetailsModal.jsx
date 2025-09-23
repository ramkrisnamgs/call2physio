"use client";

import { useEffect, useState } from "react";
import { getPhysioDocuments, listPhysioFiles } from "@/lib/firebase/physio/read";
import { getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { ref } from "firebase/storage";

export default function PhysioDetailsModal({ physio, onClose, refresh }) {
  const [docs, setDocs] = useState([]);
  const [loadingDocs, setLoadingDocs] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      if (!physio?.uid) return;
      try {
        const files = await getPhysioDocuments(physio.uid);
        // Attach download URLs
        const filesWithUrls = await Promise.all(
          files.map(async (file) => {
            const url = await getDownloadURL(ref(storage, file.fullPath));
            return { ...file, url };
          })
        );
        setDocs(filesWithUrls);
      } catch (err) {
        console.error("Failed to fetch physio documents:", err);
      } finally {
        setLoadingDocs(false);
      }
    };

    fetchDocs();
  }, [physio?.uid]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // close if user clicks outside modal
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-2xl relative overflow-y-auto max-h-[80vh]"
        onClick={(e) => e.stopPropagation()} // prevent closing inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Physio Info */}
        <h2 className="text-xl font-bold mb-4">Physio Details</h2>
        <p><strong>Name:</strong> {physio.displayName}</p>
        <p><strong>Email:</strong> {physio.email}</p>
        <p><strong>Specializations:</strong> {physio.specializations?.join(", ")}</p>
        <p><strong>Status:</strong> {physio.isApproved ? "✅ Approved" : "⏳ Pending"}</p>

        {/* Documents Section */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Uploaded Documents</h3>
        {loadingDocs ? (
          <p className="text-gray-500">Loading documents...</p>
        ) : docs.length === 0 ? (
          <p className="text-gray-500">No documents uploaded.</p>
        ) : (
          <ul className="space-y-2">
            {docs.map((doc) => (
              <li
                key={doc.fullPath}
                className="flex items-center justify-between border rounded p-2"
              >
                <span>{doc.name}</span>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}







// "use client"

// import { getPhysioDocuments } from "@/lib/firebase/physio/read";
// import { useEffect, useState } from "react";

// export default function PhysioDetailsModal({ physio, onClose }) {
//      const [docs, setDocs] = useState([]);

//      useEffect(() => {
//           if(!physio?.uid) {
//                getPhysioDocuments(physio?.uid).then(setDocs);
//           } 
//      }, [physio])

//      return (
//           <div onClick={onClose} className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 w-full max-w-lg relative">
//               <button
//                 className="absolute top-3 right-3 text-gray-600"
//                 onClick={onClose}
//               >
//                 ✕
//               </button>
//               <h2 className="text-xl font-bold mb-4">{physio.displayName}</h2>
//               <p>Email: {physio.email}</p>
//               <p>Specializations: {physio?.bloodGroup || "N/A"}</p>
      
//               <h3 className="mt-4 font-semibold">Documents:</h3>
//               <ul className="list-disc ml-5 mt-2 space-y-1">
//                 {docs.length > 0 ? (
//                   docs.map((d) => (
//                     <li key={d.name}>
//                       <a
//                         href={d.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         {d.name}
//                       </a>
//                     </li>
//                   ))
//                 ) : (
//                   <p>No documents uploaded.</p>
//                 )}
//               </ul>
//             </div>
//           </div>
//         );
      
// }