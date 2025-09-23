"use client";
import { useState } from "react";
import { updatePatientProfile } from "@/lib/firebase/patient/write";
import toast from "react-hot-toast";

export default function PersonalDetailsSection({ uid, userData }) {
  const [form, setForm] = useState({
    displayName: userData?.displayName || "",
  });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!form.displayName.trim()) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    try {
      await updatePatientProfile(uid, { displayName: form.displayName });
      toast.success("Profile updated");
    } catch (err) {
      toast.error("Failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">Full Name</label>
      <input
        type="text"
        value={form.displayName}
        onChange={(e) => setForm({ ...form, displayName: e.target.value })}
        className="border rounded px-3 py-2 w-full"
      />
      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-[#35B6B4] text-white px-4 py-2 rounded-lg mt-2"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
