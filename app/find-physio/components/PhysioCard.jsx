// app/find-physio/components/PhysioCard.jsx
"use client";

import { Calendar, User } from "lucide-react";
import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const PhysioCard = ({ physio }) => {
  return (
    <Link href={`/physio/${physio.id}`} className="block">
      <div className="group relative border rounded-xl w-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[#35B6B4]/20">
        {/* Cover Photo */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={physio.coverPhoto || "/default-cover.jpg"}
            alt={`${physio.name}'s cover`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Avatar Overlay */}
          <div className="absolute -bottom-8 left-4">
            <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
              <img
                src={physio.photoURL || "/default-profile.png"}
                alt={physio.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-10">
          {/* Name and Qualifications */}
          <div className="mb-2">
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#35B6B4] transition-colors duration-300">
              {physio.name}
            </h2>
            <p className="text-sm text-gray-600">{physio.qualifications}</p>
          </div>

          {/* Rating and Location */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5">
              <FaStar className="text-yellow-400" />
              <span className="font-bold text-gray-900">{physio.rating}</span>
              <span className="text-gray-500">({physio.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#35B6B4]" />
              <span className="text-gray-700 text-sm">{physio.location}</span>
            </div>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {physio.specializations?.map((spec, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Price and Visit Type */}
          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">₹{physio.fees}</span>
              <span className="text-gray-500 text-sm">per session</span>
            </div>
            <span className="px-2 py-1 bg-[#35B6B4]/10 text-[#35B6B4] rounded-full text-xs font-medium">
              {physio.visitType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PhysioCard;
