"use client"

import { useAuth } from "@/contexts/AuthContext";
import { useAppointmentsByPhysio } from "@/lib/firebase/appointments/read";
import { format } from "date-fns";


export default function UpcomingAppointments() {
  const { user } = useAuth();
  const {
    data: appointments,
    isLoading,
    error,
  } = useAppointmentsByPhysio(user?.uid);

  if (isLoading) {
    return <div className="text-gray-500">Loading appointments...</div>;
  }

  if (error) {
    return <div className="text-red-500">Failed to load appointments + ${error}</div>;
  }

  // Filter future appointments
  const now = new Date();
  const upcoming = appointments
    ?.filter((a) => a.timestamp?.toDate() > now)
    ?.sort((a, b) => a.timestamp?.toDate() > now)
    ?.sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate())
    ?.slice(0, 5);

    return (
      <div>
        <h2 className="text-lg font-bold mb-3">Upcoming Appointments</h2>
        {!appointments || appointments.length === 0 ? (
          <p className="text-gray-500 text-sm">No upcoming appointments.</p>
        ) : (
          <ul className="space-y-3">
            {upcoming && upcoming.map((appt) => {
              if (!appt.timestamp) return null;
              const appointmentDate = appt.timestamp.toDate();
              return (
                <li key={appt.id} className="border p-3 rounded">
                  <p><strong>Date: </strong>{format(appointmentDate, 'PP')}</p>
                  <p><strong>Time: </strong>{format(appointmentDate, 'p')}</p>
                  <p><strong>Notes: </strong>{appt.notes || "N/A"}</p>
                  <p><strong>Status: </strong>{appt.status || "Pending"}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    )
  // return (
  //   <div className="bg-white p-6 rounded-2xl shadow-lg border relative overflow-hidden">
  //     <div className="absolute -top-8 -right-8 opacity-10 pointer-events-none">
  //       <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
  //         <circle cx="60" cy="60" r="60" fill="#35B6B4" />
  //       </svg>
  //     </div>
  //     <h3 className="text-xl font-semibold mb-4 text-[#003A70] flex items-center gap-2">
  //       <span className="inline-block w-3 h-3 bg-[#35B6B4] rounded-full animate-pulse"></span>
  //       Upcoming Appointments
  //     </h3>
  //     {upcoming?.length === 0 ? (
  //       <p className="text-gray-500 text-sm">No upcoming appointments.</p>
  //     ) : (
  //       <ul className="space-y-3">
  //       {upcoming?.map((appt) => (
  //         <li
  //           key={appt.id}
  //           className="flex items-center justify-between bg-[#f0fdfd] rounded-lg px-4 py-2 hover:bg-[rgb(224,247,250)] transition-colors border border-transparent hover:border-[#35B6B4] shadow-sm"
  //         >
  //           <div className="flex items-center gap-3">
  //             <div className="w-10 h-10 rounded-full bg-[#35B6B4]/20 flex items-center justify-center text-[#35B6B4] font-bold text-lg">
  //               {appt.patientName
  //                 ? appt.patientName
  //                     .split(" ")
  //                     .map((n) => n[0])
  //                     .join("")
  //                     .slice(0, 2)
  //                 : "UP"}
  //             </div>
  //             <div>
  //               <p className="text-base font-semibold text-gray-800">
  //                 {appt.patientName || "Unnamed Patient"}
  //               </p>
  //               <p className="text-xs text-gray-500 flex items-center gap-1">
  //                 <svg
  //                   className="w-4 h-4 text-[#35B6B4] inline-block"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   strokeWidth={2}
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <rect x="3" y="4" width="18" height="18" rx="2" stroke="#35B6B4" strokeWidth="2" />
  //                   <path d="M16 2v4M8 2v4M3 10h18" stroke="#35B6B4" strokeWidth="2" />
  //                 </svg>
  //                 {format(appt.timestamp.toDate(), "PPPp")}
  //               </p>
  //             </div>
  //           </div>
  //           <div className="flex flex-col items-end">
  //             <span
  //               className={`text-xs font-semibold px-3 py-1 rounded-full ${
  //                 appt.status === "Completed"
  //                   ? "bg-green-100 text-green-700"
  //                   : appt.status === "Cancelled"
  //                   ? "bg-red-100 text-red-700"
  //                   : "bg-blue-100 text-blue-700"
  //               }`}
  //             >
  //               {appt.status || "Scheduled"}
  //             </span>
  //             {/* Optionally, add a button for quick actions */}
  //             {/* <button className="mt-2 text-xs text-[#35B6B4] hover:underline">View</button> */}
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //     )}

      
  //   </div>
  // );
}
