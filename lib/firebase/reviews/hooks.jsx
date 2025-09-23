import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import useSWRSubscription from "swr/dist/subscription";

export function useReviewsByPhysio(physioId) {
     const { data, error } = useSWRSubscription(
          physioId ? ["reviews", physioId] : null,
          ([, physioId], { next }) => {
               const q = query(
                    collection(db, "reviews"),
                    where("physioId", "==", physioId),
                    orderBy("createdAt", "desc")
               );
               const unsub = onSnapshot(q, (snapshot) => {
                    const reviews = snapshot.docs.map((doc) => ({
                         id: doc.id,
                         ...doc.data(),
                    }));
                    next(null, reviews);
               });
               return () => unsub();
          }
     )

     return {
          reviews: data || [],
          isLoading: data === undefined,
          error,
     }
}