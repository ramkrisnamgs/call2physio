import useSWRSubscription from "swr/subscription";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

/**
 * Real-time hook for patient's reports
 * usage: const { reports, isLoading, error } = usePatientReports(uid)
 */
export function usePatientReports(uid) {
  const { data, error } = useSWRSubscription(
    uid ? ["patientReports", uid] : null,
    ([, uid], { next }) => {
      const q = query(collection(db, "patients", uid, "reports"), orderBy("uploadedAt", "desc"));
      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const arr = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          next(null, arr);
        },
        (err) => next(err, null)
      );
      return () => unsub();
    }
  );

  return {
    reports: data || [],
    isLoading: data === undefined,
    error,
  };
}
