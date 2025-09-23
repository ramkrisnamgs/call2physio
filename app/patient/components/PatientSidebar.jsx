import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import {
  Calendar,
  FileText,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/patient/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard />,
  },
  { href: "/patient/appointments", label: "Appointments", icon: <Calendar /> },
  // { href: "/patient/patients", label: "Patients", icon: <UserPlus /> },
  // { href: "/patient/earnings", label: "Earnings", icon: <BadgeIndianRupee /> },
  { href: "/patient/reports", label: "Reports", icon: <FileText /> },
  { href: "/patient/account", label: "Account", icon: <User /> },
];

export default function PatientSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <>
      {/* Desktop Sidebar - Only visible on md screens and up */}
      <div className="hidden md:flex flex-col w-64 min-h-screen bg-white shadow-lg">
        <div className="px-8 py-6 text-xl font-bold text-[#35B6B4]">
          {/* Call2Physio */}
          Nexorah
        </div>
        <nav className="flex-1 space-y-2 px-2 overflow-y-auto">
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
        {/* <Link
          href="/"
          className="flex items-center gap-3 px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#f5ffff] hover:text-[#35B6B4] transition-all duration-300"
          onClick={async () => {
            if (!confirm("Are you sure?")) return;
            try {
              await toast.promise(signOut(auth), {
                error: (e) => e?.message,
                loading: "logging out...",
                success: "Logged out successfully",
              });
            } catch (error) {
              toast.error(error?.message);
            }
            setIsDropdownOpen(false);
          }}
        >
          <LogOut size={18} />
          Logout
        </Link>
        <button
          onClick={logout}
          className="m-6 mt-auto flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 p-3 rounded cursor-pointer"
        >
          <LogOut /> Logout
        </button> */}
      </div>

      {/* Mobile Bottom Navigation - Only visible on smaller screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
        <nav className="flex justify-around items-center px-2 py-3">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 ${
                pathname === href
                  ? "text-[#35B6B4]"
                  : "text-gray-500 hover:text-[#35B6B4]"
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
          {/* <button
            onClick={logout}
            className="flex flex-col items-center gap-1 text-red-500"
          >
            <LogOut className="text-xl" />
            <span className="text-xs font-medium">Logout</span>
          </button> */}
        </nav>
      </div>
    </>
  );
}
