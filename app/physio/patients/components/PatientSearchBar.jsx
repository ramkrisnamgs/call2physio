"use client";

export default function PatientSearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by patient name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="w-full md:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
      />
    </div>
  );
}
