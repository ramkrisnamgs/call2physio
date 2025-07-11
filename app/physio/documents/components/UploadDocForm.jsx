"use client"

import { uploadPhysioFile } from "@/lib/firebase/physio/write";
import { Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UploadDocForm({ uid, onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return toast.error("No file selected");

    const isAllowedType = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ].includes(file.type);
    const isAllowedSize = file.size <= 5 * 1024 * 1024;

    if (!isAllowedType) return toast.error("File type not allowed");
    if (!isAllowedSize) return toast.error("File exceeds 5MB");

    setUploading(true);
    try {
      await uploadPhysioFile(uid, file);
      toast.success("File uploaded");
      setFile(null);
      if (onUploadSuccess) onUploadSuccess();
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-5">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="doc-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Verification Document
        </label>
        <input
          id="doc-upload"
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
        {file && (
          <div className="flex items-center gap-2 mt-2 bg-gray-50 px-3 py-2 rounded">
            <span className="text-sm text-gray-700 font-medium break-all">{file.name}</span>
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
          uploading || !file ? "opacity-60 cursor-not-allowed" : "hover:bg-[#269a98]"
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
