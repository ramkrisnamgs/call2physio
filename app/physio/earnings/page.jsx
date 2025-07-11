"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useEarnings } from "@/lib/firebase/earnings/hooks";
import { CircularProgress } from "@heroui/react";
import { useMemo, useState } from "react";
import EarningsSummary from "./components/EarningsSummary";
import EarningsTable from "./components/EarningsTable";

const dummyEarnings = [
  {
    id: 1,
    date: "2024-06-01",
    patient: "John Doe",
    service: "Physiotherapy Session",
    amount: 1200,
    status: "Paid",
  },
  {
    id: 2,
    date: "2024-06-05",
    patient: "Jane Smith",
    service: "Consultation",
    amount: 800,
    status: "Pending",
  },
  {
    id: 3,
    date: "2024-06-10",
    patient: "Alex Lee",
    service: "Rehabilitation",
    amount: 1500,
    status: "Paid",
  },
  {
    id: 4,
    date: "2024-06-12",
    patient: "Priya Patel",
    service: "Follow-up",
    amount: 900,
    status: "Paid",
  },
];

const statusColors = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function EarningsPage() {
  const { user } = useAuth();
  const { earnings, isLoading } = useEarnings(user?.uid);

  const summaryStats = useMemo(() => {
    let total = 0,
      thisMonth = 0,
      paidSessions = 0,
      unpaidSessions = 0;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    earnings?.forEach((e) => {
      total += e.amount;
      const d = new Date(e.date);
      if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
        thisMonth += e.amount;
      }
      if (e.status === "Paid") {
        paidSessions++;
      } else {
        unpaidSessions++;
      }
    });

    return { total, thisMonth, paidSessions, unpaidSessions };
  }, [earnings]);

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-semibold text-gray-800">Earnings</h1>
      <EarningsSummary stats={summaryStats}/>
      <EarningsTable earnings={earnings || []}/>
    </div>
  )
}

// export default function EarningsPage() {
//   const [filter, setFilter] = useState("All");

//   const filteredEarnings =
//     filter === "All"
//       ? dummyEarnings
//       : dummyEarnings.filter((e) => e.status === filter);

//   const totalEarnings = dummyEarnings
//     .filter((e) => e.status === "Paid")
//     .reduce((sum, e) => sum + e.amount, 0);

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold text-[#003A70] mb-6">Earnings</h1>
//       <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div className="bg-[#35B6B4] text-white rounded-2xl px-8 py-6 shadow-lg flex flex-col items-center md:items-start">
//           <span className="text-lg font-semibold">Total Earnings</span>
//           <span className="text-3xl font-bold mt-2">&#8377;{totalEarnings.toLocaleString()}</span>
//         </div>
//         <div className="flex gap-3 mt-4 md:mt-0">
//           {["All", "Paid", "Pending"].map((status) => (
//             <button
//               key={status}
//               onClick={() => setFilter(status)}
//               className={`px-4 py-2 rounded-lg font-semibold border transition ${
//                 filter === status
//                   ? "bg-[#003A70] text-white border-[#003A70]"
//                   : "bg-white text-[#003A70] border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Patient
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Service
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Amount (&#8377;)
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredEarnings.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={5}
//                   className="px-6 py-8 text-center text-gray-400 text-lg"
//                 >
//                   No earnings found.
//                 </td>
//               </tr>
//             ) : (
//               filteredEarnings.map((earning) => (
//                 <tr key={earning.id} className="hover:bg-[#f0fdfd] transition">
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {earning.date}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
//                     {earning.patient}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {earning.service}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">
//                     &#8377;{earning.amount.toLocaleString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[earning.status]}`}
//                     >
//                       {earning.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
