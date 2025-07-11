"use client";

import { useAuth } from "@/contexts/AuthContext";
import { listPhysioFiles, usePhysioData } from "@/lib/firebase/physio/read";
import UploadDocForm from "./components/UploadDocForm";
import DocumentsList from "./components/DocumentsList";
import RequestAdminApproval from "./components/RequestAdminApproval";
import { useState, useCallback, useEffect } from "react";

export default function DocumentPage() {
  const { user } = useAuth();
  const { physioData, isLoading } = usePhysioData(user?.uid);

  // Add state and fetchFiles logic here
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = useCallback(async () => {
    setLoading(true);
    try {
      // const res = await import("@/lib/firebase/physio/read").then(m => m.listPhysioFiles(user?.uid));
      const res = await listPhysioFiles(user?.uid);
      setFiles(res);
    } catch (error) {
      // Optionally use toast here
    } finally {
      setLoading(false);
    }
  }, [user?.uid]);

  // Fetch files on mount and when uid changes
  useEffect(() => {
    if (user?.uid) fetchFiles();
  }, [user?.uid, fetchFiles]);

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-600">Loading your documents...</div>
    )
  }

  if (!physioData || physioData?.role !== "physio") {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">Access restricted: Only physiotherapists can access this page.</div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">Your Verification Documents</h1>

      {/* Approval request and status display */}
      <RequestAdminApproval uid={user?.uid} data={physioData} />

      {/* Upload Form */}
      <UploadDocForm uid={user?.uid} onUploadSuccess={fetchFiles} />
      {/* Documents List */}
      <DocumentsList uid={user?.uid} files={files} loading={loading} refreshFiles={fetchFiles} />
      {/* Approval request and status display */}
      {/* <RequestAdminApproval uid={user?.uid} data={physioData} /> */}
    </div>
  )
}

// import { useState, useEffect } from "react";
// import { useAuth } from "@/contexts/AuthContext";
// import { db, storage } from "@/lib/firebase";
// import { doc, updateDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import toast from "react-hot-toast";
// import { Button } from "@heroui/react";

// const specializationsList = [
//   "Back Pain", "Neck Pain", "Sports Injury", "Stroke Rehab",
//   "Joint Pain", "Arthritis", "Pediatric Physio", "Neuro Rehab"
// ];

// export default function BecomePhysioPage() {
//   const { user } = useAuth();

