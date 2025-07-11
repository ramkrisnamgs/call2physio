import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firebase/user/read";
import { CircularProgress } from "@heroui/react";
import { useEffect, useState } from "react";
import DeleteAccountSection from "./DeleteAccountSection";

export default function PhysioAccountSettings() {
  const { user } = useAuth();
  const { data: userData, isLoading } = useUser({ uid: user?.uid });

  const [formData, setFormData] = useState({
    name: "",
    photoURL: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData?.displayName || "",
        photoURL: userData?.photoURL || "",
      });
    }
  }, [userData]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center p-10">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 space-y-12">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 rounded-full bg-[#f0fdfd] border-4 border-[#35B6B4]/20 flex items-center justify-center overflow-hidden shadow">
          {userData.photoURL ? (
            <img
              src={userData.photoURL}
              alt={formData.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-3xl font-bold text-[#35B6B4]">
              {formData.name?.[0]?.toUpperCase() || "P"}
            </span>
          )}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#003A70] mb-1">
            {formData.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm bg-[#35B6B4]/10 text-[#35B6B4] px-3 py-1 rounded-full font-semibold capitalize">
              {userData.role}
            </span>
            <span className="text-xs text-gray-400">Physio Account</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f8fafc] rounded-xl p-8 shadow-inner">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Full Name
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.name}
                readOnly
                className="px-4 py-2 w-full border border-gray-200 rounded-lg bg-gray-100 text-gray-700 font-medium"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Email
            </label>
            <input
              type="text"
              value={userData.email || ""}
              readOnly
              className="px-4 py-2 w-full border border-gray-200 rounded-lg bg-gray-100 text-gray-700 font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              Role
            </label>
            <input
              type="text"
              value={userData.role || ""}
              readOnly
              className="px-4 py-2 w-full border border-gray-200 rounded-lg bg-gray-100 text-gray-700 font-medium capitalize"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#003A70] mb-2">
              Account Actions
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Manage your account and data. You can delete your account and all
              associated documents below.
            </p>
            <DeleteAccountSection uid={user?.uid} />
          </div>
        </div>
      </div>
    </div>
  );
}
