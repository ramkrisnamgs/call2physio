"use client";
import { useAuth } from "@/contexts/AuthContext";
import { usePatient } from "@/lib/firebase/patient/read";
import ProfilePhotoUploader from "./components/ProfilePhotoUploader";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import toast from "react-hot-toast";

export default function PatientAccountPage() {
  const { user } = useAuth();
  const { data: patientData, isLoading } = usePatient(user?.uid);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (!patientData) return <p className="p-6">No data found</p>;

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, patientData?.email);
      toast.success("Password reset link sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Account Settings</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <ProfilePhotoUploader uid={user?.uid} currentPhoto={patientData?.photoURL} />
        <PersonalDetailsSection uid={user?.uid} userData={patientData} />

        {/* Read-only email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={patientData?.email || ""}
            readOnly
            className="border rounded px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Role */}
        <div>
          <label className="text-sm font-medium">Role</label>
          <input
            type="text"
            value={patientData?.role}
            readOnly
            className="border rounded px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Reset Password */}
        <button
          onClick={handlePasswordReset}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
