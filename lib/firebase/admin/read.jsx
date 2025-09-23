// lib/firebase/admin/read.jsx
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Get total users count
export async function getTotalUsers() {
  const snapshot = await getDocs(collection(db, "user"));
  return snapshot.size;
}

// Get total physios
export async function getTotalPhysios() {
  const q = query(collection(db, "user"), where("role", "==", "physio"));
  const snapshot = await getDocs(q);
  return snapshot.size;
}

// Get total patients
export async function getTotalPatients() {
  const q = query(collection(db, "user"), where("role", "==", "patient"));
  const snapshot = await getDocs(q);
  return snapshot.size;
}

// Get pending physios (not approved yet)
export async function getPendingPhysios() {
  const q = query(
    collection(db, "user"),
    where("role", "==", "physio"),
    where("isApproved", "==", false)
  );
  const snapshot = await getDocs(q);
  return snapshot.size;
}

// Get total earnings
export async function getTotalEarnings() {
  const snapshot = await getDocs(collection(db, "earnings"));
  let total = 0;
  snapshot.forEach((doc) => {
    total += doc.data().amount || 0;
  });
  return total;
}
