import { Plus } from "lucide-react";
import React from "react";

const Appointment = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-white h-[80vh] bg-cover bg-center bg-no-repeat bg-fixed mb-15"
      style={{ backgroundImage: "url('/service4.jpg')" }}
    >
      <div className="flex flex-col items-start justify-center w-full h-full bg-[#003A70] opacity-80">
        <div className="px-6 md:px-20 md:py-10 w-full flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="py-5 flex-1 flex flex-col items-start justify-center gap-4 animate-fade-in">
            <h1 className="text-sm font-medium tracking-tighter text-[#35B6B4] animate-slide-up">
              G E T &nbsp; A N &nbsp; A P P O I N T M E N T
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Book an Appointment with Our Experts Today
            </h1>
            <p className="text-sm line-clamp-3 tracking-tighter text-gray-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Schedule your appointment now and experience the difference of
              compassionate, expert care designed around you!
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <form className="flex flex-wrap items-center justify-center gap-3 md:px-5 w-full">
              <div className="w-full flex items-center justify-center gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <input
                  type="date"
                  placeholder="Date"
                  className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
                <input
                  type="time"
                  placeholder="Time"
                  className="w-1/2 p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#35B6B4] opacity-100 text-white p-2 rounded-md hover:bg-[#2da3a1] transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <Plus />
                  Make an Appointment
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
