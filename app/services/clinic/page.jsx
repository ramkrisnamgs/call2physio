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
          <h1 className="text-xl md:text-2xl font-bold text-center">Clinic Physiotherapy</h1>
          <nav className="flex items-end justify-center text-xs md:text-sm space-x-2">
            <Link
              href="/services"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Clinic Physiotherapy</span>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <div className="px-4 py-6 md:px-20 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              C L I N I C &nbsp; P H Y S I O T H E R A P Y
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">
              Professional Physiotherapy Services at Our State-of-the-Art Clinic
            </h1>
          </div>
          <p className="text-sm md:text-md text-gray-600">
            Call2Physio provides certified physiotherapy services at our modern clinic. 
            Our experienced physiotherapists help you recover and regain mobility through 
            personalized treatment plans. We use advanced equipment and techniques to assess 
            your condition, recommend the best treatment approach, and create a customized 
            rehabilitation program. Our clinic services are designed to provide comprehensive 
            care in a professional and comfortable environment.
          </p>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/about_hero2.jpg"
            alt="Clinic Physiotherapy"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Clinic Therapy Importance Section */}
      <div className="px-4 py-8 md:px-20 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 bg-[#003A70] text-white">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Clinic Physiotherapy"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-xs md:max-w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            Why clinic physiotherapy service is important?
          </h1>
          <p className="text-sm md:text-md">
            Clinic physiotherapy is essential for accessing specialized equipment and 
            professional expertise in a controlled environment. It provides patients with 
            access to advanced treatment modalities, specialized equipment, and immediate 
            professional guidance. This service is particularly valuable for complex conditions 
            requiring intensive rehabilitation, offering comprehensive care in a dedicated 
            healthcare setting with all necessary resources readily available.
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="px-4 py-8 md:px-20 md:py-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-xs md:text-sm font-medium tracking-tighter text-[#35B6B4]">
              W H Y &nbsp; C H O O S E &nbsp; U S
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">
              Experience Professional Care in Our Modern Clinic Environment
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-md text-gray-600">
              At Call2Physio, we provide comprehensive physiotherapy care in our state-of-the-art 
              clinic. Our expert physiotherapists deliver high-quality treatment using advanced 
              equipment and techniques, helping you achieve optimal recovery and improved mobility.
            </p>

            <div className="px-3 md:px-4 py-2 flex flex-col items-start justify-center bg-gray-100 rounded-xl">
              <h1 className="text-base md:text-lg font-medium"> Key Benefits: </h1>
              <ul className="list-decimal px-4 md:px-5 text-sm md:text-base">
                <li>Access to specialized equipment and facilities</li>
                <li>Expert physiotherapists and professional staff</li>
                <li>Comprehensive assessment and treatment</li>
                <li>Structured rehabilitation programs</li>
                <li>Modern and comfortable clinic environment</li>
              </ul>
            </div>

            <p className="text-sm md:text-md text-gray-600">
              Our clinic offers comprehensive physiotherapy services for various conditions 
              including sports injuries, orthopedic issues, back/neck pain, arthritis, and more. 
              The service is particularly beneficial for those requiring specialized equipment 
              and intensive rehabilitation, providing professional care in a dedicated healthcare 
              setting with all necessary resources.
            </p>
          </div>
        </div>
        {/* Hero Images */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/service3.jpg"
            alt="Clinic Physiotherapy"
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
