"use client";

import { useState } from "react";

export default function PatientSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Search patients..."
        value={query}
        onChange={handleChange}
        className="w-full md:w-72 border px-3 py-2 rounded-md text-sm"
      />
    </div>
  );
}
