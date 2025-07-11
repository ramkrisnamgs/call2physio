import { db } from "@/lib/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

// Update appointment status (e.g., "confirmed", "cancelled", "completed")
export async function updateAppointmentStatus(appointmentId, newStatus) {
     try {
          const ref = doc(db, "appointments", appointmentId);
          await updateDoc(ref, {
               status: newStatus,
          });
          return { success: true };
     } catch (error) {
          console.error("Error updating appointment status", error);
          return { success: false, error: error.message };
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