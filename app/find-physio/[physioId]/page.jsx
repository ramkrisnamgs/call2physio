"use client";

import React, { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm";
import { getPhysioById } from "@/lib/firebase/physio/read";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReviewList from "@/app/patient/appointments/components/ReviewList";
import ReviewForm from "@/app/patient/appointments/components/ReviewForm";

const PhysioProfilePage = () => {
  const { physioId } = useParams();
  const [physio, setPhysio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  

  useEffect(() => {
    const fetchPhysio = async () => {
      try {
        const data = await getPhysioById(physioId);
        if (!data) {
          toast.error("Physio not found");
        }
        setPhysio(data);
      } catch (error) {
        toast.error("Failed to fetch physio details");
      } finally {
        setLoading(false);
      }
    };
    fetchPhysio();
  }, [physioId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-[#003A70] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600 font-medium">Loading details...</p>
        </div>
      </div>
    );
  }

  if (!physio) {
    return <p className="p-4">Physio not found</p>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl h-[150%] mx-auto flex justify-center items-center">
      {/* Physio Info */}
      <div className="bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-xl mb-8 transition-all hover:shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Profile Image Placeholder */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl sm:text-3xl text-gray-400">
              {physio?.photoURL ? (
                <Image 
                  width={96}
                  height={96}
                  src={physio?.photoURL}
                  alt={`${physio?.displayName}'s profile`}
                  className="w-full h-full object-cover rounded-full"
                  unoptimized
                />
              ) : (
                physio?.displayName?.[0]?.toUpperCase()
              )}
            </span>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">{physio?.displayName}</h1>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-700 flex flex-col sm:flex-row items-center">
                <span className="font-medium mb-1 sm:mb-0 sm:mr-2">Specialization:</span>
                {physio?.specialization || "Specialist"}
              </p>
              <p className="text-base sm:text-lg text-gray-700 flex flex-col sm:flex-row items-center">
                <span className="font-medium mb-1 sm:mb-0 sm:mr-2">Email:</span>
                <span className="break-all">{physio?.email}</span>
              </p>
              <p className="text-base sm:text-lg flex flex-col sm:flex-row items-center">
                <span className="font-medium mb-1 sm:mb-0 sm:mr-2">Status:</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  physio?.isApproved 
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {physio?.isApproved ? "Approved" : "Pending"}
                </span>
              </p>
            </div>

            {/* Review List */}
            <ReviewList physioId={physioId}/>
            <ReviewForm physioId={physioId} onSuccess={() => window.location.reload()}/>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button
                onClick={() => setShowBookingForm(true)}
                className="w-full sm:w-auto bg-[#003A70] hover:bg-[#35B6B4] text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </button>
              <Link href={`/physio/${physio?.uid}`} className="w-full sm:w-auto">
                <button className="w-full border-2 border-gray-300 px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <BookingForm
              physioId={physioId}
              physioName={physio?.displayName}
              onClose={() => {
                setShowBookingForm(false);
                toast.success("Appointment booked!");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysioProfilePage;
