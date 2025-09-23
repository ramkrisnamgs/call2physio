"use client";

import { useEffect, useState } from "react";
import { fetchAllAppointments, updateAppointmentStatus, deleteAppointment } from "@/lib/firebase/appointments/admin";
import toast from "react-hot-toast";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const data = await fetchAllAppointments();
      setAppointments(data);
    } catch (err) {
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      toast.success("Status updated");
      loadAppointments();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await deleteAppointment(id);
      toast.success("Appointment deleted");
      loadAppointments();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  if (loading) return <p className="p-6 text-gray-500">Loading appointments...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Patient</th>
                <th className="px-4 py-2 border">Physio</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="text-sm">
                  <td className="border px-4 py-2">{apt.patientName}</td>
                  <td className="border px-4 py-2">{apt.physioName}</td>
                  <td className="border px-4 py-2">{apt.date}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={apt.status}
                      onChange={(e) => handleStatusChange(apt.id, e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">₹{apt.amount}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleDelete(apt.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
