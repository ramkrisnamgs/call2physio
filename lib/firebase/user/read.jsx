import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

// useUser
export function useUser({ uid }) {
  const { data, error } = useSWRSubscription(
    uid ? ["users", uid] : null,
    ([path, uid], { next }) => {
      const ref = doc(db, `user/${uid}`);
      const unsub = onSnapshot(
        ref,
        (snapshot) => {
          next(null, snapshot.exists() ? snapshot.data() : null);
        },
        (err) => next(err, null)
      );
      return () => unsub();
    }
  );

  return {
    data: uid ? data : null,
    error: error?.message,
    isLoading: !uid || data === undefined,
  };
}

// useUsers
