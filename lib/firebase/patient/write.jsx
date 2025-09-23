import { db, storage } from "@/lib/firebase";
import {
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


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


// Update patient profile (Firestore + Auth)
export async function updatePatientProfile(uid, { displayName, photoURL }) {
  const refDoc = doc(db, "user", uid);
  await updateDoc(refDoc, {
    displayName,
    photoURL,
    updatedAt: new Date(),
  });
}

// Upload profile image
export async function uploadPatientPhoto(uid, file) {
  const fileRef = ref(storage, `patient_photos/${uid}/${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

