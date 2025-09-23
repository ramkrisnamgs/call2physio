import useSWR from "swr";
import {
  getTotalUsers,
  getTotalPhysios,
  getTotalPatients,
  getPendingPhysios,
  getTotalEarnings,
} from "./read";

export function useAdminStats() {
  const { data, error, isLoading } = useSWR("adminStats", async () => {
    const [users, physios, patients, pending, earnings] = await Promise.all([
      getTotalUsers(),
      getTotalPhysios(),
      getTotalPatients(),
      getPendingPhysios(),
      getTotalEarnings(),
    ]);
    return { users, physios, patients, pending, earnings };
  });

  return { data, error, isLoading };
}
