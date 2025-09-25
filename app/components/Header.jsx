"use client";

import { ChevronDown, LogIn, LogOut, Mail, Menu, Phone, Plus, User, UserPlus, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@heroui/react";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <TopNavbar />
      <Navbar />
    </div>
  );
};

export default Header;

// Navbar
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { user } = useAuth();

  // Handle click outside for login dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);


  // const menuList = [
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "About Us",
  //     link: "/about-us",
  //   },
  //   {
  //     name: "Our Offerings",
  //     link: "/offerings",
  //     dropdown: [
  //       {
  //         name: "Therapies Offered",
  //         link: "/therapies",
  //       },
  //       {
  //         name: "Services Offered",
  //         link: "/services",
  //       },
  //     ],
  //   },
  //   {
  //     name: "FAQ",
  //     link: "/faq",
  //   },
  //   {
  //     name: "Patient Education",
  //     link: "/patient-education",
  //     dropdown: [
  //       {
  //         name: "Conditions We Treat",
  //         link: "/conditions",
  //       },
  //       {
  //         name: "Symptoms We Treat",
  //         link: "/symptoms",
  //       },
  //       {
  //         name: "Home Exercises",
  //         link: "/exercises",
  //       },
  //       {
  //         name: "Blog",
  //         link: "/blog",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Work With Us",
  //     link: "/work-with-us",
  //     dropdown: [
  //       {
  //         name: "For Physiotherapists",
  //         link: "/physiotherapists",
  //       },
  //       {
  //         name: "For Corporates",
  //         link: "/corporates",
  //       },
  //       {
  //         name: "For Investors",
  //         link: "/investors",
  //       },
  //     ],
  //   },
  // ];

  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
      dropdown: [
        {
          name: "Physiotherapy at Clinic",
          link: "/services/clinic",
        },
        {
          name: "Physiotherapy at Home",
          link: "/services/physio-at-home",
        },
        {
          name: "Physiotherapy at Workplace",
          link: "/services/physio-at-workplace",
        },
        {
          name: "Online Consultation",
          link: "/services/online",
        },
      ],
    },
    {
      name: "Find a Physio",
      link: "/find-physio",
    },
    {
      name: "Become a Physio",
      link: "/become-physio",
    },
    // {
    //   name: "FAQs",
    //   link: "/faq",
    // },
    // {
    //   name: "Contact Us",
    //   link: "/contact"
    // },
    // {
    //   name: "Login / Signup",
    //   link: "/login",
    //   dropdown: [
    //     {
    //       name: "Patient Login/Signup",
    //       link: "/patient-login"
    //     },
    //     {
    //       name: "Physio Login/Signup",
    //       link: "/physio-login"
    //     },
    //   ],
    // },
  ];

  return (
    <div className="w-full px-4 md:px-20 py-4 flex flex-row items-center justify-between gap-4 bg-white shadow-sm">
      {/* LOGO */}
      <div className="logo flex items-center justify-center gap-3 group">
        <img 
          src="/call2physio.png" 
          alt="call2physio Logo" 
          // alt="Nexorah Logo" 
          className="w-12 h-12 object-contain transform group-hover:scale-105 transition-transform duration-300" 
        />
        
        <h1 className="text-2xl font-bold text-[#003A70]">
          Call2Physio
          {/* Nexorah */}
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2.5 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-[#003A70]" />
        ) : (
          <Menu size={24} className="text-[#003A70]" />
        )}
      </button>

      {/* MENU LIST - Desktop */}
      <div className="menu-list hidden md:flex items-center justify-center gap-8">
        {menuList.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.link}
              className="text-[#003A70] font-medium flex items-center hover:text-[#35B6B4] transition-all duration-300 group-hover:scale-105"
            >
              {item.name}
              {item.dropdown && (
                <ChevronDown size={16} className="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
              )}
            </Link>

            {item.dropdown && activeDropdown === index && (
              <div
                className="absolute left-0 mt-4 w-64 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-2 z-50 transition-all duration-300 border border-gray-100"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.link}
                    className="block px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#f0fdfd] hover:text-[#35B6B4] rounded-lg transition-all duration-300"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-gradient-to-br from-white/98 via-white/95 to-white/90 backdrop-blur-xl z-50 transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
            <div className="logo flex items-center gap-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-[#35B6B4] to-[#003A70] rounded-2xl opacity-10"></div>
                <img 
                  src="/call2physio.png" 
                  alt="Nexorah Logo" 
                  className="w-full h-full object-contain relative z-10" 
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#003A70] to-[#35B6B4] bg-clip-text text-transparent">
                Call2Physio
              </h1>
            </div>
            <button
              className="p-2.5 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} className="text-[#003A70]" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-3">
              {menuList.map((item, index) => (
                <div key={index} className="w-full group">
                  <Link
                    href={item.link}
                    className="block px-6 py-4 text-[#003A70] font-medium hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-2xl transition-all duration-300 relative overflow-hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#35B6B4]/0 to-[#003A70]/0 group-hover:from-[#35B6B4]/5 group-hover:to-[#003A70]/5 transition-all duration-500"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown size={16} className="transform group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 mt-2 space-y-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-xl transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100/50 bg-gradient-to-t from-white to-white/95 backdrop-blur-sm">
            {user && user.uid ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/account"
                  className="flex items-center gap-4 px-6 py-4 text-[15px] font-medium text-gray-700 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-2xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2.5 bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 rounded-xl">
                    <User size={18} className="text-[#003A70]" />
                  </div>
                  Account
                </Link>
                <button
                  className="flex items-center gap-4 px-6 py-4 text-[15px] font-medium text-gray-700 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-2xl transition-all duration-300 w-full text-left"
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
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="p-2.5 bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 rounded-xl">
                    <LogOut size={18} className="text-[#003A70]" />
                  </div>
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="flex items-center gap-4 px-6 py-4 text-[15px] font-medium text-gray-700 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-2xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2.5 bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 rounded-xl">
                    <LogIn size={18} className="text-[#003A70]" />
                  </div>
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center gap-4 px-6 py-4 text-[15px] font-medium text-gray-700 hover:bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 hover:text-[#35B6B4] rounded-2xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2.5 bg-gradient-to-r from-[#35B6B4]/10 to-[#003A70]/10 rounded-xl">
                    <UserPlus size={18} className="text-[#003A70]" />
                  </div>
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LOGIN BUTTON - Desktop */}
      <div className="relative hidden md:block" ref={loginDropdownRef}>
        <div className="login-button flex items-center justify-center gap-2 border-2 border-[#003A70] rounded-full hover:shadow-lg px-2 py-1.5 cursor-pointer transition-all duration-300 hover:border-[#35B6B4]">
          <div className="flex items-center justify-center gap-2">
              <Link href="/appointment">
                <Button
                  variant="ghost"
                  size="sm"
                className="flex items-center gap-2 px-4 py-2 cursor-pointer font-medium bg-[#35B6B4] text-white rounded-full hover:bg-[#2da3a1] transition-all duration-300"
                >
                <Plus size={20} className="group-hover:rotate-90 transition-all duration-300" />
                Make Appointment
                </Button>
              </Link>
            <div 
              className="p-2 hover:bg-[#35B6B4] rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <User size={20} className="text-[#003A70] group-hover:text-white" />
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-4 w-64 bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-2 z-50 transition-all duration-300">
            {user && user.uid ? (
              <>
              <Link
                href="/account"
                  className="flex items-center gap-3 px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#f5ffff] hover:text-[#35B6B4] transition-all duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                  <User size={18} />
                Account
              </Link>
              <Link
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
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#f5ffff] hover:text-[#35B6B4] transition-all duration-300"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <LogIn size={18} />
                  Login
                </Link>
              <Link
                href="/signup"
                  className="flex items-center gap-3 px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#f5ffff] hover:text-[#35B6B4] transition-all duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                  <UserPlus size={18} />
                Signup
              </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Top-Navbar
const TopNavbar = () => {
  return (
    <div className="w-full px-4 md:px-20 py-2 flex flex-col md:flex-row items-center bg-gradient-to-r from-[#35B6B4] to-[#2da3a1] text-white  justify-center md:justify-between gap-2">
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white font-medium text-sm md:text-base">
        <a 
          href="tel:+911234567890"
          className="flex items-center gap-2 hover:text-[#003A70] transition-all duration-300 group"
        >
          <Phone size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span>+91 12345 67890</span>
        </a>
        <div className="hidden md:block text-white/50">|</div>
        <a 
          href="mailto:support@call2physio.com"
          // href="mailto:support@nexorah.com"
          className="flex items-center gap-2 hover:text-[#003A70] transition-all duration-300 group"
        >
          <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span>support@call2physio.com</span>
          {/* <span>support@nexorah.com</span> */}
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-white">
        {[
          { icon: faFacebookF, url: "https://facebook.com", label: "Facebook" },
          { icon: faInstagram, url: "https://instagram.com", label: "Instagram" },
          { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
          { icon: faLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" }
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
          target="_blank"
          rel="noopener noreferrer"
            className="hover:text-[#003A70] hover:scale-110 transition-all duration-300"
            aria-label={social.label}
          >
            <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
};
