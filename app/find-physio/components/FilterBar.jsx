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
    "Orthopedic",
    "Neurological",
    "Sports Injury",
    "Cardiorespiratory",
    "Pediatric",
    "Geriatric",
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
          isActive
            ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
            : value?.length > 0
            ? "bg-[#35B6B4]/10 text-[#35B6B4] border-[#35B6B4] shadow-sm"
            : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4] hover:shadow-sm"
        }`}
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="hidden sm:inline">Specialization</span>
        <span className="sm:hidden">Spec.</span>
        {value?.length > 0 && (
          <span className="ml-1 px-1.5 sm:px-2 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
            {value.length}
          </span>
        )}
      </button>

      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-64 sm:w-96 bg-white rounded-xl border border-gray-200 shadow-lg p-3 sm:p-4 z-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

  // Detect mobile viewport
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile drawer state
  const [mobileDrawer, setMobileDrawer] = useState(null); // "filter" | "sort" | null
  const [mobileSubFilter, setMobileSubFilter] = useState(null); // filter key string | null

  // Close mobile drawer on escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileDrawer(null);
    if (mobileDrawer) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileDrawer]);

  // Mobile filter options list
  const filterOptions = [
    { key: "gender", label: "Gender", icon: User },
    { key: "pricing", label: "Price Range", icon: IndianRupee },
    { key: "rating", label: "Rating", icon: Star },
    { key: "experience", label: "Experience", icon: Clock },
    { key: "specializations", label: "Specialization", icon: SlidersHorizontal },
  ];

  // Render mobile filter drawer
  const renderMobileFilterDrawer = () => (
    <div className="fixed inset-0 z-50 flex">
      {/* Left panel: filter list */}
      <div className="w-2/5 bg-gray-100 border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-200 flex items-center justify-between">
          <span className="font-semibold text-gray-800">Filters</span>
          <button onClick={() => setMobileDrawer(null)}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setMobileSubFilter(opt.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${
                mobileSubFilter === opt.key
                  ? "bg-white text-[#35B6B4] border-r-2 border-[#35B6B4]"
                  : "text-gray-700 hover:bg-white"
              }`}
            >
              <opt.icon className="w-4 h-4" />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
        <div className="p-3 border-t border-gray-200">
          <button
            onClick={() => {
              clearFilters();
              setMobileDrawer(null);
            }}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {/* Right panel: sub-options */}
      <div className="flex-1 bg-white flex flex-col">
        <div className="p-3 border-b border-gray-200 flex items-center justify-between">
          <span className="font-semibold text-gray-800">
            {filterOptions.find((o) => o.key === mobileSubFilter)?.label}
          </span>
          <button onClick={() => setMobileSubFilter(null)}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {mobileSubFilter === "gender" && (
            <GenderFilter
              value={filters.gender}
              onChange={(v) => handleFilterChange("gender", v)}
              isActive={true}
              onToggle={() => {}}
            />
          )}
          {mobileSubFilter === "pricing" && (
            <PricingFilter
              value={filters.pricing}
              onChange={(v) => handleFilterChange("pricing", v)}
              isActive={true}
              onToggle={() => {}}
            />
          )}
          {mobileSubFilter === "rating" && (
            <RatingFilter
              value={filters.rating}
              onChange={(v) => handleFilterChange("rating", v)}
              isActive={true}
              onToggle={() => {}}
            />
          )}
          {mobileSubFilter === "experience" && (
            <ExperienceFilter
              value={filters.experience}
              onChange={(v) => handleFilterChange("experience", v)}
              isActive={true}
              onToggle={() => {}}
            />
          )}
          {mobileSubFilter === "specializations" && (
            <SpecializationFilter
              value={filters.specializations}
              onChange={(v) => handleFilterChange("specializations", v)}
              isActive={true}
              onToggle={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );

  // Render mobile sort drawer
  const renderMobileSortDrawer = () => (
    <div className="fixed inset-0 z-50 flex items-end">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setMobileDrawer(null)}
      />
      <div className="relative w-full bg-white rounded-t-xl max-h-[70vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className="font-semibold text-gray-800">Sort By</span>
          <button onClick={() => setMobileDrawer(null)}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <SortFilter
            value={filters.sortBy}
            onChange={(v) => handleFilterChange("sortBy", v)}
            isActive={true}
            onToggle={() => setMobileDrawer(null)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {/* Main Search and Filter Bar */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Location Search */}
        <div className="relative">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all duration-300 text-sm sm:text-base"
              />
              <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#35B6B4] text-white rounded-lg hover:bg-[#2da3a1] transition-colors text-sm sm:text-base"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Filter Types and Sort */}
        {!isMobile && (
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4">
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
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 bg-white text-gray-600 border border-gray-200 hover:border-red-500 hover:text-red-500 hover:shadow-sm text-sm sm:text-base"
                >
                  <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile bottom bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around p-2 z-40">
          <button
            onClick={() => {
              setMobileDrawer("filter");
              setMobileSubFilter(null);
            }}
            className="flex flex-col items-center gap-1 flex-1 py-2 text-gray-700 active:text-[#35B6B4]"
          >
            <Filter className="w-5 h-5" />
            <span className="text-xs">Filter</span>
            {getActiveFiltersCount() > 0 && (
              <span className="absolute top-1 right-1/4 translate-x-1/2 px-1.5 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setMobileDrawer("sort");
            }}
            className="flex flex-col items-center gap-1 flex-1 py-2 text-gray-700 active:text-[#35B6B4]"
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-xs">Sort</span>
            {filters.sortBy && (
              <span className="absolute top-1 right-1/4 translate-x-1/2 px-1.5 py-0.5 text-xs bg-[#35B6B4] text-white rounded-full">
                1
              </span>
            )}
          </button>
        </div>
      )}

      {/* Mobile drawers */}
      {isMobile && mobileDrawer === "filter" && renderMobileFilterDrawer()}
      {isMobile && mobileDrawer === "sort" && renderMobileSortDrawer()}
    </div>
  );
};

export default FilterBar;

