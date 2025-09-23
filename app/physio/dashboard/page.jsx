"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firebase/user/read";
import VerificationBanner from "./components/VerificationBanner";
import OverviewCards from "./components/OverviewCards";
import UpcomingAppointments from "./components/UpcomingAppointments";
import EarningsChart from "./components/EarningsChart";
import PhysioStats from "./components/PhysioStats";
import QuickActions from "./components/QuickActions";

export default function PhysioDashboard() {
  const { user } = useAuth();
  const { data: userData, isLoading } = useUser({ uid: user?.uid });

  if (isLoading) {
    return <div className="text-center py-20">Loading Dashboard...</div>;
  }

  if (!userData) {
    return (
      <div className="text-center py-20 text-red-500">
        Unable to load your dashboard. Please make sure you are logged in as a
        physio.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-10 space-y-10">
      {/* Show subtle banner if not approved */}
      <VerificationBanner />

      {/* Summary cards (appointments, rating, etc.) */}
      <OverviewCards />

      {/* Next appointments */}
      <UpcomingAppointments />

      {/* Monthly earnings chart */}
      <PhysioStats />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
  
  // return (
  //   <div className="max-w-5xl mx-auto bg-gray-50 p-8 md:pr-20 rounded-lg space-y-6">
  //     <h1 className="text-3xl font-bold mb-4">
  //       👋 Welcome, {userData?.displayName}
  //     </h1>

  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <div className="bg-blue-100 p-6 rounded-lg">
  //         <h2 className="font-bold text-lg mb-2">Appointments</h2>
  //         <p>Manage your appointments here.</p>
  //       </div>

  //       <div className="bg-green-100 p-6 rounded-lg">
  //         <h2 className="font-bold text-lg mb-2">Earnings</h2>
  //         <p>Track your earnings and payouts.</p>
  //       </div>

  //       <div className="bg-purple-100 p-6 rounded-lg">
  //         <h2 className="font-bold text-lg mb-2">Profile</h2>
  //         <p>Update your profile & documents.</p>
  //       </div>
  //     </div>
  //     {/* Dashboard Widgets */}
  //     <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
  //       {/* Upcoming Appointments Card */}
  //       <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
  //         <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
  //           <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
  //             <circle cx="60" cy="60" r="60" fill="#35B6B4" />
  //           </svg>
  //         </div>
  //         <h3 className="text-xl font-semibold text-[#003A70] mb-2 flex items-center gap-2">
  //           <span className="inline-block w-3 h-3 bg-[#35B6B4] rounded-full animate-pulse"></span>
  //           Upcoming Appointments
  //         </h3>
  //         <ul className="space-y-3 mt-3">
  //           {[
  //             { patient: "John Doe", date: "2024-06-20", time: "10:00 AM" },
  //             { patient: "Jane Smith", date: "2024-06-21", time: "2:30 PM" },
  //             { patient: "Alex Lee", date: "2024-06-22", time: "9:00 AM" },
  //           ].map((appt, idx) => (
  //             <li key={idx} className="flex items-center justify-between bg-[#f0fdfd] rounded-lg px-4 py-2 hover:bg-[#e0f7fa] transition-colors">
  //               <span className="font-medium text-gray-700">{appt.patient}</span>
  //               <span className="text-sm text-gray-500">{appt.date} • {appt.time}</span>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>

  //       {/* Earnings Overview Card with Animated Bar Chart */}
  //       <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
  //         <div className="absolute -bottom-8 -left-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
  //           <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
  //             <rect width="120" height="120" rx="60" fill="#003A70" />
  //           </svg>
  //         </div>
  //         <h3 className="text-xl font-semibold text-[#003A70] mb-2 flex items-center gap-2">
  //           <span className="inline-block w-3 h-3 bg-[#003A70] rounded-full animate-pulse"></span>
  //           Earnings Overview
  //         </h3>
  //         <div className="flex items-end gap-3 mt-6 h-32">
  //           {/* Dummy animated bar chart */}
  //           {[
  //             { month: "Feb", value: 1200 },
  //             { month: "Mar", value: 1800 },
  //             { month: "Apr", value: 1500 },
  //             { month: "May", value: 2100 },
  //             { month: "Jun", value: 1700 },
  //             { month: "Jul", value: 1400 },
  //             { month: "Aug", value: 2300 },
  //           ].map((bar, idx) => (
  //             <div key={bar.month} className="flex flex-col items-center">
  //               <div
  //                 className="w-8 rounded-t-lg bg-gradient-to-t from-[#35B6B4] to-[#4FD1C5] shadow-md transition-all duration-700"
  //                 style={{
  //                   height: `${bar.value / 25}px`,
  //                   animation: `growBar 1s ${0.2 * idx}s cubic-bezier(.4,2,.6,1) both`,
  //                 }}
  //               ></div>
  //               <span className="text-xs text-gray-500 mt-2">{bar.month}</span>
  //             </div>
  //           ))}
  //         </div>
  //         <div className="mt-4 text-lg font-bold text-[#35B6B4]">
  //           ₹2,100 <span className="text-sm text-gray-500 font-normal">this month</span>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Modern Stats Cards */}
  //     <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <div className="bg-gradient-to-r from-[#35B6B4]/90 to-[#4FD1C5]/80 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
  //         <span className="text-4xl font-bold text-white animate-bounce">32</span>
  //         <span className="text-white mt-2 font-medium">Patients Treated</span>
  //       </div>
  //       <div className="bg-gradient-to-r from-[#003A70]/90 to-[#35B6B4]/80 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
  //         <span className="text-4xl font-bold text-white animate-pulse">4.9</span>
  //         <span className="text-white mt-2 font-medium">Avg. Rating</span>
  //       </div>
  //       <div className="bg-gradient-to-r from-[#a18cd1]/90 to-[#fbc2eb]/80 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
  //         <span className="text-4xl font-bold text-white animate-bounce">12</span>
  //         <span className="text-white mt-2 font-medium">Years Experience</span>
  //       </div>
  //     </div>

  //     {/* Futuristic Call to Action */}
  //     <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 rounded-2xl p-8 shadow-inner">
  //       <div>
  //         <h2 className="text-2xl font-bold text-[#003A70] mb-2">Boost Your Practice 🚀</h2>
  //         <p className="text-gray-700 mb-4">
  //           Invite more patients, manage your schedule, and grow your earnings with Call2Physio.
  //         </p>
  //         <button className="bg-[#35B6B4] hover:bg-[#003A70] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
  //           Explore More Features
  //         </button>
  //       </div>
  //       {/* Replace Lottie with a static SVG for compatibility */}
  //       <div className="w-40 h-40 flex items-center justify-center">
  //         <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
  //           <circle cx="60" cy="60" r="55" fill="#35B6B4" opacity="0.15"/>
  //           <circle cx="60" cy="60" r="40" fill="#003A70" opacity="0.12"/>
  //           <path d="M60 30 L70 60 L60 90 L50 60 Z" fill="#35B6B4" opacity="0.7">
  //             <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="4s" repeatCount="indefinite"/>
  //           </path>
  //           <circle cx="60" cy="60" r="8" fill="#4FD1C5" />
  //         </svg>
  //       </div>
  //     </div>

  //     {/* Animations for custom classes */}
  //     <style global jsx>{`
  //       @keyframes growBar {
  //         from { height: 0; }
  //         to { }
  //       }
  //       .animate-spin-slow {
  //         animation: spin 3s linear infinite;
  //       }
  //       @keyframes spin {
  //         0% { transform: rotate(0deg);}
  //         100% { transform: rotate(360deg);}
  //       }
  //     `}</style>
  //     {/* Add more physio dashboard content here */}
  //   </div>
  // );
}
