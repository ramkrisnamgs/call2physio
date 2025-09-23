import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

// Fetch all earnings entries for a specific physio
export async function fetchEarningsByPhysioId(physioId) {
  try {
    const earningsRef = collection(db, "appointments");
    const q = query(
      earningsRef,
      where("physioId", "==", physioId),
      where("status", "in", ["Paid", "Pending"])
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching earnings: ", error);
    return [];
  }
}

// Earnings Summary: Total, Monthly, Pending
export async function fetchEarningsSummary(physioId) {
     const data = await fetchEarningsByPhysioId(physioId);

     let total = 0;
     let monthly = 0;
     let pending = 0;

     const now = new Date();
     const thisMonth = now.getMonth();
     const thisYear = now.getFullYear();

     data.forEach((entry) => {
          const date = entry?.date?.toDate?.() || new Date(entry.date);
          if (entry.status === "Paid") {
               total += entry.amount;
               if (data.getMonth() === thisMonth && date.getFullYear() === thisYear) {
                    monthly += entry.amout;
               }
          }
          if (entry.status === "Pending") {
               pending += entry.amount;
          }
     });

     return { total, monthly, pending };

}

// Get earnings grouped by month
export async function fetchMonthlyEarnings(physioId) {
    const q = query(
        collection(db, "appointments"),
        where("physioId", "==", physioId),
        // where("status", "==", "Paid")
    );

    const snapshot = await getDocs(q);
    const earningsByMonth = {};

    snapshot.forEach((doc) => {
      const { amount, date } = doc.data();
      const jsDate = date.toDate?.() || new Date(date.seconds * 1000);

      const month = jsDate.toLocaleString("default", { month: "short", year: "numeric" });

      if (!earningsByMonth[month]) {
        earningsByMonth[month] = 0;
      }

      earningsByMonth[month] += amount;
    });

    return earningsByMonth;
}