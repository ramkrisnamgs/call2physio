import Faq from "@/app/(footer)/faq/components/Faq";
import Appointment from "@/app/components/Appointment";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Professional from "@/app/components/Professional";
import Testimonials from "@/app/components/Testimonials";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Breadcrumb Section */}
      <div
        className="flex flex-col items-center justify-center text-white h-[35vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] bg-opacity-80">
          <h1 className="text-xl md:text-2xl font-bold text-center">Online Physiotherapy</h1>
          <nav className="flex items-end justify-center text-xs md:text-sm space-x-2">
            <Link
              href="/services"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Online Physiotherapy</span>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              O N L I N E &nbsp; P H Y S I O T H E R A P Y
            </h1>
            <h1 className="text-lg md:text-2xl font-bold">
              Professional Physiotherapy Services Through Virtual Consultations
            </h1>
          </div>
          <p className="text-sm md:text-md text-gray-600">
            Call2Physio provides certified physiotherapists through convenient online sessions. 
            Our physiotherapists help you or your loved one heal fast and regain mobility through 
            virtual consultations. They will assess your needs remotely, recommend the best physio 
            required, and with your consent, define a personalized treatment plan. Our online packages 
            have been designed keeping in mind accessibility and flexibility for our patients.
          </p>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/about_hero2.jpg"
            alt="Online Physiotherapy"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Online Therapy Importance Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 bg-[#003A70] text-white">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Online Physiotherapy"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Why online physiotherapy service is important?
          </h1>
          <p className="text-sm md:text-md">
            Online physiotherapy is essential for those who need flexible access to professional care. 
            It enables patients to receive expert guidance from anywhere, maintaining their treatment 
            schedule without geographical constraints. This service is particularly valuable for busy 
            professionals, those in remote areas, or anyone seeking convenient access to physiotherapy 
            expertise, offering personalized treatment plans that can be followed from the comfort of 
            your own space.
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              W H Y &nbsp; C H O O S E &nbsp; U S
            </h1>
            <h1 className="text-lg md:text-2xl font-bold">
              Experience Professional Care Through Our Virtual Physiotherapy Sessions
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-sm md:text-md text-gray-600">
              At Call2Physio, we provide expert physiotherapy care through our virtual consultation 
              services. Our experienced physiotherapists deliver high-quality care through online 
              sessions, helping you recover and maintain your daily activities with professional guidance.
            </p>

            <div className="px-3 md:px-4 py-2 flex flex-col items-start justify-center bg-gray-100 rounded-xl">
              <h1 className="text-base md:text-lg font-medium"> Key Benefits: </h1>
              <ul className="list-decimal px-4 md:px-5 text-sm md:text-base">
                <li>Professional care from anywhere</li>
                <li>Flexible scheduling options</li>
                <li>Comprehensive virtual assessment and treatment</li>
                <li>Convenient for busy professionals</li>
                <li>No travel required - connect from home</li>
              </ul>
            </div>

            <p className="text-sm md:text-md text-gray-600">
              Our comprehensive online physiotherapy services address various conditions including 
              sports injuries, orthopedic issues, back/neck pain, arthritis, and more. The service 
              is particularly beneficial for those seeking flexible treatment options, offering 
              professional care through virtual consultations without the need to travel.
            </p>
          </div>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Online Physiotherapy"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Appointment Booking Section */}
      <Appointment />
      
      {/* Physio at Home Services Section */}
      {/* Our Team Section */}
      <Professional />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <Faq />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default page;
