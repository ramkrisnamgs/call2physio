"use client";

import { useAuth } from "@/contexts/AuthContext";
import { createAppointment } from "@/lib/firebase/appointments/write";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BookingForm({ physioId, onSuccess, onClose }) {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to book an appointment");
      return;
    }

    setLoading(true);
    try {
      await createAppointment({
        physioId,
        patientId: user?.uid,
        patientName: user?.displayName || "",
        patientPhone: user?.phoneNumber || "",
        patientEmail: user?.email || "",
        date: formData?.date,
        time: formData?.time,
        notes: formData?.notes,
        fees: 0, // TODO: Get fees from physio(replace with actual physio fees)
        // status: "Pending",
      });
      toast.success("Appointment booked successfully");
      onSuccess?.();
    } catch (error) {
      toast.error("Error booking appointment: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          required
          value={formData?.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Time</label>
        <input
          type="time"
          required
          value={formData?.time}
          onChange={(e) => handleChange("time", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea
          rows="3"
          placeholder="Any additional notes or requirements?"
          value={formData?.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border rounded-lg bg-[#003A70] text-white disabled:opacity-50 hover:bg-[#35B6B4] transition-colors"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </div>
    </form>
  );
}

// export default function BookingForm({ physioId }) {
//   const { user } = useAuth();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     visitType: "Clinic",
//     date: "",
//     timeSlot: "",
//     notes: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.date || !form.timeSlot) {
//       return toast.error("Please select a date and time slot");
//     }

//     const data = {
//       patientId: user?.uid,
//       patientName: user?.displayName || "",
//       patientPhone: user?.phoneNumber || "",
//       patientEmail: user?.email || "",
//       physioId,
//       visitType: form?.visitType || "Clinic",
//       date: form?.date,
//       timeSlot: form?.timeSlot,
//       notes: form?.notes || "",
//       status: "Pending",
//     };

//     try {
//       setLoading(true);
//       await createAppointment(data);
//       toast.success("Appointment booked successfully");
//       setForm({
//         visitType: "Clinic",
//         date: "",
//         timeSlot: "",
//         notes: "",
//       });
//       router.push("/patients/appointments");
//     } catch (error) {
//       toast.error("Error booking appointment: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const timeSlots = [
//     "10:00 AM",
//     "11:00 AM",
//     "12:00 PM",
//     "01:00 PM",
//     "02:00 PM",
//     "03:00 PM",
//     "04:00 PM",
//     "05:00 PM",
//     "06:00 PM",
//   ];

//   return (
//     <form className="space-y-4 p-4 sm:p-5 border rounded-lg max-w-xl mx-auto bg-white shadow-lg">
//       <h2 className="text-xl sm:text-2xl font-bold text-[#003A70] text-center mb-4">Book Appointment</h2>

//       {/* Visit Type */}
//       <div className="space-y-1">
//         <label className="block text-sm font-semibold text-gray-700">Visit Type</label>
//         <div className="flex flex-wrap gap-4">
//           {["Clinic", "Home Visit"].map((type) => (
//             <label key={type} className="flex items-center gap-2 text-sm cursor-pointer group">
//               <input
//                 type="radio"
//                 name="visitType"
//                 value={type}
//                 checked={form.visitType === type}
//                 onChange={() => handleChange("visitType", type)}
//                 className="w-4 h-4 text-[#003A70] border-gray-300 focus:ring-[#35B6B4]"
//               />
//               <span className="group-hover:text-[#35B6B4] transition-colors">{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Date */}
//       <div className="space-y-1">
//         <label className="block text-sm font-semibold text-gray-700">Date</label>
//         <input
//           type="date"
//           className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-1 focus:ring-[#35B6B4] focus:border-transparent transition-all"
//           value={form.date}
//           onChange={(e) => handleChange("date", e.target.value)}
//         />
//       </div>

//       {/* Time Slot */}
//       <div className="space-y-1">
//         <label className="block text-sm font-semibold text-gray-700">Time Slot</label>
//         <select
//           className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-1 focus:ring-[#35B6B4] focus:border-transparent transition-all"
//           value={form.timeSlot}
//           onChange={(e) => handleChange("timeSlot", e.target.value)}
//         >
//           <option value="">Select a time slot</option>
//           {timeSlots.map((slot) => (
//             <option key={slot} value={slot}>
//               {slot}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Notes */}
//       <div className="space-y-1">
//         <label className="block text-sm font-semibold text-gray-700">Notes</label>
//         <textarea
//           className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:ring-1 focus:ring-[#35B6B4] focus:border-transparent transition-all resize-none"
//           rows={3}
//           placeholder="Describe your problem or add any special requirements..."
//           value={form.notes}
//           onChange={(e) => handleChange("notes", e.target.value)}
//         />
//       </div>

//       {/* Submit Button */}
//       <button
//         disabled={loading}
//         className="w-full px-4 py-2 rounded-lg text-white bg-[#003A70] hover:bg-[#35B6B4] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium mt-2"
//       >
//         {loading ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//             </svg>
//             Booking...
//           </span>
//         ) : (
//           "Book Appointment"
//         )}
//       </button>
//     </form>
//   );
// }
