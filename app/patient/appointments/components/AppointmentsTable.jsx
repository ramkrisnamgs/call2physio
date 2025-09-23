"use client";

import AppointmentActions from "./AppointmentActions";

export default function AppointmentsTable({ openReview }) {
     const { data: appointments, isLoading } = usePatientsAppointments();
}

// export default function AppointmentsTable({ appointments, reload }) {
//   // if (appointments.length === 0)
//   if (!appointments) {
//     return <p className="text-gray-600">No appointments found.</p>;
//   }

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border border-gray-200 rounded-lg">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="px-4 py-2">Physio</th>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appt) => (
//             <tr key={appt.id} className="border-t">
//               <td className="px-4 py-2">{appt.physioName || "N/A"}</td>
//               <td className="px-4 py-2">{appt.date}</td>
//               <td className="px-4 py-2">{appt.date}</td>
//               <td className="px-4 py-2">
//                 <AppointmentActions appointment={appt} reload={reload} />
//               </td>
//               {/* <td className="px-4 py-2">{appt.date}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
