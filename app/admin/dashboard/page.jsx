"use client";

import { useAdminStats } from "@/lib/firebase/admin/hooks";
import { CircularProgress } from "@heroui/react";
import { FaUserMd, FaUsers, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";

export default function AdminDashboard() {
  const { data, isLoading } = useAdminStats();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" value={data?.users} icon={<FaUsers className="text-blue-500" />} />
        <Card title="Physios" value={data?.physios} icon={<FaUserMd className="text-green-500" />} />
        <Card title="Patients" value={data?.patients} icon={<FaUsers className="text-purple-500" />} />
        <Card title="Earnings" value={`₹${data?.earnings}`} icon={<FaMoneyBillWave className="text-yellow-500" />} />
      </div>

      {/* Pending Approvals */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
        <p className="text-gray-700 text-lg">
          There are <span className="font-bold">{data?.pending}</span> physios waiting for approval.
        </p>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
