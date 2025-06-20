import { Avatar, AvatarGroup, Rating, Typography } from "@mui/material";
import { Plus } from "lucide-react";
import React from "react";
import CountUp from "../styleComponent/CountUp";
import CircularText from "../styleComponent/CircularText";
import PlayButton from "../styleComponent/PlayButton";

const Hero = () => {
  return (
    <div className="relative max-w-screen h-full mb-20 text-white bg-[#003A70]">
      <div className="px-4 sm:px-8 md:px-20 mb-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4 h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Live your best life and unlock your full potential for a brighter
            future.
          </h1>
          <p className="text-sm sm:text-md w-full md:w-3/4">
            Transforming physiotherapy with AI-powered diagnosis and
            personalized treatment pathways --- delivering effective pain-relief
            & mobility care across Clinics, Homes & Tele-Rehab.
          </p>
          <div className="border-b border-gray-400 w-full md:w-2/3"></div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <AvatarGroup max={4}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/testimonial-1.jpg"
                alt="Avatar"
              />
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/testimonial-2.jpg"
                alt="Avatar"
              />
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/testimonial-3.jpg"
                alt="Avatar"
              />
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="/testimonial-4.jpg"
                alt="Avatar"
              />
            </AvatarGroup>
            <div className="block h-8 border-r border-gray-400"></div>
            <div className="flex flex-col items-center">
              <Rating size="small" name="read-only" value={5} readOnly />
              <p className="text-xs sm:text-sm text-gray-400">
                Total Reviews
                <span className="text-white font-medium">{" (4.8 of 5)"}</span>
              </p>
            </div>
            <div className="block h-8 border-r border-gray-400"></div>
            <div className="flex items-center justify-center sm:ml-2 cursor-pointer">
              <PlayButton videoUrl="https://www.youtube.com/embed/your-video-id" />
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative flex-1 flex flex-col items-center justify-center py-6 md:py-10 w-full h-full">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1b5c98] to-[#003A70] rounded-md">
            <div className="absolute top-1/10 left-1/2 md:left-3/5 -translate-x-1/2 md:translate-x-0 flex-1 flex items-center justify-center">
              <CircularText
                text="MOBILITY*REHAB*TREATMENT*"
                onHover="speedUp"
                spinDuration={30}
                className="custom-class"
              />
            </div>
            <div className="w-full">
              <img
                src="/hero_avatar.png"
                alt="Hero_Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-full px-4 sm:px-8 md:px-40 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <AcheivementBar className="w-full" />
      </div>
    </div>
  );
};

export default Hero;

const AppointmentForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-5 h-[50vh] bg-gradient-to-b to-[#35B6B4] from-[#003A70] rounded-md">
      <h1 className="text-xl font-bold">Book an appointment with us today!</h1>
      <form className="flex flex-wrap items-center justify-center gap-3 px-5">
        <div className="w-full flex items-center justify-center gap-3">
          <input
            type="text"
            placeholder="Name"
            className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-3">
          <input
            type="date"
            placeholder="Date"
            className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none"
          />
          <input
            type="time"
            placeholder="Time"
            className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#003A70] text-white p-2 rounded-md"
        >
          <div className="flex items-center justify-center gap-2">
            <Plus />
            Make an Appointment
          </div>
        </button>
      </form>
    </div>
  );
};

function AcheivementBar() {
  return (
    <div className="px-10 py-10 flex items-center justify-between gap-8 bg-white border border-[#003A70] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Num. of Professionals */}
      <div className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center gap-2 text-5xl font-bold">
          <CountUp
            from={0}
            to={647}
            separator=","
            direction="up"
            duration={2.5}
            className="count-up-text bg-gradient-to-r from-[#003A70] to-[#35B6B4] bg-clip-text text-transparent"
          />
          <Plus size={24} className="text-[#35B6B4] group-hover:rotate-90 transition-transform duration-300" />
        </div>
        <p className="text-xl font-medium text-[#003A70] group-hover:text-[#35B6B4] transition-colors duration-300">Professionals</p>
      </div>

      {/* Num. of Clinics */}
      <div className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center gap-2 text-5xl font-bold">
          <CountUp
            from={0}
            to={85}
            separator=","
            direction="up"
            duration={2.5}
            className="count-up-text bg-gradient-to-r from-[#003A70] to-[#35B6B4] bg-clip-text text-transparent"
          />
          <Plus size={24} className="text-[#35B6B4] group-hover:rotate-90 transition-transform duration-300" />
        </div>
        <p className="text-xl font-medium text-[#003A70] group-hover:text-[#35B6B4] transition-colors duration-300">Clinics</p>
      </div>

      {/* Num. of Patients */}
      <div className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center gap-2 text-5xl font-bold">
          <CountUp
            from={0}
            to={3500}
            separator=","
            direction="up"
            duration={2.5}
            className="count-up-text bg-gradient-to-r from-[#003A70] to-[#35B6B4] bg-clip-text text-transparent"
          />
          <Plus size={24} className="text-[#35B6B4] group-hover:rotate-90 transition-transform duration-300" />
        </div>
        <p className="text-xl font-medium text-[#003A70] group-hover:text-[#35B6B4] transition-colors duration-300">Patients</p>
      </div>
    </div>
  );
}
