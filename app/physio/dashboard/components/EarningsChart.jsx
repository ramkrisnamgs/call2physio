"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useAppointmentsByPhysio } from "@/lib/firebase/appointments/read";
import { useMonthlyEarnings } from "@/lib/firebase/earnings/hooks";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

export default function EarningsChart() {
  const { user } = useAuth();
  const {
    data: monthlyEarnings,
    isLoading,
    error,
  } = useMonthlyEarnings(user?.uid);

  if (isLoading) {
    return <div className="text-gray-500">Loading earnings chart..</div>;
  }

  if (error || !monthlyEarnings) {
    return <div className="text-red-500">Failed to load Earnings chart</div>;
  }

  // Convert { Jan: 1200, Feb:1000, ...} into array for Recharts
  const chartData = Object.entries(monthlyEarnings).map(([month, amount]) => ({
    month,
    amount,
  }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <circle cx="70" cy="70" r="70" fill="#35B6B4" />
        </svg>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-[#003A70] flex items-center gap-2">
          <svg className="w-5 h-5 text-[#35B6B4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#35B6B4" strokeWidth="2" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="#35B6B4" strokeWidth="2" />
          </svg>
          Earnings Overview
        </h3>
        <span className="text-xs text-gray-500 bg-[#f0fdfd] px-3 py-1 rounded-full border border-[#35B6B4]/20">
          Last {chartData.length} Months
        </span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 13, fill: "#003A70" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 13, fill: "#003A70" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `₹${v}`}
          />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #35B6B4",
              borderRadius: 8,
              fontSize: 14,
              color: "#003A70",
              boxShadow: "0 2px 8px rgba(53,182,180,0.08)",
            }}
            formatter={(value) => [`₹${value}`, "Earnings"]}
            labelStyle={{ color: "#35B6B4", fontWeight: 600 }}
          />
          <Bar
            dataKey="amount"
            fill="#35B6B4"
            radius={[8, 8, 0, 0]}
            maxBarSize={36}
            label={{
              position: "top",
              fill: "#003A70",
              fontSize: 13,
              fontWeight: 600,
              formatter: (v) => (v > 0 ? `₹${v}` : ""),
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-end mt-2">
        <span className="text-xs text-gray-400">
          <span className="inline-block w-3 h-3 rounded-full bg-[#35B6B4] mr-1"></span>
          Earnings per month
        </span>
      </div>
    </div>
  );
}
