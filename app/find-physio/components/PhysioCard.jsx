// app/find-physio/components/PhysioCard.jsx
"use client";

import { Calendar, User } from "lucide-react";
import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { usePhysioData } from "@/lib/firebase/physio/read";

const PhysioCard = ({ physio, onBook }) => {
  return (
    <div className="group relative border rounded-xl w-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[#35B6B4]/30">
      {/* Cover Photo */}
      <div className="relative w-full h-48">
        <img
          src={physio?.photoURL || "/default-cover.jpg"}
          alt={`${physio?.displayName}'s cover || "Physio Cover"`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Qualifications */}
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#35B6B4] transition-colors duration-300">
              {physio?.displayName || "Physiotherapist"}
            </h2>

            {/* Gender display */}
            <div className=" bg-[#35B6B4]/10 text-[#35B6B4] text-sm font-medium px-2 py-1 rounded-full">
              {physio?.gender || "Gender"}
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {physio?.qualifications || "qualifications"}
          </p>
        </div>

        {/* Specializations (Limited to 3) */}
        <div className="flex flex-wrap gap-1 mt-2 mb-3">
          {physio?.specializations?.slice(0, 3).map((spec, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {spec || "Specialization"}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          {/* Location */}
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <FaMapMarkerAlt className="mr-1" />
            {physio?.location || "Location"}
          </div>

          {/* Rating */}
          {physio?.rating ? (
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <FaStar className="mr-1 text-yellow-500" />
              {physio?.rating} ({physio?.reviews} reviews)
            </div>
          ) : (
            "***"
          )}
        </div>

        {/* Fees and Visit Type */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-2">
            <span className="font-bold">₹{physio?.fees || "500"}</span>
            <span className="text-gray-500 text-sm">/session</span>
          </div>
          <div className="px-2 py-1 bg-[#35B6B4]/10 text-[#35B6B4] rounded-full text-xs font-medium">
            {physio?.visitType || "Visit Type"}
          </div>
        </div>

        {/* Book Button */}
        <div className="flex justify-between items-center gap-4 mt-3">
          <Link
            href={`/find-physio/${physio?.uid}`}
            className="flex-1"
          >
            <button className="w-full bg-white border border-[#35B6B4] text-[#35B6B4] text-sm py-2.5 px-4 rounded-lg hover:bg-[#35B6B4] hover:text-white transition-colors duration-300">
              View Profile
            </button>
          </Link>
          <button
            onClick={() => onBook(physio)}
            className="flex-1 bg-[#35B6B4] text-white text-sm py-2.5 px-4 rounded-lg hover:bg-[#35B6B4]/80 transition-colors duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

// const PhysioCard = ({ physio }) => {
//   if (!physio) return null;
//   return (
//     <Link href={`/physio/${physio?.uid}`} className="block">
//       <div className="group relative border rounded-xl w-full overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[#35B6B4]/20">
//         {/* Cover Photo */}
//         <div className="relative w-full h-48 bg-gray-100">
//           <img
//             src={physio?.photoURL || "/default-cover.jpg"}
//             alt={`${physio?.displayName}'s cover || "Physio Cover"`}
//             className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-700"
//           />
//           {/* Avatar Overlay */}
//           <div className="absolute -bottom-overflow left-4">
//             <div className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
//               <img
//                 src={physio?.photoURL || "/default-profile.png"}
//                 alt={physio?.displayName || "Physio Avatar"}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-4 pt-10">
//           {/* Name and Qualifications */}
//           <div className="mb-2">
//             <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#35B6B4] transition-colors duration-300">
//               {physio?.displayName}
//             </h2>
//             <p className="text-sm text-gray-600">{physio?.qualifications}</p>
//           </div>

//           {/* Specializations (Limited to 3) */}
//           {/* <div className="flex flex-wrap gap-1 mt-2 mb-3">
//             {physio?.specializations?.slice(0, 3).map((spec, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
//               >
//                 {spec}
//               </span>
//             ))}
//           </div> */}

//           {/* Rating and Location */}
//           <div className="flex items-center gap-3 mb-3">
//             <div className="flex items-center gap-1.5">
//               <FaStar className="text-yellow-400" />
//               <span className="font-bold text-gray-900">
//                 {physio?.rating || "-"}
//               </span>
//               {physio?.reviewCount && (
//                 <span className="text-gray-500">({physio?.reviewCount})</span>
//               )}
//             </div>

//             {/* Location */}
//             {physio?.location && (
//               <div className="flex items-center gap-1.5">
//                 <FaMapMarkerAlt className="text-[#35B6B4]" />
//                 <span className="text-gray-700 text-sm">
//                   {physio?.location}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Specializations */}
//           <div className="flex flex-wrap gap-1.5 mb-3">
//             {physio?.specializations?.map((spec, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
//               >
//                 {spec}
//               </span>
//             ))}
//           </div>

//           {/* Price and Visit Type */}
//           <div className="flex items-center justify-between border-t pt-3">
//             <div className="flex items-center gap-2">
//               <span className="font-bold text-gray-900">₹{physio?.fees}</span>
//               <span className="text-gray-500 text-sm">per session</span>
//             </div>
//             <span className="px-2 py-1 bg-[#35B6B4]/10 text-[#35B6B4] rounded-full text-xs font-medium">
//               {physio?.visitType}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

export default PhysioCard;
