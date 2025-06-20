"use client";

import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch({ location, query });
  };

  return (
    <div className="px-4 md:px-10 py-5">
      <div className="w-full bg-[#003A70] rounded-lg px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Location input */}
        <div className="flex items-center border border-gray-200 rounded-md w-full md:w-1/3 px-3 py-2 bg-gray-50">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter location (e.g., Delhi)"
            className="w-full outline-none bg-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search input */}
        <div className="flex items-center border border-gray-200 rounded-md w-full md:w-2/3 px-3 py-2 bg-gray-50">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by condition or specialization (e.g., back pain)"
            className="w-full outline-none bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-[#35B6B4] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#2da3a1] transition-colors duration-200 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
