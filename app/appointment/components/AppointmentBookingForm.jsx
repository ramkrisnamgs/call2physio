"use client"

import { useAuth } from "@/contexts/AuthContext"
import { createAppointment } from "@/lib/firebase/appointments/write";
import { useState } from "react";
import PhysioSelector from "./PhysioSelector";
import AppointmentSummary from "./AppointmentSummary";

export default function AppointmentBookingForm() {
     const { user } = useAuth();
     const [step, setStep] = useState(1);
     const [formData, setFormData] = useState({
          patientName: user?.displayName || "",
          patientContact: "",
          patientEmail: user?.email || "",
          physio: null,
          appointmentType: "",
          date: "",
          time: "",
          notes: "",
     })

     const handleNext = () => setStep((step) => step + 1);
     const handleBack = () => setStep((prev) => prev - 1);

     const handleChange = (key, value) => {
          setFormData((prev) => ({
               ...prev,
               [key]: value,
          }))
     }

     const handleSubmit = async () => {
          try {
               await createAppointment({
                    patientId: user?.uid,
                    physioId: formData.physio.uid,
                    appointmentType: formData.appointmentType,
                    date: formData.date,
                    time: formData.time,
                    notes: formData.notes,
                    status: "upcoming",
               })
               toast.success("Appointment booked successfully");
               setStep(1);
               setFormData({
                    patientName: user?.displayName || "",
                    patientContact: "",
                    patientEmail: user?.email || "",
                    physio: null,
                    appointmentType: "",
                    date: "",
                    time: "",
                    notes: "",
               })
          } catch (error) {
               console.error("Error booking appointment:", error);
               toast.error("Failed to book appointment.")
          }
     }
  return (
     <div>
     {step === 1 && (
       <div className="space-y-4">
         <h2 className="text-xl font-semibold">Your Details</h2>
         <input
           type="text"
           placeholder="Full Name"
           value={formData.patientName}
           onChange={(e) => handleChange("patientName", e.target.value)}
           className="w-full p-3 border rounded-lg"
         />
         <input
           type="text"
           placeholder="Contact Number"
           value={formData.patientContact}
           onChange={(e) => handleChange("patientContact", e.target.value)}
           className="w-full p-3 border rounded-lg"
         />
         <button
           onClick={handleNext}
           className="w-full bg-[#35B6B4] text-white py-3 rounded-lg hover:bg-[#2da5a3] cursor-pointer"
         >
           Next
         </button>
       </div>
     )}

     {step === 2 && (
       <PhysioSelector
         selectedPhysio={formData.physio}
         onSelect={(physio) => handleChange("physio", physio)}
         onNext={handleNext}
         onBack={handleBack}
       />
     )}

     {step === 3 && (
       <div className="space-y-4">
         <h2 className="text-xl font-semibold">Choose Date & Time</h2>
         <input
           type="date"
           value={formData.date}
           onChange={(e) => handleChange("date", e.target.value)}
           className="w-full p-3 border rounded-lg"
         />
         <input
           type="time"
           value={formData.time}
           onChange={(e) => handleChange("time", e.target.value)}
           className="w-full p-3 border rounded-lg"
         />
         <textarea
           placeholder="Additional notes"
           value={formData.notes}
           onChange={(e) => handleChange("notes", e.target.value)}
           className="w-full p-3 border rounded-lg"
         />
         <div className="flex justify-between">
           <button onClick={handleBack} className="text-gray-600">
             Back
           </button>
           <button
             onClick={handleNext}
             className="bg-[#35B6B4] text-white py-3 px-6 rounded-lg"
           >
             Next
           </button>
         </div>
       </div>
     )}

     {step === 4 && (
       <AppointmentSummary
         formData={formData}
         onBack={handleBack}
         onConfirm={handleSubmit}
       />
     )}
   </div>
  )
}