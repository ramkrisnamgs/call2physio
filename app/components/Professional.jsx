"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import TiltedCard from "../styleComponent/TiltedCards";
import Link from "next/link";

const professionalsData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designation",
    image: "/testimonial-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Designation",
    image: "/testimonial-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Designation",
    image: "/testimonial-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Mike Johnson",
    designation: "Designation",
    image: "/testimonial-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const Professional = () => {
  return (
    <section className="mb-16 w-full min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-[#35B6B4] uppercase mb-2 sm:mb-3">
            Our Professionals
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Dedicated to Your Recovery
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Each of our team members brings specialized expertise and a
            patient-centered approach to ensure you receive the highest level of
            care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {professionalsData.map((professional) => (
            <div key={professional.id} className="flex justify-center">
              <ProfessionalCard data={professional} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#35B6B4] text-white text-base sm:text-lg font-medium rounded-full hover:bg-[#2a8f8d] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Meet Our Physio's
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Professional;

function ProfessionalCard({ data }) {
  return (
    <TiltedCard
      imageSrc={data.image}
      altText={data.name}
      containerHeight="350px"
      containerWidth="250px"
      imageHeight="325px"
      imageWidth="250px"
      rotateAmplitude={12}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div className="w-[250px] h-full flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-xl p-4 bg-white">
          {/* Image */}
          <div className="relative mb-4 w-full h-full flex flex-col items-center justify-center">
            <img src={data.image} alt="" className="w-full h-full rounded-xl" />
            {/* SocialMedia Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1/2 flex items-center justify-between px-2 py-3 z-10 bg-white border border-gray-300 rounded-xl">
              <FaFacebookF className="w-6 h-6 text-[#35B6B4] hover:text-white bg-gray-100 hover:bg-gray-900 rounded-full p-1" />
              <FaTwitter className="w-6 h-6 text-[#35B6B4] hover:text-white bg-gray-100 hover:bg-gray-900 rounded-full p-1" />
              <FaInstagram className="w-6 h-6 text-[#35B6B4] hover:text-white bg-gray-100 hover:bg-gray-900 rounded-full p-1" />
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-col items-center justify-center">
            {/* Name */}
            <h3 className="text-xl font-medium">{data.name}</h3>
            {/* Designation */}
            <p className="text-[#35B6B4] text-sm">{data.designation}</p>
          </div>
        </div>
      }
    />
  );
}
