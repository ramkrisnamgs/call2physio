"use client";

import { useEffect, useState } from "react";
// import { fetchAllPatients, deletePatient } from "@/lib/firebase/admin/patients/read";
import toast from "react-hot-toast";
import PatientsTable from "./components/PatientsTable";
import PatientSearchBar from "./components/PatientSearchBar";
// import { deletePatient } from "@/lib/firebase/patient/write";
import { deletePatient, fetchAllPatients } from "@/lib/firebase/admin/patients/read";

export default function AdminPatientsPage() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await fetchAllPatients();
      setPatients(data);
      setFiltered(data);
    } catch (err) {
      toast.error("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    if (!query) return setFiltered(patients);
    const q = query.toLowerCase();
    setFiltered(
      patients.filter(
        (p) =>
          p.displayName?.toLowerCase().includes(q) ||
          p.email?.toLowerCase().includes(q)
      )
    );
  };

  const handleDelete = async (uid) => {
    if (!confirm("Are you sure you want to delete this patient?")) return;
    try {
      await deletePatient(uid);
      toast.success("Patient deleted");
      loadPatients();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Patients Management</h1>
      <PatientSearchBar onSearch={handleSearch} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <PatientsTable patients={filtered} onDelete={handleDelete} />
      )}
    </div>
  );
}
