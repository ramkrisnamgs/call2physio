import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import ServicesSection from "./components/Services";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Professional from "./components/Professional";
import AppointmentForm from "./styleComponent/AppointmentForm";
import Popup from "./components/popup";

export default function Home() {
  return (
    <div className="max-h-screen max-w-screen flex flex-col">
      <Header />
      <Popup />
      <Hero />
      {/* <AppointmentForm /> */}
      <About />
      {/* <Professional /> */}
      <ServicesSection />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
}
