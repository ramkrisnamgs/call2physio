"use client"

import { useAuth } from "@/contexts/AuthContext";
import { usePhysioOverview } from "@/lib/firebase/physio/hooks";
import { Calendar, GraduationCap, Star, UserPlus } from "lucide-react";

export default function OverviewCards() {
     const { user } = useAuth();
     const { data, isLoading, error } = usePhysioOverview(user?.uid);

     if (isLoading) {
          return <div className="text-gray-500">Loading summary...</div>
     }

     if (!data || error) {
          return <div className="text-red-500">Failed to load dashboard summary.</div>
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