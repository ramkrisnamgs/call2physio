"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firebase/user/read";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import AdminSidebar from "./components/AdminSidebar";

export default function Layout({ children }) {
  const { user } = useAuth();
  const { data: userData, isLoading } = useUser({ uid: user?.uid });
  const router = useRouter();

  // if user is not authenticated or not a admin, redirect to home page
  useEffect(() => {
    if (!isLoading && (!userData || userData.role !== "admin")) {
      toast.error("Access Denied: Only approved admin's are allowed");
      router.push("/");
    }
  }, [isLoading, userData, router]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div
            className="loader mb-8"
            style={{
              width: "50px",
              aspectRatio: "1 / 1",
              borderRadius: "9999px",
              background: "#003A70",
              WebkitMaskImage:
                "radial-gradient(circle closest-side at 50% 40%, transparent 94%, black)",
              maskImage:
                "radial-gradient(circle closest-side at 50% 40%, transparent 94%, black)",
              transformOrigin: "50% 40%",
              animation: "l25 1s infinite linear",
            }}
          ></div>
          <div className="text-2xl font-bold text-[#003A70] mb-2 tracking-wide">
            Loading your Admin Dashboard
          </div>
          <div className="text-sm text-[#35B6B4] font-medium flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" fill="#35B6B4" opacity="0.2" />
              <path
                d="M8 3v6l4 2"
                stroke="#35B6B4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Please wait while we prepare your experience...
          </div>
        </div>
        <style jsx global>{`
          @keyframes l25 {
            100% {
              transform: rotate(1turn);
            }
          }
        `}</style>
      </div>
    );
  }

  //   if (!userData || userData.role !== "admin") {
  //      return (
  //        <div className="w-full min-h-screen flex items-center justify-center">
  //          Access Denied
  //        </div>
  //      );
  //    }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Header */}
      <header className="bg-[#003A70] text-white px-10 py-5 sticky top-0 z-1 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          {userData?.role
            ? userData.role.charAt(0).toUpperCase() + userData.role.slice(1)
            : ""}{" "}
          Dashboard
        </h1>
        <div className="flex items-center gap-4 bg-[#003A70]/80 border border-white px-4 py-2 rounded-lg shadow">
          {userData?.photoURL ? (
            <img
              src={userData.photoURL}
              alt={userData.displayName || "Profile"}
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">
              {userData?.displayName?.[0]?.toUpperCase() || "P"}
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-semibold text-white text-base leading-tight">
              {userData?.displayName}
            </span>
            <span className="text-xs text-[#35B6B4] bg-white/10 px-2 py-0.5 rounded-full mt-1 font-medium w-fit">
              {userData?.role}
            </span>
          </div>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <AdminSidebar />
        {/* <PhysioDashboard /> */}
        <main className="flex-1 overflow-y-auto">{children}</main>
        {/* <Footer /> */}
      </div>


      {/* <main className="flex-grow">{children}</main> */}
      {/* <Footer /> */}
    </div>
  );
}
