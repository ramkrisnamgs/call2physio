"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  Check,
  MapPin,
  Star,
  Clock,
  IndianRupee,
  User,
  ChevronDown,
  Filter,
  Trash2,
} from "lucide-react";

// Individual Filter Components
const GenderFilter = ({ value, onChange, isActive, onToggle }) => {
  const options = [
    { label: "Any", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <User className="w-4 h-4" />
        <span>Gender</span>
        {value && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            1
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  value === option.value
                    ? "bg-[#35B6B4] text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                }`}
              >
                <User className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PricingFilter = ({ value, onChange, isActive, onToggle }) => {
  const options = [
    { label: "Any Price", value: "" },
    { label: "₹500 - ₹1000", value: "500-1000" },
    { label: "₹1000 - ₹1500", value: "1000-1500" },
    { label: "₹1500+", value: "1500" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <IndianRupee className="w-4 h-4" />
        <span>Price Range</span>
        {value && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            1
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  value === option.value
                    ? "bg-[#35B6B4] text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                }`}
              >
                <IndianRupee className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RatingFilter = ({ value, onChange, isActive, onToggle }) => {
  const options = [
    { label: "Any Rating", value: "" },
    { label: "4.5+ Stars", value: "4.5" },
    { label: "4+ Stars", value: "4" },
    { label: "3+ Stars", value: "3" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <Star className="w-4 h-4" />
        <span>Rating</span>
        {value && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            1
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  value === option.value
                    ? "bg-[#35B6B4] text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                }`}
              >
                <Star className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceFilter = ({ value, onChange, isActive, onToggle }) => {
  const options = [
    { label: "Any Experience", value: "" },
    { label: "10+ Years", value: "10" },
    { label: "5+ Years", value: "5" },
    { label: "2+ Years", value: "2" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <Clock className="w-4 h-4" />
        <span>Experience</span>
        {value && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            1
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  value === option.value
                    ? "bg-[#35B6B4] text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                }`}
              >
                <Clock className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SpecializationFilter = ({ value, onChange, isActive, onToggle }) => {
  const specializations = [
    "Back Pain",
    "Sports Injury",
    "Neurological Rehab",
    "Joint Pain",
    "Stroke Rehab",
    "Arthritis",
    "Pediatric Physio",
    "Geriatric Care",
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value?.length > 0
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span>Specialization</span>
        {value?.length > 0 && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            {value.length}
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl border border-gray-200 shadow-lg p-4 z-50">
          <div className="grid grid-cols-2 gap-2">
            {specializations.map((spec) => {
              const isSelected = value?.includes(spec);
              return (
                <label
                  key={spec}
                  onClick={() => {
                    const updated = isSelected
                      ? value.filter((item) => item !== spec)
                      : [...(value || []), spec];
                    onChange(updated);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-[#35B6B4]/10 border-[#35B6B4] shadow-sm"
                      : "bg-gray-50 border border-gray-200 hover:border-[#35B6B4] hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isSelected
                        ? "bg-[#35B6B4] border-[#35B6B4]"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <Check className="w-2.5 h-2.5 text-white" />
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{spec}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const SortFilter = ({ value, onChange, isActive, onToggle }) => {
  const sortOptions = [
    { label: "Experience - High to Low", value: "experience-high" },
    { label: "Experience - Low to High", value: "experience-low" },
    { label: "Price - High to Low", value: "price-high" },
    { label: "Price - Low to High", value: "price-low" },
    { label: "Rating - High to Low", value: "rating-high" },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
        <span className="text-sm sm:text-base">Sort By</span>
        {value && (
          <span className="ml-1 px-1.5 sm:px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            1
          </span>
        )}
      </button>

      {isActive && (
        <div className="fixed sm:absolute bottom-0 sm:bottom-auto left-0 sm:left-auto sm:top-full sm:right-0 mt-0 sm:mt-2 w-full sm:w-64 bg-white rounded-t-xl sm:rounded-xl border border-gray-200 shadow-lg p-3 sm:p-4 z-50">
          <div className="space-y-1.5 sm:space-y-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  onToggle();
                }}
                className={`w-full flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-300 ${
                  value === option.value
                    ? "bg-[#35B6B4] text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FilterBar = ({ filters, setFilters }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef(null);

  // Handle click outside to close filter panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setActiveFilter(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      location: searchQuery,
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      specializations: [],
      pricing: "",
      rating: "",
      experience: "",
      gender: "",
      sortBy: "",
    });
    setSearchQuery("");
    setActiveFilter(null);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.location) count++;
    if (filters.specializations?.length) count++;
    if (filters.pricing) count++;
    if (filters.rating) count++;
    if (filters.experience) count++;
    if (filters.gender) count++;
    if (filters.sortBy) count++;
    return count;
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Search and Filter Bar */}
      <div className="flex flex-col gap-4">
        {/* Location Search */}
        <div className="relative">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all duration-300"
              />
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#35B6B4] text-white rounded-lg hover:bg-[#2da3a1] transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Filter Types and Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Filter Types */}
          <div className="flex flex-wrap items-center gap-2" ref={filterRef}>
            <GenderFilter
              value={filters.gender}
              onChange={(value) => handleFilterChange("gender", value)}
              isActive={activeFilter === "gender"}
              onToggle={() =>
                setActiveFilter(activeFilter === "gender" ? null : "gender")
              }
            />
            <PricingFilter
              value={filters.pricing}
              onChange={(value) => handleFilterChange("pricing", value)}
              isActive={activeFilter === "pricing"}
              onToggle={() =>
                setActiveFilter(activeFilter === "pricing" ? null : "pricing")
              }
            />
            <RatingFilter
              value={filters.rating}
              onChange={(value) => handleFilterChange("rating", value)}
              isActive={activeFilter === "rating"}
              onToggle={() =>
                setActiveFilter(activeFilter === "rating" ? null : "rating")
              }
            />
            <ExperienceFilter
              value={filters.experience}
              onChange={(value) => handleFilterChange("experience", value)}
              isActive={activeFilter === "experience"}
              onToggle={() =>
                setActiveFilter(activeFilter === "experience" ? null : "experience")
              }
            />
            <SpecializationFilter
              value={filters.specializations}
              onChange={(value) => handleFilterChange("specializations", value)}
              isActive={activeFilter === "specializations"}
              onToggle={() =>
                  setActiveFilter(
                  activeFilter === "specializations" ? null : "specializations"
                )
              }
            />
          </div>

          {/* Sort and Clear All */}
          <div className="flex items-center gap-2">
            <SortFilter
              value={filters.sortBy}
              onChange={(value) => handleFilterChange("sortBy", value)}
              isActive={activeFilter === "sort"}
              onToggle={() =>
                setActiveFilter(activeFilter === "sort" ? null : "sort")
              }
            />

            {/* Clear All Button */}
            {getActiveFiltersCount() > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 bg-white text-gray-600 border border-gray-200 hover:border-red-500 hover:text-red-500 hover:shadow-sm"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
