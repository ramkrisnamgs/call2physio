import { Plus } from 'lucide-react';
import React from 'react'

const AppointmentForm = () => {
     return (
          <div className="flex flex-col items-center justify-center py-10 gap-5 h-[50vh] bg-gradient-to-b to-[#35B6B4] from-[#003A70] rounded-md">
            <h1 className="text-xl font-bold text-white">Book an appointment with us today!</h1>
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
}

export default AppointmentForm