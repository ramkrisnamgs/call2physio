"use client";

import { useEffect, useState } from "react";
import { getApprovedPhysios } from "@/lib/firebase/physio/read";

export default function PhysioSelector({ selectedPhysio, onSelect, onNext, onBack }) {
  const [physios, setPhysios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getApprovedPhysios();
      setPhysios(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select a Physio</h2>
      <div className="grid gap-4">
        {physios.map((physio) => (
          <div
            key={physio.uid}
            onClick={() => onSelect(physio)}
            className={`p-4 border rounded-lg cursor-pointer hover:border-[#35B6B4] ${
              selectedPhysio?.uid === physio.uid ? "border-[#35B6B4]" : ""
            }`}
          >
            <p className="font-semibold">{physio.displayName}</p>
            <p className="text-sm text-gray-600">{physio.specializations?.join(", ")}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="text-gray-600">Back</button>
        <button
          onClick={onNext}
          disabled={!selectedPhysio}
          className="bg-[#35B6B4] text-white py-2 px-6 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
