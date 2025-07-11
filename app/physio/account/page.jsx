"use client";
import { useEffect, useState } from "react";
import PhysioAccountSettings from "./components/PhysioAccountSettings";

export default function PhysioAccountPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    phone: "",
    specialization: "",
    bio: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Simulate fetching user data (replace with real API call)
  useEffect(() => {
    async function fetchUserData() {
      setLoading(true);
      setError("");
      try {
        // Replace with your actual fetch logic
        // Example: const res = await fetch("/api/physio/me");
        // const data = await res.json();
        const data = {
          displayName: "Dr. Priya Sharma",
          email: "priya.sharma@example.com",
          phone: "+91 9876543210",
          specialization: "Orthopedic Physiotherapy",
          bio: "Passionate about helping patients recover and thrive.",
        };
        setUserData(data);
        setForm(data);
      } catch (e) {
        setError("Failed to load account data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
    setSuccess("");
    setError("");
  };

  const handleCancel = () => {
    setEditMode(false);
    setForm(userData);
    setError("");
    setSuccess("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Add validation as needed
    if (!form.displayName || !form.email) {
      setError("Name and email are required.");
      return;
    }
    try {
      // Replace with your actual update logic
      // Example: await fetch("/api/physio/me", { method: "PUT", body: JSON.stringify(form) });
      setUserData(form);
      setEditMode(false);
      setSuccess("Account details updated successfully.");
    } catch (e) {
      setError("Failed to update account details.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#35B6B4]"></div>
      </div>
    );
  }

  if (error && !editMode) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    // <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-8">
    //   <h1 className="text-2xl font-bold mb-6 text-[#003A70]">Account Details</h1>
    //   {success && (
    //     <div className="mb-4 text-green-600 bg-green-50 px-4 py-2 rounded">{success}</div>
    //   )}
    //   {error && (
    //     <div className="mb-4 text-red-600 bg-red-50 px-4 py-2 rounded">{error}</div>
    //   )}
    //   <form onSubmit={handleSave} className="space-y-6">
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         name="displayName"
    //         value={form.displayName}
    //         onChange={handleChange}
    //         disabled={!editMode}
    //         className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4] ${!editMode ? "bg-gray-100" : ""}`}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={form.email}
    //         onChange={handleChange}
    //         disabled={!editMode}
    //         className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4] ${!editMode ? "bg-gray-100" : ""}`}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Phone
    //       </label>
    //       <input
    //         type="tel"
    //         name="phone"
    //         value={form.phone}
    //         onChange={handleChange}
    //         disabled={!editMode}
    //         className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4] ${!editMode ? "bg-gray-100" : ""}`}
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Specialization
    //       </label>
    //       <input
    //         type="text"
    //         name="specialization"
    //         value={form.specialization}
    //         onChange={handleChange}
    //         disabled={!editMode}
    //         className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4] ${!editMode ? "bg-gray-100" : ""}`}
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Bio
    //       </label>
    //       <textarea
    //         name="bio"
    //         value={form.bio}
    //         onChange={handleChange}
    //         disabled={!editMode}
    //         rows={3}
    //         className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4] ${!editMode ? "bg-gray-100" : ""}`}
    //       />
    //     </div>
    //     <div className="flex gap-4 mt-6">
    //       {!editMode ? (
    //         <button
    //           type="button"
    //           onClick={handleEdit}
    //           className="bg-[#35B6B4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#269a98] transition"
    //         >
    //           Edit
    //         </button>
    //       ) : (
    //         <>
    //           <button
    //             type="submit"
    //             className="bg-[#003A70] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00234a] transition"
    //           >
    //             Save
    //           </button>
    //           <button
    //             type="button"
    //             onClick={handleCancel}
    //             className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
    //           >
    //             Cancel
    //           </button>
    //         </>
    //       )}
    //     </div>
    //   </form>
    // </div>
    <div>
      <PhysioAccountSettings />
    </div>
  );
}
