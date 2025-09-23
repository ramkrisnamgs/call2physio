"use client";

import { useState } from "react";
import {
  cancelAppointment,
  rescheduleAppointment,
} from "@/lib/firebase/appointments/write";
import AppointmentActions from "./AppointmentActions";
import ReviewForm from "./ReviewForm";

export default function AppointmentCard({ appointment }) {
  const [status, setStatus] = useState(appointment.status);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleCancel = async () => {
    try {
      await cancelAppointment(appointment.id);
      setStatus("cancelled");
    } catch (err) {
      console.error("Cancel failed", err);
    }
  };

  const handleReschedule = async (newDate, newTime) => {
    try {
      await rescheduleAppointment(appointment.id, newDate, newTime);
      setStatus("rescheduled");
    } catch (err) {
      console.error("Reschedule failed", err);
    }
  };

  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold">{appointment.physioName}</h3>
      <p className="text-sm text-gray-600">
        {appointment.date} at {appointment.time}
      </p>
      <p className="text-sm">
        Status: <span className="font-medium">{status}</span>
      </p>

      <AppointmentActions
        onCancel={handleCancel}
        onReschedule={handleReschedule}
        status={status}
      />

      {/* Review button (only if appointment completed) */}
      {status === "completed" && !showReviewForm && (
        <button
          onClick={() => setShowReviewForm(true)}
          className="mt-3 px-3 py-1 bg-yellow-500 text-white rounded text-sm"
        >
          Leave a Review
        </button>
      )}

      {/* Review Form */}
      {showReviewForm && (
        <ReviewForm
          appointmentId={appointment.id}
          physioId={appointment.physioId}
          onClose={() => setShowReviewForm(false)}
        />
      )}
    </div>
  );
}
