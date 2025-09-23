import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CalendarCheck, Plus, Star } from "lucide-react";
import AppointmentBookingForm from "./components/AppointmentBookingForm";
// import { UserStar } from "lucide-react";

const Appointment = () => {
  return (
     <main className="space-y-2">
     <Header />
    <div className="relative min-h-[90vh] bg-gradient-to-b from-[#003A70] to-[#001830] text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <img src="/pattern-bg.png" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-20 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-[#35B6B4]/20 rounded-full text-[#35B6B4] text-sm font-medium">
                BOOK YOUR APPOINTMENT
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-up">
              Start Your Journey to <span className="text-[#35B6B4]">Better Health</span> Today
            </h1>
            
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-300 text-lg">
                Experience personalized care from our expert physiotherapists. Book your session in just a few clicks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                {/* <UserStar /> */}
                <Star />
                  {/* <img src="/check-circle.svg" alt="" className="w-5 h-5" /> */}
                  <span>Expert Physiotherapists</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                <CalendarCheck />
                  {/* <img src="/check-circle.svg" alt="" className="w-5 h-5" /> */}
                  <span>Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300 mb-1 block">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300 mb-1 block">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300 mb-1 block">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-1 block">Preferred Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300 mb-1 block">Your Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#35B6B4] focus:ring-1 focus:ring-[#35B6B4] transition-all h-24"
                  placeholder="Tell us about your condition or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#35B6B4] text-white py-4 rounded-lg font-medium hover:bg-[#2da3a1] transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Schedule Appointment Now
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                By booking, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Choose your physiotherapist and schedule your appointment in just a few steps.
        </p>
        <AppointmentBookingForm />
      </div>
    <Footer />
    </main>
  );
};

export default Appointment;
