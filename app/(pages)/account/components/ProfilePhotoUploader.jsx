"use client";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db, auth } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Pen } from "lucide-react";

export default function ProfilePhotoUploader({ onUpload, currentPhoto }) {
  const [uploading, setUploading] = useState(false);
  const [displayedPhoto, setDisplayedPhoto] = useState(currentPhoto);

  useEffect(() => {
    setDisplayedPhoto(currentPhoto);
  }, [currentPhoto]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("No authenticated user found.");
        alert("Please log in to upload a photo.");
        return;
      }

      const fileRef = ref(storage, `avatars/${user.uid}/${file.name}_${Date.now()}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      const userDocRef = doc(db, "user", user.uid);
      await updateDoc(userDocRef, {
        photoURL: downloadURL,
      });

      onUpload(downloadURL);
      setDisplayedPhoto(downloadURL);
      console.log("Photo uploaded successfully:", downloadURL);
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Image upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={displayedPhoto || "https://avatar.iran.liara.run/public/44"}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover shadow-[0_8px_30px_rgb(53,182,180,0.2)]"
      />
      <label className="text-[#35B6B4] cursor-pointer hover:underline">
        {uploading ? "Uploading..." : <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow">
            <Pen size={18}/>
           </div>}
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleUpload}
        />
      </label>
    </div>
  );
}
