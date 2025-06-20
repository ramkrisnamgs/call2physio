import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Professional from "../components/Professional";
import Excellence from "./components/Excellence";
import Value from "./components/Value";
import Appointment from "../components/Appointment";

const page = () => {
  return (
    <div className="">
      <Header />

      {/* Breadcrumb */}
      <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">About Us</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">About</span>
          </nav>
        </div>
      </div>

      <About />

      {/* Excellence */}
      <Excellence />

      {/* Value */}
      <Value />

      <Services />

      {/* Appointment */}
      <Appointment />

      <Professional />

      <Footer />
    </div>
  );
};

export default page;
