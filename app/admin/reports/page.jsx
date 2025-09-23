"use client";

import { useEffect, useState } from "react";
import { fetchAllReports } from "@/lib/firebase/reports/read";
import ReportsTable from "./components/ReportsTable";
import toast from "react-hot-toast";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReports = async () => {
    try {
      const data = await fetchAllReports();
      setReports(data);
    } catch (err) {
      toast.error("Failed to fetch reports");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  if (loading) return <p className="p-6">Loading reports...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Patient Reports</h1>
      <ReportsTable reports={reports} refresh={loadReports} />
    </div>
  );
}
