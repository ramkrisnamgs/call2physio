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
          <h1 className="text-xl md:text-2xl font-bold text-center">Physio at Workplace</h1>
          <nav className="flex items-end justify-center text-xs md:text-sm space-x-2">
            <Link
              href="/services"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Physio at Workplace</span>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              P H Y S I O &nbsp; A T &nbsp; W O R K P L A C E
            </h1>
            <h1 className="text-lg md:text-2xl font-bold">
              Elevate Employee Wellness with On-Site Physiotherapy
            </h1>
          </div>
          <p className="text-sm md:text-md text-gray-600">
            Call2Physio brings professional physiotherapy services directly to your workplace. Our expert physiotherapists help employees prevent and manage work-related injuries, reduce pain, and improve overall well-being. We offer ergonomic assessments, posture correction, and personalized exercise programs tailored to your team’s needs. Investing in workplace physiotherapy leads to healthier, happier, and more productive employees—while reducing absenteeism and healthcare costs for your organization.
          </p>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/about_hero2.jpg"
            alt="Physio at Workplace"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Workplace Physio Importance Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 bg-[#003A70] text-white">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Workplace Physiotherapy Importance"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Why is Workplace Physiotherapy Important?
          </h1>
          <p className="text-sm md:text-md">
            Many employees spend long hours at desks or performing repetitive tasks, leading to musculoskeletal pain, poor posture, and increased risk of injury. On-site physiotherapy addresses these issues proactively—improving ergonomics, reducing discomfort, and supporting faster recovery from injuries. This service helps organizations foster a culture of health, boost morale, and enhance productivity by keeping their workforce active and pain-free.
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
              Empower Your Team with Expert On-Site Care
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-sm md:text-md text-gray-600">
              At Call2Physio, we understand the unique needs of modern workplaces. Our physiotherapists deliver evidence-based care, practical advice, and tailored programs to help your employees feel their best—right at the office. We partner with organizations to create a healthier, more resilient workforce.
            </p>
            <div className="px-3 md:px-4 py-2 flex flex-col items-start justify-center bg-gray-100 rounded-xl">
              <h1 className="text-base md:text-lg font-medium"> Key Benefits: </h1>
              <ul className="list-decimal px-4 md:px-5 text-sm md:text-base">
                <li>On-site ergonomic assessments and workstation setup</li>
                <li>Injury prevention and early intervention</li>
                <li>Personalized exercise and stretching programs</li>
                <li>Reduced absenteeism and improved productivity</li>
                <li>Convenient, professional care at your workplace</li>
              </ul>
            </div>
            <p className="text-sm md:text-md text-gray-600">
              Our workplace physiotherapy services address back and neck pain, repetitive strain injuries, postural issues, and more. We help your team stay healthy, energized, and focused—so your business can thrive.
            </p>
          </div>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Workplace Physio Benefits"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Appointment Booking Section */}
      <Appointment />
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
