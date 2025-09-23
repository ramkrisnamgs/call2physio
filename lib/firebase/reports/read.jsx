import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";

/**
 * Fetch all reports for a given patient ordered by uploadedAt desc
 * Returns array of { id, name, fileName, url, type, size, category, notes, uploadedAt }
 */
export async function fetchPatientReports(uid) {
  if (!uid) return [];
  const reportsRef = collection(db, "patients", uid, "reports");
  const q = query(reportsRef, orderBy("uploadedAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Fetch all reports across patients
 */

export async function fetchAllReports() {
  const q = query(collection(db, "reports"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Get file download URL
 */
export async function getReportDownloadURL(filePath) {
  const fileRef = ref(storage, filePath);
  return await getDownloadURL(fileRef);
}
