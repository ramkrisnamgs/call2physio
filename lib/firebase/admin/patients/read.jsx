/**
 * Fetch all patients
 */

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchAllPatients() {
     const snapshot = await getDocs(collection(db, "user"));
     return snapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
     })).filter((patient) => patient.role === "patient");
}

/**
 * Delete a patient
 * @param {string} uid Patient's uid
 * @returns {Promise<void>}
 */

export async function deletePatient(uid) {
     const ref = doc(db, "user", uid);
     await deleteDoc(ref);    
}