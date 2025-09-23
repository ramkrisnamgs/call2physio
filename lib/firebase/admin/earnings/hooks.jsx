import useSWR from "swr";
import { fetchAllEarnings, fetchEarningsSummary } from "./read";

export function useAllEarnings() {
  const { data, error, isLoading } = useSWR("adminEarnings", fetchAllEarnings);
  return { data, error, isLoading };
}

export function useEarningsSummary() {
  const { data, error, isLoading } = useSWR("adminEarningsSummary", fetchEarningsSummary);
  return { data, error, isLoading };
}
