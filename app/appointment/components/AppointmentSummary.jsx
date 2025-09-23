"use client";

export default function AppointmentSummary({ formData, onBack, onConfirm }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Confirm Appointment</h2>
      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <p><strong>Patient:</strong> {formData.patientName}</p>
        <p><strong>Contact:</strong> {formData.patientContact}</p>
        <p><strong>Physio:</strong> {formData.physio?.displayName}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-600">Back</button>
        <button
          onClick={onConfirm}
          className="bg-[#35B6B4] text-white py-3 px-6 rounded-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
