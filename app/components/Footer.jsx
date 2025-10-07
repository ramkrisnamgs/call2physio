import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 md:px-10 py-10 mt-10 border-t border-[#003A70]">
      <div className="footer flex flex-col items-center justify-center gap-2 px-4 md:px-10 py-10 rounded-2xl bg-[#003A70] hover:shadow-2xl transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Footer Container */}
          <div className="footer-container flex flex-col md:flex-row items-center justify-center gap-8 w-full min-h-[50vh]">
            {/* Logo + Desc. + Newsletter */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4 w-full md:w-auto">
              {/* Logo */}
              <div className="logo flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/c2pp.jpg"
                  // src="/call2physio.png"
                  alt=""
                  className="w-14 h-14 animate-pulse"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Call2Physio
                </h1>
              </div>

              {/* Desc. */}
              <p className="text-sm text-gray-300 w-full md:w-[80%] text-center md:text-left hover:text-white transition-colors duration-300 leading-relaxed">
                Physiotherapists, also known as physical therapists, are health
                care professionals who specialize optimizing physical function
                and mobility and they play crucial role in helping individuals
                recover from injuries.
              </p>

              {/* Newsletter */}
              <div className="newsletter flex flex-col md:flex-row items-center justify-center gap-2 w-full md:w-[80%]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#35B6B4] transition-all duration-300"
                />
                <button className="w-full md:w-auto bg-[#1b5c98] text-white p-3 rounded-xl cursor-pointer hover:bg-[#35B6B4] transform hover:scale-105 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-8 w-full">
              {/* Quick Links */}
              <div className="w-full md:w-[30%] flex flex-col items-center md:items-start justify-start">
                <h1 className="text-xl font-bold text-white mb-6 w-full text-center md:text-left">
                  Quick Links
                </h1>
                <ul className="flex flex-col items-center md:items-start justify-center gap-4">
                  {["Home", "About Us", "Contact", "FAQ"].map((item, index) => (
                    <li key={index} className="text-sm text-gray-300 group">
                      <Link
                        href={
                          "Home"
                            ? "/"
                            : `/${item.toLowerCase().replace(" ", "-")}`
                        }
                        className="text-sm text-gray-300 hover:text-[#35B6B4] transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="w-0 group-hover:w-2 h-[2px] bg-[#35B6B4] transition-all duration-300"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="w-full md:w-[40%] flex flex-col items-center md:items-start justify-start">
                <h1 className="text-xl font-bold text-white mb-6 w-full text-center md:text-left">
                  Services
                </h1>
                <ul className="flex flex-col items-center md:items-start justify-center gap-4">
                  {[
                    "Physiotherapy at Clinic",
                    "Physiotherapy at Home",
                    "Physiotherapy at Workplace",
                    "Online Consultation",
                  ].map((service, index) => (
                    <li key={index} className="text-sm text-gray-300 group">
                      <Link
                        href={`/services/${service
                          .toLowerCase()
                          .replace("physiotherapy at", "physio-at")
                          .replace(/\s+/g, "-")}`}
                        className="text-sm text-gray-300 hover:text-[#35B6B4] transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="w-0 group-hover:w-2 h-[2px] bg-[#35B6B4] transition-all duration-300"></span>
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="w-full md:w-[40%] flex flex-col items-center md:items-start justify-start">
                <h1 className="text-xl font-bold text-white mb-6 w-full text-center md:text-left">
                  Contact Us
                </h1>
                <ul className="flex flex-col items-center md:items-start justify-center gap-4">
                  <li className="text-sm text-gray-300 group">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2 hover:text-[#35B6B4] transition-colors duration-300"
                    >
                      <Phone size={16} className="group-hover:animate-bounce" />
                      <span>+91 9876543210</span>
                    </a>
                  </li>
                  <li className="text-sm text-gray-300 group">
                    <a
                      href="mailto:call2physio@gmail.com"
                      className="flex items-center gap-2 hover:text-[#35B6B4] transition-colors duration-300"
                    >
                      <Mail size={16} className="group-hover:animate-bounce" />
                      <span>call2physio@gmail.com</span>
                    </a>
                  </li>
                  <li className="text-sm text-gray-300 group">
                    <div className="flex items-center gap-2 hover:text-[#35B6B4] transition-colors duration-300">
                      <MapPin
                        size={16}
                        className="group-hover:animate-bounce"
                      />
                      <span>Connaught Place, New Delhi</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300/30"></div>

        {/* Copyright + Social Media Icons + T&C,PP,RP */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {/* copyright */}
          <div>
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300 text-center md:text-left">
              &copy; 2025 Call2Physio. All rights reserved.
            </p>
          </div>

          {/* social media icons */}
          <div className="flex gap-4 text-white">
            {[
              { icon: faFacebookF, url: "https://facebook.com" },
              { icon: faInstagram, url: "https://instagram.com" },
              { icon: faTwitter, url: "https://twitter.com" },
              { icon: faLinkedinIn, url: "https://linkedin.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#35B6B4] transform hover:scale-110 transition-all duration-300 bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* T&C,PP,RP */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { name: "Terms & Conditions", path: "/terms-and-conditions" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Refund Policy", path: "/refund-policy" },
            ].map((item, index, array) => (
              <React.Fragment key={index}>
                <Link
                  href={item.path}
                  className="text-sm text-gray-300 hover:text-[#35B6B4] transition-colors duration-300"
                >
                  {item.name}
                </Link>
                {index < array.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
