"use client";

import { updateAppointmentStatus } from "@/lib/firebase/appointments/write";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

export default function AppointmentCard({ appointment }) {
  const { id, patientName, date, time, reason, status } = appointment;
  const handleStatusChange = async (newStatus) => {
    const res = await updateAppointmentStatus(id, newStatus);
    if (res.success) {
      toast.success(`Appointment status updated successfully to ${newStatus}`);
    } else {
      toast.error(`Failed to update appointment status: ${res.error}`);
    }
  };

  return (
    <div className="p-4 rounded-md border shadow-sm bg-white mb-4">
      <h3 className="text-lg font-semibold mb-2">{patientName}</h3>
      <p className="text-sm text-gray-500">{reason}</p>
      <p className="text-sm mt-1">
        <span className="font-medium">Date:</span> {date}
      </p>
      <p className="text-sm mt-1">
        <span className="font-medium">Time:</span> {time}
      </p>
      <div className="flex gap-2 mt-3">
        {status === "pending" && (
          <>
            <Button
              onPress={() => handleStatusChange("confirmed")}
              className="bg-green-600 text-white px-4"
            >
              Confirm
            </Button>
            <Button
              onPress={() => handleStatusChange("cancelled")}
              className="bg-red-600 text-white px-4"
            >
              Cancel
            </Button>
          </>
        )}
        {status === "confirmed" && (
          <Button
            onPress={() => handleStatusChange("completed")}
            className="bg-blue-600 text-white px-4"
          >
            <P>Mark Complete</P>
          </Button>
        )}

        <span className="ml-auto text-xs font-medium text-gray-500">
          Status: {status}
        </span>
      </div>
    </div>
  );
}
