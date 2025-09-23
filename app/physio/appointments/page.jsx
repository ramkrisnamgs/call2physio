"use client";
import { useState } from "react";
import AppointmentCard from "./components/AppointmentCard";
import { useAuth } from "@/contexts/AuthContext";
import { useAppointmentsByPhysio } from "@/lib/firebase/appointments/read";
import StatusFilter from "./components/StatusFilter";

const dummyAppointments = [
  {
    id: 1,
    patient: "John Doe",
    date: "2024-06-20",
    time: "10:00 AM",
    status: "Upcoming",
    notes: "Knee pain follow-up",
  },
  {
    id: 2,
    patient: "Jane Smith",
    date: "2024-06-18",
    time: "2:30 PM",
    status: "Completed",
    notes: "Post-surgery rehab",
  },
  {
    id: 3,
    patient: "Alex Lee",
    date: "2024-06-22",
    time: "9:00 AM",
    status: "Upcoming",
    notes: "Initial assessment",
  },
  {
    id: 4,
    patient: "Priya Patel",
    date: "2024-06-15",
    time: "11:00 AM",
    status: "Cancelled",
    notes: "Back pain consult",
  },
];

const statusColors = {
  Upcoming: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function AppointmentsPage() {
  const { user } = useAuth();
  const { data: appointments, isLoading } = useAppointmentsByPhysio(user?.uid);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAppointments = statusFilter === "all" ? appointments : appointments?.filter((appt) => {appt.status === statusFilter});

  return (
    <div className="max-w-5xl mx-auto py-10 px-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-[#003A70]">Appointments</h1>
        <div className="w-full sm:w-auto">
          <StatusFilter status={statusFilter} setStatus={setStatusFilter} />
        </div>
      </div>

      {/* Status Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg shadow-blue-100/50 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 backdrop-blur">
            <span className="text-3xl text-blue-600 font-bold">
              {filteredAppointments?.filter((a) => a.status === "Upcoming").length || 0}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium text-blue-600/70">Upcoming</div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Appointments
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg shadow-green-100/50 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500/10 backdrop-blur">
            <span className="text-3xl text-green-600 font-bold">
              {filteredAppointments?.filter((a) => a.status === "Completed").length || 0}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium text-green-600/70">Completed</div>
            <div className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              Appointments
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-lg shadow-red-100/50 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 backdrop-blur">
            <span className="text-3xl text-red-600 font-bold">
              {filteredAppointments?.filter((a) => a.status === "Cancelled").length || 0}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium text-red-600/70">Cancelled</div>
            <div className="text-xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
              Appointments
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <svg className="animate-spin h-6 w-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span className="text-blue-600 font-medium">Loading appointments...</span>
        </div>
      ) : filteredAppointments?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAppointments.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-16 text-gray-400">
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-lg">No appointments found.</p>
        </div>
      )}
    </div>
  );
}

// export default function AppointmentPage() {
//   const [filter, setFilter] = useState("All");

//   const filteredAppointments =
//     filter === "All"
//       ? dummyAppointments
//       : dummyAppointments.filter((appt) => appt.status === filter);

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold text-[#003A70] mb-6">Appointments</h1>

//       {/* Status Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//         {/* Upcoming Card */}
//         <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-5 shadow group hover:scale-[1.03] transition-transform duration-200">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
//             <span className="text-2xl text-blue-600 font-bold">
//               {
//                 dummyAppointments.filter((a) => a.status === "Upcoming").length
//               }
//             </span>
//           </div>
//           <div>
//             <div className="text-sm text-gray-500">Upcoming</div>
//             <div className="text-lg font-semibold text-blue-700">
//               Appointments
//             </div>
//           </div>
//         </div>
//         {/* Completed Card */}
//         <div className="flex items-center gap-4 bg-green-50 rounded-xl p-5 shadow group hover:scale-[1.03] transition-transform duration-200">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
//             <span className="text-2xl text-green-600 font-bold">
//               {
//                 dummyAppointments.filter((a) => a.status === "Completed").length
//               }
//             </span>
//           </div>
//           <div>
//             <div className="text-sm text-gray-500">Completed</div>
//             <div className="text-lg font-semibold text-green-700">
//               Appointments
//             </div>
//           </div>
//         </div>
//         {/* Cancelled Card */}
//         <div className="flex items-center gap-4 bg-red-50 rounded-xl p-5 shadow group hover:scale-[1.03] transition-transform duration-200">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
//             <span className="text-2xl text-red-600 font-bold">
//               {
//                 dummyAppointments.filter((a) => a.status === "Cancelled").length
//               }
//             </span>
//           </div>
//           <div>
//             <div className="text-sm text-gray-500">Cancelled</div>
//             <div className="text-lg font-semibold text-red-700">
//               Appointments
//             </div>
//           </div>
//         </div>
//         <AppointmentCard appointment={dummyAppointments[0]} />
//       </div>

//       <div className="flex flex-wrap gap-3 mb-8">
//         {["All", "Upcoming", "Completed", "Cancelled"].map((status) => (
//           <button
//             key={status}
//             onClick={() => setFilter(status)}
//             className={`px-4 py-2 rounded-lg font-semibold border transition ${
//               filter === status
//                 ? "bg-[#35B6B4] text-white border-[#35B6B4]"
//                 : "bg-white text-[#003A70] border-gray-300 hover:bg-gray-100"
//             }`}
//           >
//             {status}
//           </button>
//         ))}
//       </div>
//       <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Patient
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Time
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Notes
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredAppointments.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={5}
//                   className="px-6 py-8 text-center text-gray-400 text-lg"
//                 >
//                   No appointments found.
//                 </td>
//               </tr>
//             ) : (
//               filteredAppointments.map((appt) => (
//                 <tr key={appt.id} className="hover:bg-[#f0fdfd] transition">
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
//                     {appt.patient}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {appt.date}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {appt.time}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[appt.status]}`}
//                     >
//                       {appt.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-600">
//                     {appt.notes}
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
