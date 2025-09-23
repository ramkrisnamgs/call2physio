import { db } from "@/lib/firebase";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import useSWRSubscription from "swr/subscription";
import { where } from "firebase/firestore";

/**
 * Hook: Get appointments for a physio
 * @param {string} physioId - The physio's ID
 * @returns {object} - The appointments for the physio
 */
export function useAppointmentsByPhysio(physioId) {
  const { data, error } = useSWRSubscription(
    physioId ? ["appointments_physio", physioId] : null,
    ([, physioId], { next }) => {
      const q = query(
        collection(db, "appointments"),
        where("physioId", "==", physioId),
        orderBy("date", "asc"),
        orderBy("time", "asc")
      );

      const unsub = onSnapshot(
        q,
        onSnapshot(
          q,
          (snapshot) => {
            const appointments = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            next(null, appointments);
          },
          (err) => next(err)
        )
      );
      return () => unsub();
    }
  );
  return {
    appointments: data || [],
    isLoading: !error && !data,
    error,
  };
}

/**
 * Hook: Get appointments for a patient
 * @param {string} patientId - The patient's ID
 * @returns {object} - The appointments for the patient
 */
export function useAppointmentsByPatient(patientId) {
  const { data, error } = useSWRSubscription(
    patientId ? ["appointments_patient", patientId] : null,
    ([, patientId], { next }) => {
      const q = query(
        collection(db, "appointments"),
        where("patientId", "==", patientId),
        orderBy("date", "asc"),
        orderBy("time", "asc")
      );
      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const appointments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          next(null, appointments);
        },
        (err) => next(err)
      );
      return () => unsub();
    }
  );
  return {
    appointments: data || [],
    isLoading: !error && !data,
    error,
  };
}

//  useAppointmentsByPhysio
// export function useAppointmentsByPhysio(physioId) {
//      const { data, error } = useSWRSubscription(
//           ["appointments", physioId], ([_, uid], { next }) => {
//                const q = query(collection(db, "appointments"), where("physioId", "==", uid));
//                const unsubscribe = onSnapshot(q, (snapshot) => {
//                     const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
//                     next(null, docs);
//                });
//                return () => unsubscribe();
//           }
//      );
//      return {
//           data,
//           isLoading: data === undefined,
//           error: error?.message,
//      }
// }

/**
 * Get all reviews for a physio
 * @param {string} physioId - The physio's ID
 *
 */
export async function getPhysioReviews(physioId) {
  try {
    const q = query(
      collection(db, "appointments"),
      where("physioId", "==", physioId),
      where("reviews", "!=", null)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data().review,
      patientId: doc.data().patientId,
    }));
  } catch (error) {
    //     console.log("Error getting reviews:", error);

    throw error; // Rethrow the error to handle it in the calling code
  }
}

/**
 * Get all appointments for a patient
 * @param {string} patientId - The patient's ID
 * @returns {object} - The appointments for the patient
 */
export const fetchAppointmentsByPatient = async (patientId) => {
  try {
    const q = query(
      collection(db, "appointments"),
      where("patientId", "==", patientId),
      orderBy("date", "asc"),
      orderBy("time", "asc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

/**
 * Get a single appointment by ID
 * @param {string} appointmentId - The appointment's ID
 * @returns {object} - The appointment
 */
export const fetchAppointmentById = async (appointmentId) => {
  try {
    const ref = doc(db, "appointments", appointmentId);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  } catch (error) {
    console.error("Error fetching appointment:", error);
    throw error;
  }
};
