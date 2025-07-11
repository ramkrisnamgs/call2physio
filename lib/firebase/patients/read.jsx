import { db } from "@/lib/firebase"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

// Get all patients for a given physio (via appointments)
export const getPatientById = async(uid) => {
     const snapshot = await getDoc(doc(db, "patients", uid));
     return snapshot.exists() ? snapshot.data() : null;
}

// Get all patients for a given physio (via appointments)
export const getPatientsByPhysio = async (physioId) => {
     if (!physioId) throw new Error("Missing physioId");

     const q = query(
          collection(db, "appointments"), where("physioId", "==", physioId)
     )

     const appointmentSnapshot = await getDocs(q);
     const patientId = new Set();
     appointmentSnapshot.forEach((doc) => {
          patientId.add(doc.data().patientId);
     });

     const PatientPromises = Array.from(patientId).map((pid) => {getPatientById(pid)});
     return await Promise.all(PatientPromises);
}