//   const [formData, setFormData] = useState({
//     qualification: "",
//     experience: "",
//     specializations: [],
//     clinicAddress: "",
//     consultationFees: "",
//     govtIdFile: null,
//     licenseFile: null,
//   });

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleCheckboxChange = (value) => {
//     setFormData((prev) => {
//       const current = prev.specializations;
//       const updated = current.includes(value)
//         ? current.filter((item) => item !== value)
//         : [...current, value];
//       return { ...prev, specializations: updated };
//     });
//   };

//   const handleFileChange = (key, file) => {
//     setFormData((prev) => ({ ...prev, [key]: file }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     toast.loading("Submitting...");

//     try {
//       const govtIdURL = await uploadFile(user.uid, "govtId", formData.govtIdFile);
//       const licenseURL = await uploadFile(user.uid, "license", formData.licenseFile);

//       await updateDoc(doc(db, "user", user.uid), {
//         role: "physio",
//         qualification: formData.qualification,
//         experience: parseInt(formData.experience),
//         specializations: formData.specializations,
//         clinicAddress: formData.clinicAddress,
//         consultationFees: parseInt(formData.consultationFees),
//         govtIdURL,
//         licenseCertificateURL: licenseURL,
//         isApproved: false,
//         status: "Pending",
//       });

//       toast.dismiss();
//       toast.success("Application submitted! Waiting for approval.");
//     } catch (err) {
//       toast.dismiss();
//       toast.error("Failed: " + err.message);
//     }
//   };

//   const uploadFile = async (uid, type, file) => {
//     if (!file) return "";
//     const fileRef = ref(storage, `physios/${uid}/${type}_${file.name}`);
//     await uploadBytes(fileRef, file);
//     const downloadURL = await getDownloadURL(fileRef);
//     return downloadURL;
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-10">
//       <div className="flex flex-col items-center gap-2">
//         <img src="/call2physio.png" alt="Call2Physio" className="w-16 h-16 mb-2" />
//         <h1 className="text-3xl md:text-4xl font-extrabold text-[#003A70] text-center">
//           Become a Physio Partner
//         </h1>
//         <p className="text-gray-500 text-center max-w-lg">
//           Join our network of expert physiotherapists. Fill out the form below to apply. Our team will review your application and get in touch soon.
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-8 bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-[#35B6B4]/10"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Qualification <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               className="border border-[#35B6B4]/30 focus:border-[#35B6B4] px-4 py-2 rounded-lg w-full bg-[#f8fafc] text-gray-800 font-medium transition"
//               value={formData.qualification}
//               onChange={(e) => handleInputChange("qualification", e.target.value)}
//               placeholder="e.g. BPT, MPT, etc."
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Experience (Years) <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               min={0}
//               className="border border-[#35B6B4]/30 focus:border-[#35B6B4] px-4 py-2 rounded-lg w-full bg-[#f8fafc] text-gray-800 font-medium transition"
//               value={formData.experience}
//               onChange={(e) => handleInputChange("experience", e.target.value)}
//               placeholder="e.g. 5"
//               required
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Specializations <span className="text-red-500">*</span>
//             </label>
//             <div className="flex flex-wrap gap-3 mt-2">
//               {specializationsList.map((spec) => (
//                 <label
//                   key={spec}
//                   className={`flex items-center gap-2 px-3 py-1 rounded-full border cursor-pointer transition
//                     ${
//                       formData.specializations.includes(spec)
//                         ? "bg-[#35B6B4]/10 border-[#35B6B4] text-[#35B6B4] font-semibold"
//                         : "bg-white border-gray-200 text-gray-700 hover:bg-[#f0fdfd]"
//                     }
//                   `}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={formData.specializations.includes(spec)}
//                     onChange={() => handleCheckboxChange(spec)}
//                     className="accent-[#35B6B4]"
//                   />
//                   {spec}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Clinic Address <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               className="border border-[#35B6B4]/30 focus:border-[#35B6B4] px-4 py-2 rounded-lg w-full bg-[#f8fafc] text-gray-800 font-medium transition min-h-[60px]"
//               value={formData.clinicAddress}
//               onChange={(e) => handleInputChange("clinicAddress", e.target.value)}
//               placeholder="Enter your clinic address"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Consultation Fees (₹) <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               min={0}
//               className="border border-[#35B6B4]/30 focus:border-[#35B6B4] px-4 py-2 rounded-lg w-full bg-[#f8fafc] text-gray-800 font-medium transition"
//               value={formData.consultationFees}
//               onChange={(e) => handleInputChange("consultationFees", e.target.value)}
//               placeholder="e.g. 500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Upload Govt ID <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               accept="image/*,.pdf"
//               onChange={(e) => handleFileChange("govtIdFile", e.target.files[0])}
//               className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#35B6B4]/10 file:text-[#003A70] hover:file:bg-[#35B6B4]/20"
//               required
//             />
//             {formData.govtIdFile && (
//               <div className="text-xs text-green-600 mt-1">
//                 Selected: {formData.govtIdFile.name}
//               </div>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-[#003A70] mb-1">
//               Upload License Certificate <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               accept="image/*,.pdf"
//               onChange={(e) => handleFileChange("licenseFile", e.target.files[0])}
//               className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#35B6B4]/10 file:text-[#003A70] hover:file:bg-[#35B6B4]/20"
//               required
//             />
//             {formData.licenseFile && (
//               <div className="text-xs text-green-600 mt-1">
//                 Selected: {formData.licenseFile.name}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="pt-4">
//           <Button
//             type="submit"
//             className="bg-gradient-to-r from-[#35B6B4] to-[#003A70] text-white w-full py-3 rounded-xl text-lg font-bold shadow hover:from-[#2da3a1] hover:to-[#003A70]/90 transition"
//           >
//             Submit Application
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
