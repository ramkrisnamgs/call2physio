"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

export default function PatientsTable({ patients }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleViewRecords = (patient) => {
    setSelectedPatient(patient);
    setOpenDrawer(true);
  };

  return (
    <div className="overflow-auto bg-white rounded-lg shodow">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Age</th>
            <th className="p-4">Gender</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Last Visit</th>
            <th className="p-4">Status</th>
            <th className="p-4">Conditions</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients?.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="p-4">{patient.name}</td>
                <td className="p-4">{patient.age}</td>
                <td className="p-4">{patient.gender}</td>
                <td className="p-4">{patient.contact}</td>
                <td className="p-4">{patient.lastVisit || "-"}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      patient.status === "active"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="p-4">{patient.conditions?.join(", ")}</td>
                <td className="p-4">
                  <Button
                    size="sm"
                    onPress={() => handleViewRecords(patient)}
                    className="text-sm bg-blue-600 text-white"
                  >
                    View Records
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center py-6 text-gray-500">
                {" "}
                No patients found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
