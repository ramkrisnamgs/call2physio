"use client";

import {
  uploadPhysioDocument,
  uploadPhysioFile,
} from "@/lib/firebase/physio/write";
import { Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const DOC_TYPES = [
  { value: "idProof", label: "Government ID (Aadhaar, PAN, etc.)" },
  { value: "qualification", label: "Qualification Certificate (BPT/MPT)" },
  {
    value: "registration",
    label: "Registration Certificate (IAP/State Council)",
  },
  { value: "experience", label: "Experience / Work Proof" },
  { value: "clinic", label: "Clinic Ownership Proof (optional)" },
  { value: "others", label: "Other Document" },
];

export default function UploadDocForm({ uid }) {
  // UploadDocForm({ uid, onUploadSuccess})
  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState("qualification");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file) return toast.error("No file selected");

    const isAllowedType = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ].includes(file.type);
    const isAllowedSize = file.size <= 5 * 1024 * 1024;

    if (!isAllowedType)
      return toast.error("Only PDF, JPG, PNG files are allowed");
    if (!isAllowedSize) return toast.error("File exceeds 5MB");

    try {
      setUploading(true);
      // await uploadPhysioFile(uid, file);
      await uploadPhysioDocument(uid, file, docType, (prog) =>
        setProgress(prog)
      );
      toast.success("Document uploaded successfully");
      setFile(null);
      setProgress(0);
      // if (onUploadSuccess) onUploadSuccess();
    } catch (error) {
      toast.error("Upload failed");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-5">
      <h3 className="text-lg font-semibold text-[#1b5c98] mb-4">
        Upload Documents
      </h3>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="w-full appearance-none p-3 pr-10 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-transparent transition"
          >
            {DOC_TYPES.map((d) => (
              <option key={d.value} value={d.value} className="py-2 px-3 hover:bg-gray-100">
                {d.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* <label
          htmlFor="doc-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Verification Document
        </label> */}
        <input
          // id="doc-upload"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-[#35B6B4] file:text-white
            hover:file:bg-[#269a98]
            border border-gray-200 rounded cursor-pointer bg-gray-50"
        />
        <p className="text-xs text-gray-500 mt-1">
          Allowed types: PDF, JPG, PNG. Max size: 5MB.
        </p>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-[#35B6B4] rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        {/* Selected File */}
        {file && (
          <div className="flex items-center gap-2 mt-2 bg-gray-50 px-3 py-2 rounded">
            <span className="text-sm text-gray-700 font-medium break-all">
              {file.name}
            </span>
            <span className="text-xs text-gray-400">
              ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </span>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="ml-auto text-xs text-red-500 hover:underline"
              tabIndex={-1}
            >
              Remove
            </button>
          </div>
        )}
      </div>

      
      <Button
        onPress={handleUpload}
        disabled={uploading || !file}
        className={`bg-[#35B6B4] text-white px-6 py-2 rounded font-semibold transition ${
          uploading || !file
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-[#269a98]"
        }`}
      >
        {uploading ? (
          <span>
            <svg
              className="inline w-4 h-4 mr-2 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Uploading...
          </span>
        ) : (
          "Upload"
        )}
      </Button>
    </div>
  );
}
