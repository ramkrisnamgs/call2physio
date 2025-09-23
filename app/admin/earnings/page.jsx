"use client";

import { useAllEarnings, useEarningsSummary } from "@/lib/firebase/admin/earnings/hooks";
import { CircularProgress } from "@heroui/react";

export default function AdminEarningsPage() {
  const { data: earnings, isLoading } = useAllEarnings();
  const { data: summary, isLoading: summaryLoading } = useEarningsSummary();

  if (isLoading || summaryLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Total Revenue</h2>
          <p className="text-2xl font-bold">₹{summary.total}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Platform Share</h2>
          <p className="text-2xl font-bold text-green-600">₹{summary.platformShare}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Physio Payouts</h2>
          <p className="text-2xl font-bold text-blue-600">₹{summary.physioShare}</p>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">All Transactions</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Physio</th>
              <th className="p-3 border">Patient</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Platform Share</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-3 border">{row.physioName || row.physioId}</td>
                <td className="p-3 border">{row.patientName || row.patientId}</td>
                <td className="p-3 border">
                  {new Date(row.date?.seconds * 1000).toLocaleDateString()}
                </td>
                <td className="p-3 border">₹{row.amount}</td>
                <td className="p-3 border text-red-600">₹{row.platformShare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
