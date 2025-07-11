import useSWR from "swr";
import {
  fetchEarningsByPhysioId,
  fetchEarningsSummary,
  fetchMonthlyEarnings,
} from "./read";

// Hook to get earnings list
export function useEarnings(physioId) {
  const { data, error, isLoading } = useSWR(
    physioId ? ["earnings", physioId] : null,
    () => fetchEarningsByPhysioId(physioId)
  );

  return {
    data,
    error,
    isLoading,
  };
}

// Hook to get summary stats
export function useEarningsSummary(physioId) {
  const { data, error, isLoading } = useSWR(
    physioId ? ["earningsSummary", physioId] : null,
    () => fetchEarningsSummary(physioId)
  );

  return {
    data,
    error,
    isLoading,
  };
}


// SWR hooks for fetching physio earnings data and summaries from Firestore.
// Provides: useEarnings, useEarningsSummary, useMonthlyEarnings
export function useMonthlyEarnings(physioId) {
  return useSWR(physioId ? ["monthlyEarnings", physioId] : null, () =>
    fetchMonthlyEarnings(physioId)
  );
}
