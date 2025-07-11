import { db, storage } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import useSWRSubscription from "swr/subscription";

// Realtime hook to get physio data
export function usePhysioData(uid) {
  const { data, error } = useSWRSubscription(["physio", uid], ([_, uid], { next }) => {
    const ref = doc(db, "user", uid);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        next(null, snapshot.exists() ? snapshot.data() : null);
      },
      (err) => {
        next(err);
      }
    );
    return () => unsubscribe();
  });
  return {
    physioData: data,
    isLoading: data === undefined,
    error,
  };
}

// Get approved physios (for find-physio)
export async function getApprovedPhysios() {
  const q = query(
    collection(db, "user"),
    where("role", "==", "physio"),
    where("isApproved", "==", true)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
}

// One-time fetch by UID
export async function getPhysioById(uid) {
  const ref = doc(db, "user", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// List all Physio's document
export const listPhysioFiles = async (uid) => {
  try {
    const folderRef = ref(storage, `physio_docs/${uid}`);
    const listResult = await listAll(folderRef);

    // Add download URLs
    const filePromises = listResult.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return {
        name: item.name,
        fullPath: item.fullPath,
        url,
      };
    });
    return await Promise.all(filePromises);
  } catch (error) {
    console.error("Failed to list files:", error);
    throw error;
  }
};


export async function getPhysioOverview(uid) {
  const appointmentsQuery = query(
    collection(db, "appointments"), where("physioId", "==", uid)
  );
  const appointmentsSnap = await getDocs(appointmentsQuery);
  const totalAppointments = appointmentsSnap.size;

  const patientIds = new Set();
  appointmentsSnap.forEach((doc) => {
    patientIds.add(doc.data().patientId);
  });

  const physioRef = doc(db, "user", uid);
  const physio = physioSnap.exists() ? physioSnap.data() : {};

  return {
    totalAppointments,
    totalPatients: patientIds.size,
    avgRating: physio.rating ?? 4.5,
    experience: physio.experience ?? "N/A",
    isApproved: physio.isApproved ?? false,
  }
}

// import { db, storage } from "@/lib/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
// import { listAll, ref } from "firebase/storage";
// import useSWRSubscription from "swr/dist/subscription";

// export function usePhysioData(uid) {
//   const { data, error } = useSWRSubscription(
//     ["physio", uid],
//     ([_, uid], { next }) => {
//       const ref = doc(db, "user", uid);
//       const unsubscribe = onSnapshot(
//         ref,
//         (snapshot) => {
//           next(null, snapshot.exists() ? snapshot.data() : null);
//         },
//         (err) => {
//           next(err);
//         }
//       );
//       return () => unsubscribe();
//     }
//   );
//   return {
//     physioData: data,
//     isLoading: data === undefined,
//     error,
//   };
// }

// /**
//  * Get all approved physios (for / find-physio)
//  */

// export async function getApprovedPhysios() {
//   const q = query(
//     collection(db, "user"),
//     where("role", "==", "physio"),
//     where("isApproved", "==", true)
//   );
//   const snapshot = await getDocs(q);
//   return snapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
// }

// /**
//  * Get physio by UID (one-time fetch)
//  */

// export async function getPhysioById(uid) {
//      const ref = doc(db, "user", uid);
//      const snap = await getDoc(ref);
//      return snap.exists() ? snap.data() : null;
// }

// /**
//  * Get All physio's Files
//  */

// export const listPhysioFiles = async (uid) => {
//   try {
//     const folderRef = ref(storage, `physio_docs/${uid}`);
//     const listResult = await listAll(folderRef);
//     return listResult.items.map((item) => ({
//       name: item.name,
//       fullPath: item.fullPath,
//     }));
//   } catch (error) {
//     console.error("Failed to list files: ", error);
//     throw error;
//   }
// }
