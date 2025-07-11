"use client";

import { Dialog } from "@headlessui/react";

export default function PatientRecordsDrawer({ isOpen, onClose, patient }) {
  <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
    <div className="fixed inset-0 bg-black/20" aria-hidden="true">
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg overflow-auto">
        <div className="p-6 space-y-4">
          <div className="flex justify-betw een items-center border-b pb-3">
            <h3 className="text-lg font-semibold">{patient?.name}'s Records</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          {patient ? (
               <div className="space-y-2 text-sm">
                    <p><strong>Gender:</strong>{" "}{patient.gender}</p>
                    <p><strong>Contact:</strong>{" "}{patient.contact}</p>
                    <p><strong>Last Visit:</strong>{" "}{patient.lastVisit}</p>
                    <p><strong>Status:</strong>{" "}{patient.status}</p>
                    <p><strong>Conditions:</strong>{" "}{patient.conditions?.join(", ") || "-"}</p>
                    <div><strong>Records:</strong>
                         <ul className="list-disc list-inside mt-1">
                              {patient.records?.length > 0 ? ( patient.records.map((rec, i) => (
                                   <li key={i}>{rec.type} - {rec.date}</li>
                              ))) : (
                                   <li>No Records found.</li>
                              )}
                         </ul>
                    </div>
               </div>
          ) : (
               <p className="text-sm text-gray-500">No patient selected</p>
          )}
        </div>
      </div>
    </div>
  </Dialog>;
}
