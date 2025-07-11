import { db } from "@/lib/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import useSWRSubscription from 'swr/subscription'
import { where } from "firebase/firestore";

//  useAppointmentsByPhysio 
export function useAppointmentsByPhysio(physioId) {
     const { data, error } = useSWRSubscription(
          ["appointments", physioId], ([_, uid], { next }) => {
               const q = query(collection(db, "appointments"), where("physioId", "==", uid));
               const unsubscribe = onSnapshot(q, (snapshot) => {
                    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
                    next(null, docs);
               });
               return () => unsubscribe();
          }
     );
     return {
          data,
          isLoading: data === undefined,
          error: error?.message,
     }
}