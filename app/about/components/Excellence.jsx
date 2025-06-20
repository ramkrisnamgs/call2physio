import React from 'react'
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import CountUp from '@/app/styleComponent/CountUp';

const Excellence = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-white min-h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat bg-fixed mb-32 md:mb-40"
      style={{ backgroundImage: "url('/service4.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#003A70] opacity-80"></div>
      <div className="relative flex flex-col items-start justify-center gap-4 w-full h-full z-10">
        <div className="px-4 md:px-30 py-8 md:py-10 w-full flex flex-col items-start justify-center gap-4">
          <h1 className="text-sm font-medium tracking-tighter text-[#35B6B4] animate-fade-in">
            C O M M I T M E N T &nbsp; T O &nbsp; E X C E L L E N C E
          </h1>
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold md:w-1/2 animate-slide-up">
              Individually Tailored Treatment: Your Path to Wellness
            </h1>
            <Button
              href="/contact"
              className="bg-[#35B6B4] text-white px-5 py-2 rounded-full cursor-pointer font-medium hover:bg-[#2da3a1] transform hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-0 left-0 translate-y-1/2 px-4 md:px-30 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 z-20">
        {[
          { number: 835, label: "Professionals" },
          { number: 67, label: "Clinics" },
          { number: 7433, label: "Clients" },
          { number: 2400, label: "Treatments" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center gap-2 text-2xl md:text-3xl w-full px-4 py-4 rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-center gap-1 font-bold text-[#003A70]">
              <CountUp
                from={0}
                to={stat.number}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              <Plus size={20} className="text-[#35B6B4]" />
            </div>
            <p className="text-base md:text-lg text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Excellence