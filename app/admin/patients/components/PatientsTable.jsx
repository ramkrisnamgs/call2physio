"use client";

export default function PatientsTable({ patients, onDelete }) {
  if (!patients || patients.length === 0) {
    return <p className="text-gray-600 mt-4">No patients found.</p>;
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.uid} className="border-t">
              <td className="px-4 py-2">{p.displayName || "N/A"}</td>
              <td className="px-4 py-2">{p.email || "N/A"}</td>
              <td className="px-4 py-2">{p.phone || "N/A"}</td>
              <td className="px-4 py-2 capitalize">{p.status || "active"}</td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => onDelete(p.uid)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
