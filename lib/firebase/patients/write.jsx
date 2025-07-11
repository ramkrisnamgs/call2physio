import { db } from "@/lib/firebase";
import {
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

// Create a new patient (called at signup)
export const createPatient = async ({
  uid,
  name,
  email,
  age,
  gender,
  contact,
  conditions = "",
}) => {
  if (!uid) throw new Error("Missing patient UID");

  await setDoc(doc(db, "patients", uid), {
    uid,
    name,
    email,
    age,
    gender,
    contact,
    conditions,
    createdAt: Timestamp.now(),
  });
};

// Update patient data
export const updatePatient = async (uid, updatedData) => {
  if (!uid) throw new Error("Missing patient UID");

  await updateDoc(doc(db, "patients", uid), {
    ...updateDoc(doc(db, "patients", uid), {
      ...updatedData,
      updatedAt: Timestamp.now(),
    }),
  });
};

// Delete a patient document
export const deletePatient = async (uid) => {
  if (!uid) throw new Error("Missing patient UID");
  await deleteDoc(doc(db, "patients", uid));
};
