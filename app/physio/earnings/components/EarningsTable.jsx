"use client";

import { useState } from "react";

export default function EarningsTable({ earnings }) {
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const sortedData = [...earnings].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (sortOrder === "asc") return valA > valB ? 1 : -1;
    else return valA < valB ? 1 : -1;
  });

  const toggleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow border bg-white">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th
              className={`px-6 py-3 text-left font-semibold tracking-wide cursor-pointer select-none transition hover:bg-gray-100 ${sortKey === "date" ? "text-blue-700" : "text-gray-700"}`}
              onClick={() => toggleSort("date")}
            >
              <span className="flex items-center gap-1">
                Date
                {sortKey === "date" && (
                  <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>
                )}
              </span>
            </th>
            <th className="px-6 py-3 text-left font-semibold tracking-wide text-gray-700">Patient</th>
            <th className="px-6 py-3 text-left font-semibold tracking-wide text-gray-700">Service</th>
            <th
              className={`px-6 py-3 text-left font-semibold tracking-wide cursor-pointer select-none transition hover:bg-gray-100 ${sortKey === "status" ? "text-blue-700" : "text-gray-700"}`}
              onClick={() => toggleSort("status")}
            >
              <span className="flex items-center gap-1">
                Status
                {sortKey === "status" && (
                  <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>
                )}
              </span>
            </th>
            <th
              className={`px-6 py-3 text-left font-semibold tracking-wide cursor-pointer select-none transition hover:bg-gray-100 ${sortKey === "amount" ? "text-blue-700" : "text-gray-700"}`}
              onClick={() => toggleSort("amount")}
            >
              <span className="flex items-center gap-1">
                Amount&nbsp;<span className="text-xs text-gray-400">(₹)</span>
                {sortKey === "amount" && (
                  <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>
                )}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-10 text-center text-gray-400 text-lg">
                No earnings found.
              </td>
            </tr>
          ) : (
            sortedData.map((entry, idx) => (
              <tr
                key={idx}
                className="border-b last:border-b-0 hover:bg-blue-50 transition"
              >
                <td className="px-6 py-3 whitespace-nowrap text-gray-700">
                  {entry.date
                    ? new Date(entry.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "-"}
                </td>
                <td className="px-6 py-3 whitespace-nowrap font-medium text-gray-900">
                  {entry.patientName || entry.patient || "-"}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-gray-700">
                  {entry.service || "-"}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        entry.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : entry.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-gray-900 font-semibold">
                  ₹{entry.amount?.toLocaleString?.("en-IN") ?? entry.amount ?? "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
