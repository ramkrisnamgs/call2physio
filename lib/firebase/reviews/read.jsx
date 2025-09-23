import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";


export async function fetchReviewsByPhysio(physioId) {
     try {
          const q = query(
               collection(db, "reviews"),
               where("physioId", "==", physioId),
               orderBy("createdAt", "desc"),
               // limit(5),
          )
          const snapshot = await getDocs(q);
          return snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
          }));
     } catch (error) {
          console.log("Error getting reviews:", error);
          throw error;
     }
}