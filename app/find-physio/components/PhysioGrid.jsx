"use client";

import { useState } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const PhysioGrid = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Generate 105 dummy physios (30 more than before)
  const dummyPhysios = Array.from({ length: 105 }, (_, index) => {
    // Use the same image for both profile and cover photo
    const profileImage = `/testimonial-${(index % 4) + 1}.jpg`;

    return {
      id: index + 1,
      name: `Dr. ${["Sarah", "Michael", "Emily", "David", "Lisa", "John", "Maria", "Robert", "Anna", "James"][index % 10]} ${["Wilson", "Chen", "Brown", "Smith", "Johnson", "Williams", "Jones", "Miller", "Davis", "Garcia"][index % 10]}`,
      specializations: [["Back Pain", "Sports Injury", "Neurological Rehab", "Joint Pain", "Stroke Rehab", "Arthritis", "Pediatric Physio", "Geriatric Care"][index % 8]],
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 50,
      experience: Math.floor(Math.random() * 20) + 1,
      location: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"][index % 6],
      fees: Math.floor(Math.random() * 1500) + 500,
      photoURL: profileImage,
      coverPhoto: profileImage,
      visitType: ["Clinic", "Home Visit", "Online"][index % 3],
      gender: ["male", "female"][index % 2],
      qualifications: ["BPT", "MPT", "DPT", "PhD"][index % 4],
      workingHours: {
        start: "09:00 AM",
        end: "06:00 PM",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      }
    };
  });

  // Filter physios based on selected filters
  const filteredPhysios = dummyPhysios.filter((physio) => {
    // Location filter
    if (filters.location && !physio.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Specializations filter
    if (filters.specializations?.length > 0 && 
        !filters.specializations.some(spec => 
          physio.specializations.some(pSpec => 
            pSpec.toLowerCase().includes(spec.toLowerCase())
          )
        )) {
      return false;
    }

    // Gender filter
    if (filters.gender && physio.gender !== filters.gender) {
      return false;
    }

    // Pricing filter
    if (filters.pricing) {
      const [min, max] = filters.pricing.split("-").map(Number);
      if (max && (physio.fees < min || physio.fees > max)) return false;
      if (!max && physio.fees < min) return false;
    }

    // Rating filter
    if (filters.rating && physio.rating < Number(filters.rating)) {
      return false;
    }

    // Experience filter
    if (filters.experience && physio.experience < Number(filters.experience)) {
      return false;
    }

    // Visit type filter
    if (filters.visitPreference && physio.visitType !== filters.visitPreference) {
      return false;
    }

    return true;
  });

  // Sort physios based on sortBy filter
  const sortedPhysios = [...filteredPhysios].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-low":
        return a.fees - b.fees;
      case "price-high":
        return b.fees - a.fees;
      case "rating-high":
        return b.rating - a.rating;
      case "experience-high":
        return b.experience - a.experience;
      case "experience-low":
        return a.experience - b.experience;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedPhysios.length / itemsPerPage);
  const currentPhysios = sortedPhysios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {currentPhysios.map((physio) => (
          <Link
            key={physio.id}
            href={`/physio/${physio.id}`}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col"
          >
            {/* Cover Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={physio.coverPhoto}
                alt={physio.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img
                  src={physio.photoURL}
                  alt={physio.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="text-white">
                  <h3 className="font-semibold">{physio.name}</h3>
                  <p className="text-sm text-white/80">{physio.specializations[0]}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">{physio.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({physio.reviews} reviews)</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#35B6B4]" />
                <span className="text-gray-600 text-sm">{physio.location}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#35B6B4]" />
                <span className="text-gray-600 text-sm">{physio.experience} years experience</span>
              </div>

              {/* Price and Visit Type */}
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-900">₹{physio.fees}</span>
                  <span className="text-gray-500 text-sm">/session</span>
                </div>
                <span className="px-2 py-1 bg-[#35B6B4]/10 text-[#35B6B4] rounded-full text-xs font-medium">
                  {physio.visitType}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#35B6B4]/10 hover:text-[#35B6B4] transition-all duration-300"
          >
            Previous
          </button>
          
          <div className="flex items-center space-x-1">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 border rounded-lg text-sm ${
                      currentPage === pageNumber
                        ? "bg-[#35B6B4] text-white border-[#35B6B4]"
                        : "hover:bg-[#35B6B4]/10 hover:text-[#35B6B4]"
                    } transition-all duration-300`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return <span key={pageNumber} className="px-2">...</span>;
              }
              return null;
            })}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#35B6B4]/10 hover:text-[#35B6B4] transition-all duration-300"
          >
            Next
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-gray-500 text-center mt-4">
        Showing {currentPhysios.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, sortedPhysios.length)} of {sortedPhysios.length} results
      </div>
    </div>
  );
};

export default PhysioGrid; 