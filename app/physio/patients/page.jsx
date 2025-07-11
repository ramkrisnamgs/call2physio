"use client";
import { useAuth } from "@/contexts/AuthContext";
import { getPatientsByPhysio } from "@/lib/firebase/patients/read";
import { useEffect, useState } from "react";
import PatientsTable from "./components/PatientsTable";
import PatientSearchBar from "./components/PatientSearchBar";

const dummyPatients = [
  {
    id: 1,
    name: "John Doe",
    age: 34,
    gender: "Male",
    contact: "9876543210",
    lastVisit: "2024-06-20",
    condition: "Knee pain",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    contact: "9123456780",
    lastVisit: "2024-06-18",
    condition: "Post-surgery rehab",
  },
  {
    id: 3,
    name: "Alex Lee",
    age: 41,
    gender: "Male",
    contact: "9988776655",
    lastVisit: "2024-06-15",
    condition: "Back pain",
  },
  {
    id: 4,
    name: "Priya Patel",
    age: 36,
    gender: "Female",
    contact: "9001122334",
    lastVisit: "2024-06-10",
    condition: "Shoulder stiffness",
  },
];

export default function PatientsPage() {
  const { user } = useAuth();
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.uid) getPatientsByPhysio(user.uid).then(setPatients);
  }, [user]);

  useEffect(() => {
    const term = search.trim().toLowerCase();
    if (!term)
      return setFiltered(
        patients.filter((p) => p.name.toLowerCase().includes(term))
      );
  }, [search, patients]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-[#003A70]">Patients</h2>
          <p className="text-gray-500 mt-1 text-sm">View and manage your patient list</p>
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="🔍 Search by name..."
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <PatientSearchBar search={search} setSearch={setSearch} /> */}
      </div>

      <div className="bg-white rounded-2xl overflow-x-auto border border-gray-100">
        <PatientsTable patients={filtered} />
      </div>
    </div>
  )
}

// export default function PatientsPage() {
//   const [search, setSearch] = useState("");

//   const filteredPatients = dummyPatients.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.contact.includes(search)
//   );

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold text-[#003A70] mb-6">Patients</h1>
//       <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
//         <input
//           type="text"
//           placeholder="Search by name or contact..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full sm:w-72 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B6B4]"
//         />
//       </div>
//       <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Age
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Gender
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Contact
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Last Visit
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                 Condition
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredPatients.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="px-6 py-8 text-center text-gray-400 text-lg"
//                 >
//                   No patients found.
//                 </td>
//               </tr>
//             ) : (
//               filteredPatients.map((patient) => (
//                 <tr key={patient.id} className="hover:bg-[#f0fdfd] transition">
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
//                     {patient.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {patient.age}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {patient.gender}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {patient.contact}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-700">
//                     {patient.lastVisit}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-600">
//                     {patient.condition}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
