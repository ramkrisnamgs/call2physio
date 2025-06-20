import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import ServicesHero from "./components/ServicesHero";
import Services from "../components/Services";
import Appointment from "../components/Appointment";

const page = () => {
  return (
    <div>
      <Header />

     {/* Breadcrumb */}
     <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">Our Services</h1>
          <nav className="flex items-end justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Services</span>
          </nav>
        </div>
      </div>

      <ServicesHero />
      <Services />
      <Appointment />

      <Footer />
    </div>
  );
};

export default page;
