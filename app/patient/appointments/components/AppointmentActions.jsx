"use client";

// import {
//   deleteAppointment,
//   rescheduleAppointment,
// } from "@/lib/firebase/appointments/write";
// import { button } from "@heroui/theme";
// import { useState } from "react";
// import toast from "react-hot-toast";
import { useState } from "react";

export default function AppointmentActions({ onCancel, onReschedule, status }) {
  const [rescheduleMode, setRescheduleMode] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  if (status === "cancelled") return null;

  return (
    <div className="mt-3 space-x-2">
      {!rescheduleMode ? (
        <>
          {status !== "completed" && (
            <button
              onClick={onCancel}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >
              Cancel
            </button>
          )}
          <button
            onClick={() => setRescheduleMode(true)}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Reschedule
          </button>
        </>
      ) : (
        <div className="flex gap-2 items-center">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
          <button
            onClick={() => {
              onReschedule(newDate, newTime);
              setRescheduleMode(false);
            }}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}


// export default function AppointmentActions({ appointment, onUpdate }) {
//   const [showReview, setShowReview] = useState(false);
//   const [rescheduleDate, setRescheduleDate] = useState("");
//   const [loading, setLoading] = useState(false);

//   // cancel appointment
//   const handleCancel = async () => {
//     if (!confirm("Are you sure you want to cancel this appointment?")) return;

//     try {
//       setLoading(true);
//       await deleteAppointment(appointment?.id);
//       toast.success("Appointment cancelled");
//       onUpdate?.();
//     } catch (error) {
//       toast.error("Failed to cancel appointment", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // reschedule appointment
//   const handleReschedule = async () => {
//     if (!rescheduleDate) {
//       toast.error("Please select a date to reschedule");
//       return;
//     }

//     try {
//       setLoading(true);
//       await rescheduleAppointment(appointment.id, rescheduleDate);
//       toast.success("Appointment rescheduled");
//       setRescheduleDate("");
//       onUpdate?.();
//     } catch (error) {
//       toast.error("Failed to reschedule appointment", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-3">
//       {/* Cancel */}
//       {appointment.status === "upcoming" && (
//         <button
//           onClick={handleCancel}
//           disabled={loading}
//           className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Cancel
//         </button>
//       )}
//       {/* Reschedule */}
//       {appointment.status === "upcoming" && (
//         <div className="flex gap-2 items-center">
//           <input
//             type="date"
//             value={rescheduleDate}
//             onChange={(e) => setRescheduleDate(e.target.value)}
//             className="border rounded px-3 py-1 text-sm"
//           />
//           <button
//             onClick={handleReschedule}
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
//           >
//             Reschedule
//           </button>
//         </div>
//       )}

//       {/* Review */}
//       {appointment.status === "completed" && !appointment.reviewed && (
//         <div>
//           {!showReview ? (
//             <button
//               onClick={() => setShowReview(true)}
//               className="w-full bg-[#35B6B4] hover:bg-[#2a9391] text-white px-4 py-2 rounded"
//             >
//               Leave a Review
//             </button>
//           ) : (
//             <ReviewForm
//               physioId={appointment.physioId}
//               appointmentId={appointment.id}
//               onSuccess={() => {
//                 setShowReview(false);
//                 onUpdate?.();
//               }}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
