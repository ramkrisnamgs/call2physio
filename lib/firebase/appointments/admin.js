import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";

// Fetch all appointments
export async function fetchAllAppointments() {
     const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
     const snapshot = await getDocs(q);
     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

//Update appointment status (e.g., completed, cancelled, ....)
export async function updateAppointmentStatus(id, status) {
     const ref = doc(db, "appointments", id);
     await updateDoc(ref, { status });
}

// Delete appointment (rare, but admin override)
export async function deleteAppointment(id) {
     const ref = doc(db, "appointments", id);
     await deleteDoc(ref);
}