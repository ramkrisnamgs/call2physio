"use client";

import {
  ArrowBigUp,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  HeartHandshake,
} from "lucide-react";
import React from "react";
import { FaCalendarDays, FaUserDoctor } from "react-icons/fa6";

const Steps = () => {
  return (
    <div className="px-10 md:px-35 py-10">
      <div className="flex items-center justify-between gap-10 text-start mb-8">
        <h2 className="w-1/2 text-2xl font-semibold text-[#35B6B4]">
          A Patient-Centered Approach for Effective, Long-Lasting Results
        </h2>
        {/* <p className="max-w-2xl mx-auto mt-2 text-gray-600">
          Physiotherapists are health care professionals who specialize in
          optimizing physical function and mobility.
        </p> */}
        <button className="bg-[#35B6B4] text-white px-5 py-2 rounded-full">
          How It Works
        </button>
      </div>
      {/* steps body */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* steps img */}
        <div className="flex-1 w-[50vw] h-[90vh]">
          <img
            src="/service3.jpg"
            alt="steps"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        {/* steps content */}
        <div className="flex-1 pl-5 flex flex-col items-start gap-4">
          {/* content cards */}
          <div className="w-full flex flex-col gap-2 px-4 py-4 text-black group hover:text-white bg-white hover:bg-[#35B6B4] transition-all ease-in-out duration-300 rounded-lg">
            {/* cards header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#dafffe]">
                  <FaCalendarDays size={24} color="#35B6B4" />
                </div>
                <h1 className="text-xl font-medium w-1/2">
                  1. Make An Appointment
                </h1>
              </div>
              <div>
                <ArrowDownLeft
                  size={24}
                  className="w-20 h-20 group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 max-h-0 group-hover:max-h-[500px] transition-all duration-300 overflow-hidden">
              <p className="text-sm">
                Schedule your appointment through our easy-to-use online booking
                system or by calling our clinic directly. Choose a time that
                works best for you and provide your basic information to get
                started on your journey to better health.
              </p>
            </div>
          </div>

          {/* content cards */}
          <div className="w-full flex flex-col gap-2 px-4 py-4 text-black group hover:text-white bg-white hover:bg-[#35B6B4] transition-all ease-in-out duration-300 rounded-lg">
            {/* cards header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#dafffe]">
                  <FaUserDoctor size={24} color="#35B6B4" />
                </div>
                <h1 className="text-xl font-medium w-1/2">
                  2. Get Free Consultation
                </h1>
              </div>
              <div>
                <ArrowDownLeft className="w-20 h-20 group-hover:rotate-180 transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-col gap-2 max-h-0 group-hover:max-h-[500px] transition-all duration-300 overflow-hidden">
              <p className="text-sm">
                During your free consultation, our experienced therapists will
                carefully assess your condition, discuss your medical history,
                and understand your specific needs. This initial meeting helps
                us create a personalized treatment plan tailored to your unique
                situation and goals.
              </p>
            </div>
          </div>

          {/* content cards */}
          <div className="w-full flex flex-col gap-2 px-4 py-4 text-black group hover:text-white bg-white hover:bg-[#35B6B4] transition-all ease-in-out duration-300 rounded-lg">
            {/* cards header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#dafffe]">
                  <HeartHandshake size={24} color="#35B6B4" />
                </div>
                <h1 className="text-xl font-medium w-1/2">
                  3. Meet The Expert Therapist
                </h1>
              </div>
              <div>
                <ArrowDownLeft
                  size={24}
                  className="w-20 h-20 group-hover:rotate-180 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 max-h-0 group-hover:max-h-[500px] transition-all duration-300 overflow-hidden">
              <p className="text-sm">
                You'll be matched with an expert therapist who will guide you
                through your treatment journey. Our compassionate professionals
                are dedicated to helping you achieve your wellness goals with
                personalized care and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
