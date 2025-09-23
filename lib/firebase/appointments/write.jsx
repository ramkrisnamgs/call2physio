import { db } from "@/lib/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";

// Create a new appointment
export const createAppointment = async ({
  physioId,
  patientId,
  date,
  time,
  notes,
  fees,
  status = "pending", // pending | confirmed | cancelled | completed
}) => {
  try {
    const docRef = await addDoc(collection(db, "appointments"), {
      physioId,
      patientId,
      date,
      time,
      notes,
      fees,
      status,
      createdAt: Timestamp.now(),
    })
    return docRef?.id;
  } catch (error) {
    // console.error("Error creating appointment", error);
    throw error;
  }
}

// export async function createAppointment(appointmentData) {
//   const ref = collection(db, "appointments");
//   const data = {
//     ...appointmentData,
//     createdAt: serverTimestamp(),
//     status: "pending",
//   };

//   const dataRef = await addDoc(ref, data);
//   return docRef?.id;
// }



// Update appointment status (e.g., "confirmed", "cancelled", "completed")
export async function updateAppointmentStatus(appointmentId, newStatus, notes = "") {
  try {
    const ref = doc(db, "appointments", appointmentId);
    await updateDoc(ref, {
      status: newStatus,
      notes,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating appointment status", error);
    return { success: false, error: error.message };
  }
}

// Reschedule an appointment
export async function rescheduleAppointment(appointmentId, newDate, newTimeSlot) {
  const ref = doc(db, "appointments", appointmentId);

  // Get the current appointment data to append reschedule history
  const current = await getDoc(ref);
  if (!current.exists()) throw new Error("Appointment not found");

  const { date, timeSlot, rescheduleHistory = [] } = current.data();

  await updateDoc(ref, {
     date: newDate,
     timeSlot: newTimeSlot,
     rescheduleHistory: [
          ...rescheduleHistory,
          {
               oldData: date,
               oldTimeSlot: timeSlot,
               newDate,
               newTimeSlot,
               updatedAt: serverTimestamp(),
          }
     ]
  })
}

// Mark appointment as completed
export const completeAppointment = async (appointmentId) => {
  try {
    const ref = doc(db, "appointments", appointmentId);
    await updateDoc(ref, {
      status: "completed",
    });
    return true;
  } catch (error) {
    console.error("Error completing appointment", error);
    throw error;
  }
}

// Add Review to an appointment(only for completed appointments by patient)
export async function addAppointmentReview(appointmentId, rating, comment) {
     try {
      const ref = doc(db, "appointments", appointmentId);
     await updateDoc(ref, {
          review: {
               rating,
               comment,
               reviewedAt: serverTimestamp(),
          }
     });
     return { success: true };       
     } catch (error) {
      // console.log("Error adding review", error);
      throw error;      
     }
     
}

// Delete an appointment
export async function deleteAppointment(appointmentId) {
  try {
    const ref = doc(db, "appointments", appointmentId);
    await deleteDoc(ref);
    return { success: true };
  } catch (error) {
    console.error("Error deleting appointment", error);
    return { success: false, error: error.message };
  }
}

// Cancel an appointment
export const cancelAppointment = async (appointmentId) => {
  try {
    const ref = doc(db, "appointments", appointmentId);
    await updateDoc(ref, {
      status: "cancelled",
    })
    return true;
  } catch (error) {
    console.error("Error canceling appointment", error);
    throw error;
  }
}
