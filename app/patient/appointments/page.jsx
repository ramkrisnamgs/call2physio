"use client";

import { useAuth } from '@/contexts/AuthContext';
import { fetchAppointmentsByPatient } from '@/lib/firebase/appointments/read';
import React, { useEffect, useState } from 'react'
import AppointmentsTable from './components/AppointmentsTable';

import { fetchAppointmentsByPatientId } from "@/lib/firebase/appointments/read";
import AppointmentCard from "./components/AppointmentCard";

export default function PatientAppointmentsPage() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const loadAppointments = async () => {
      setLoading(true);
      try {
        const data = await fetchAppointmentsByPatientId(user.uid);
        setAppointments(data);
      } catch (err) {
        console.error("Failed to load appointments", err);
      } finally {
        setLoading(false);
      }
    };
    loadAppointments();
  }, [user]);

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div className="space-y-4">
      <h1 className="mt-6 text-4xl font-semibold text-blue-700">My Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))
      )}
    </div>
  );
}


// export default function PatientAppointmentPage() {
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const handleOpenReview = (appointment) => {
//     setSelectedAppointment(appointment);
//   }

//   const handleCloseReview = () => {
//     setSelectedAppointment(null);
//   }

//   return ( 
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-6">My Appointment</h1>

//       <AppointmentsTable appointments={appointments} reload={loadAppointments} />

//       {/* Review Drawer */}
//       {selectedAppointment && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
//             <button onClick={handleCloseReview} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">X</button>
//             <ReviewForm appointmentId={selectedAppointment.id} physioId={selectedAppointment.physioId} onClose={handleCloseReview} />
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// const PatientAppointmentPage = () => {
//   const { user } = useAuth();
//   const {appointments, setAppointments} = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadAppointments = async () => {
//     if (!user?.uid) return;
//     try {
//       const data = await fetchAppointmentsByPatient(user.uid);
//       setAppointments(data);
//     } catch (error) {
//       console.error("Error loading appointments:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     loadAppointments();
//   }, [user]);
//   return (
//     <div className='p-6'>
//       <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
//       <AppointmentsTable appointments={appointments} reload={loadAppointments} />
//     </div>
//   )
// }

// export default PatientAppointmentPage