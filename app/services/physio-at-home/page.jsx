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
          <h1 className="text-xl md:text-2xl font-bold text-center">Physio at Home</h1>
          <nav className="flex items-end justify-center text-xs md:text-sm space-x-2">
            <Link
              href="/services"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Physio at Home</span>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              P H Y S I O &nbsp; A T &nbsp; H O M E
            </h1>
            <h1 className="text-lg md:text-2xl font-bold">
              Professional Physiotherapy Services in the Comfort of Your Home
            </h1>
          </div>
          <p className="text-sm md:text-md text-gray-600">
            Call2Physio provides certified physiotherapist in the comfort of
            your home. Our physiotherapists help you or your loved one heal fast
            and regain mobility as early as possible. They will visit your home
            to assess your need, recommend you the best physio required and with
            your consent define the visit plan. Our packages have been designed
            keeping in mind end user affordability and degree of customization.
          </p>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/about_hero2.jpg"
            alt="Physio at Home"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Home Therapy Importance Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 bg-[#003A70] text-white">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Physio at Home"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Why physiotherapy at home service is important?
          </h1>
          <p className="text-sm md:text-md">
            Home physiotherapy is crucial for those who face challenges
            accessing traditional clinic services. It enables patients to
            maintain independence and quality of life by providing essential
            care in familiar surroundings. This service is particularly valuable
            for post-injury recovery and surgical rehabilitation, offering
            personalized treatment that enhances mobility and makes daily
            activities more manageable.
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
              Guarantee Feel Free From Pain After Receiving our Physiotherapy at
              Home
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-sm md:text-md text-gray-600">
              At Call2Physio, we provide guaranteed pain relief through our home
              physiotherapy services. Our expert physiotherapists deliver high-quality care
              at your doorstep, helping you recover and return to your daily
              activities.
            </p>

            <div className="px-3 md:px-4 py-2 flex flex-col items-start justify-center bg-gray-100 rounded-xl">
              <h1 className="text-base md:text-lg font-medium"> Key Benefits: </h1>
              <ul className="list-decimal px-4 md:px-5 text-sm md:text-base">
                <li>Professional care in the comfort of your home</li>
                <li>Expert physiotherapists at your doorstep</li>
                <li>Comprehensive treatment for various conditions</li>
                <li>Ideal for seniors and those with mobility challenges</li>
                <li>No travel required - we come to you</li>
              </ul>
            </div>

            <p className="text-sm md:text-md text-gray-600">
              Our comprehensive physiotherapy treatments address various
              conditions including sports injuries, orthopedic issues, back/neck
              pain, arthritis, and more. The service is particularly beneficial
              for seniors and those with mobility challenges, offering
              professional care in the comfort of your home without the need to
              travel.
            </p>
          </div>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Physio at Home"
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
