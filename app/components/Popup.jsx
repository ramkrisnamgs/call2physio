"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function Popup() {
  const {user} = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative my-2 sm:my-4" 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-gray-600 hover:text-[#35B6B4] hover:bg-gray-100/80 hover:rotate-45 rounded-full cursor-pointer p-1 transition-all duration-300 z-10 bg-white/80"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Trust Section */}
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 bg-[#efffff] space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-6 sm:w-8 md:h-1.5 md:w-12 bg-[#35B6B4] rounded-full"></div>
                  <span className="text-[#35B6B4] font-medium text-xs sm:text-sm">Premium Care</span>
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  Experience World-Class <span className="text-[#35B6B4]">Physiotherapy</span>
                </h2>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-white/60 p-2 rounded-lg text-xs sm:text-sm">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d6fdfc] flex items-center justify-center">
                      <span className="text-[#35B6B4]">★</span>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#d6fdfc] flex items-center justify-center">
                      <span className="text-[#35B6B4]">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Trusted by <span className="font-semibold">2000+</span> patients
                  </p>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35B6B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Licensed & Certified Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35B6B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Home & Clinic Visits Available</span>
                  </div>
                </div>

                {user ? (
                  <Link href="/appointment" className="inline-block w-full md:w-auto mt-2">
                    <button className="group relative w-full bg-[#35B6B4] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg overflow-hidden text-xs sm:text-sm">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                        Schedule Consultation
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-[#22aaa8] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </Link>
                ) : (
                  <Link href="/signup?role=patient" className="inline-block w-full md:w-auto mt-2">
                    <button className="group relative w-full bg-[#35B6B4] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg overflow-hidden text-xs sm:text-sm">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                        Signup Now
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-[#22aaa8] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </Link>
                )}
              </div>

              {/* Right - CTA */}
              <div className="hidden md:block">
                <Image
                  src="/bg.avif"
                  width={600}
                  height={400}
                  alt="Trusted physiotherapy services"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
