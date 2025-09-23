"use client";

import { getAllPhysios } from "@/lib/firebase/physio/read";
import { useEffect, useState } from "react";
import PhysioTable from "./components/PhysioTable";
import PhysioDetailsModal from "./components/PhysioDetailsModal";

export default function AdminPhysiosPage() {
  const [physios, setPhysios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPhysios, setSelectedPhysios] = useState(null);

  const fetchPhysios = async () => {
    setLoading(true);
    const res = await getAllPhysios();
    setPhysios(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchPhysios();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Physios</h1>
      {loading ? (
        <div>Loading physios...</div>
      ) : (
        <PhysioTable
          physios={physios}
          onView={(physio) => setSelectedPhysios(physio)}
          refresh={fetchPhysios}
        />
      )}

      {selectedPhysios && (
        <PhysioDetailsModal
          physio={selectedPhysios}
          onClose={() => setSelectedPhysios(null)}
          refresh={fetchPhysios}
        />
      )}
    </div>
  );
}
