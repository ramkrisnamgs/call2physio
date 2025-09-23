"use client";
import { useState } from "react";
import { uploadPatientPhoto, updatePatientProfile } from "@/lib/firebase/patient/write";
import { auth } from "@/lib/firebase";
import toast from "react-hot-toast";

export default function ProfilePhotoUploader({ uid, currentPhoto }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only images allowed!");
      return;
    }

    setUploading(true);
    try {
      const url = await uploadPatientPhoto(uid, file);
      await updatePatientProfile(uid, { photoURL: url });
      toast.success("Profile photo updated");
    } catch (err) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <img
        src={currentPhoto || "/default-profile.png"}
        alt="profile"
        className="w-16 h-16 rounded-full border object-cover"
      />
      <label className="cursor-pointer bg-[#35B6B4] text-white px-4 py-2 rounded-lg text-sm">
        {uploading ? "Uploading..." : "Change Photo"}
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
}
