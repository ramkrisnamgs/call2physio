"use client"

import { useAuth } from "@/contexts/AuthContext";
import { usePhysioOverview } from "@/lib/firebase/physio/hooks";
import { Calendar, GraduationCap, Star, UserPlus } from "lucide-react";

export default function OverviewCards() {
     const { user } = useAuth();
     const { data, isLoading, error } = usePhysioOverview(user?.uid);

     if (isLoading) {
          return (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                         <div key={i} className="bg-white shadow rounded-lg p-4 flex flex-col items-start justify-center border animate-pulse">
                              <div className="w-8 h-8 bg-gray-200 rounded mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                              <div className="h-6 bg-gray-200 rounded w-12"></div>
                         </div>
                    ))}
               </div>
          )
     }

     if (!data || error) {
          return (
               <div className="p-6 bg-red-50 border border-red-200 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         <span className="text-red-700 font-medium">Failed to load dashboard summary</span>
                    </div>
                    <p className="mt-2 text-red-600 text-sm">Please refresh the page or try again later.</p>
               </div>
          )
     }

     const cards = [
          {
               label: "Appointments",
               value: data.totalAppointments ?? 0,
               icon: <Calendar />
          },
          {
               label: "Patients Treated",
               value: data.totalPatients ?? 0,
               icon: <UserPlus />
          },
          {
               label: "Average Rating",
               value: data.avgRating?.toFixed(1) ?? "N/A",
               icon: <Star />
          },
          {
               label: "Experience",
               value: data.experience ?? "N/A",
               icon: <GraduationCap />
          },
     ]

     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">{cards.map((card) => (
               <div key={card.label} className="bg-white shadow rounded-lg p-4 flex flex-col items-start justify-center border">
                    <span className="text-3xl mb-2">{card.icon}</span>
                    <h4 className="text-gray-600 text-sm font-medium">{card.label}</h4>
                    <p className="text-xl font-semibold text-gray-800">{card.value}</p>
               </div>
          ))}</div>
     )
}