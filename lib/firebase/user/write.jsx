import { db } from "@/lib/firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export const createUser = async ({ uid, displayName, email, photoURL, role }) => {
  const isPhysio = role === "physio";

  await setDoc(
    doc(db, `user/${uid}`),
    {
      uid,
      displayName: displayName,
      email: email ?? "",
      photoURL: photoURL ?? "",
      role: role,
      isApproved: isPhysio ? false : true, // Patients are approved by default
      status: isPhysio ? "pending" : "active",
      timestampCreate: Timestamp.now(),
    },
    { merge: true }
  );
};
