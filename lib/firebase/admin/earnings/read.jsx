import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

/**
 * Fetch all earnings across all physios
 */
export async function fetchAllEarnings() {
  const q = query(collection(db, "earnings"), orderBy("date", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/**
 * Fetch earnings summary (total, platform share, physio share)
 */
export async function fetchEarningsSummary() {
  const q = query(collection(db, "earnings"));
  const snapshot = await getDocs(q);

  let total = 0;
  let platformShare = 0;
  let physioShare = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    total += data.amount || 0;
    platformShare += (data.platformShare || 0);
    physioShare += (data.amount || 0) - (data.platformShare || 0);
  });

  return { total, platformShare, physioShare };
}
