import useSWR from "swr";
import { getPhysioOverview } from "./read";

export function usePhysioOverview(uid) {
  return useSWR(uid ? ["physio-overview", uid] : null, () =>
    getPhysioOverview(uid)
  );
}
