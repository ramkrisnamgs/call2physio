"use client";

import { useAuth } from "@/contexts/AuthContext";
import {
  Album,
  BadgeIndianRupee,
  Calendar,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PhysioSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard />,
    },
    { href: "/admin/physios", label: "Physios", icon: <HeartHandshake /> },
    { href: "/admin/patients", label: "Patients", icon: <UserPlus /> },
    { href: "/admin/appointments", label: "Appointments", icon: <Calendar /> },
    { href: "/admin/earnings", label: "Earnings", icon: <BadgeIndianRupee /> },
    { href: "/admin/reports", label: "Reports", icon: <FileText /> },
    { href: "/admin/account", label: "Account", icon: <User /> },
  ];

  // Responsive sidebar: visible as a fixed sidebar on desktop, as a bottom nav on mobile
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex min-h-screen w-64 bg-white shadow-lg flex-col">
        <div className="px-8 py-6 text-xl font-bold text-[#35B6B4]">
          {/* Call2Physio */}
          Nexorah
        </div>
        <nav className="flex-1 space-y-2 px-2">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-200 text-sm font-semibold tracking-wide
                ${
                  pathname === href
                    ? "bg-gradient-to-r from-[#35B6B4] to-[#4FD1C5] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-[#f5ffff] hover:text-[#35B6B4]"
                }
              `}
              style={{
                boxShadow:
                  pathname === href
                    ? "0 4px 24px 0 rgba(53,182,180,0.15)"
                    : undefined,
                border:
                  pathname === href
                    ? "1.5px solid #35B6B4"
                    : "1.5px solid transparent",
              }}
            >
              <span
                className={`text-lg transition-colors duration-200 ${
                  pathname === href
                    ? "text-white"
                    : "text-[#35B6B4] group-hover:text-[#35B6B4]"
                }`}
              >
                {icon}
              </span>
              <span className="ml-1">{label}</span>
              {pathname === href && (
                <span className="ml-auto w-2 h-2 rounded-full bg-white/80 shadow animate-pulse"></span>
              )}
            </Link>
          ))}
        </nav>
        {/* <button
          onClick={() => {
            try {
              logout();
              window.href = "/login";
            } catch (error){
              console.error("Logout failed:", error);
            }
          }}
          className="m-6 mt-auto flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 p-3 rounded cursor-pointer"
        >
          <LogOut /> Logout
        </button> */}
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-1 left-0 right-0 z-50 bg-white border-t shadow-t md:hidden h-16">
        <div className="flex items-center h-full overflow-x-auto scrollbar-none">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center px-4 py-1 text-xs font-medium transition-all duration-200 flex-shrink-0
                ${
                  pathname === href
                    ? "text-[#35B6B4]"
                    : "text-gray-500 hover:text-[#35B6B4]"
                }
              `}
              style={{ minWidth: 64 }}
            >
              <span
                className={`text-xl mb-0.5 ${
                  pathname === href
                    ? "text-[#35B6B4]"
                    : "text-gray-400 group-hover:text-[#35B6B4]"
                }`}
              >
                {icon}
              </span>
              <span>{label}</span>
              {pathname === href && (
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#35B6B4] animate-pulse"></span>
              )}
            </Link>
          ))}
          {/* <button
            onClick={logout}
            className="flex flex-col items-center justify-center px-4 py-1 text-xs font-medium text-red-500 hover:bg-red-50 rounded flex-shrink-0"
            style={{ minWidth: 64 }}
          >
            <span className="text-xl mb-0.5">
              <LogOut />
            </span>
            <span>Logout</span>
          </button> */}
        </div>
      </nav>
    </>
  );
}
