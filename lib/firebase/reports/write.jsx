import { db, storage } from "@/lib/firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  ref,
} from "firebase/storage";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

/**
 * Upload a patient report to Storage and save metadata in Firestore
 * @param {string} uid - patient uid
 * @param {File} file - File object from input
 * @param {Object} metadata - extra metadata (category, notes)
 */
export async function uploadPatientReport(uid, file, metadata = {}) {
  if (!uid || !file) throw new Error("Missing uid or file");

  // Storage path
  const path = `patient_reports/${uid}/${file.name}`;
//   const fileRef = storageRef(storage, path);
  const fileRef = ref(storage, path);

  // upload
  await uploadBytes(fileRef, file);

  // get url
  const url = await getDownloadURL(fileRef);

  // Save to Firestore under collection: patients/{uid}/reports
  const reportsRef = collection(db, "patients", uid, "reports");
  const docRef = await addDoc(reportsRef, {
    name: file.name,
    fileName: file.name,
    url,
    type: file.type || "",
    size: file.size || 0,
    category: metadata.category || "Other",
    notes: metadata.notes || "",
    uploadedAt: serverTimestamp(),
  });

  return { id: docRef.id, url };
}

/**
 * Delete a report (storage file + firestore doc)
 * @param {string} uid
 * @param {string} reportId
 * @param {string} fileName
 */
export async function deletePatientReport(uid, reportId, fileName) {
  if (!uid || !reportId || !fileName) throw new Error("Missing params");

  // delete from storage
  const path = `patient_reports/${uid}/${fileName}`;
  const fileRef = storageRef(storage, path);
  await deleteObject(fileRef).catch((e) => {
    // ignore storage delete failures for missing file, still attempt firestore delete
    console.warn("deletePatientReport: storage delete failed", e?.message || e);
  });

  // delete firestore doc
  const docRef = doc(db, "patients", uid, "reports", reportId);
  await deleteDoc(docRef);
}

export async function deleteReport(reportId, filePath) {
  // Delete from Firestore
  await deleteDoc(doc(db, "reports", reportId));
  // Delete from Storage
  const fileRef = ref(storage, filePath);
  await deleteObject(fileRef);
}
