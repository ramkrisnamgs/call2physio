import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

const About = () => {
  return (
    <section className="w-full bg-gray-50 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* About Image Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="/about_hero3.jpg"
                  alt="About"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="h-[200px] md:h-[250px] rounded-2xl overflow-hidden group">
              <Image
                src="/about_hero2.jpg"
                alt="About"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div className="h-[200px] md:h-[250px] rounded-2xl overflow-hidden group">
              <Image
                src="/about_hero.jpg"
                alt="About"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* About Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 text-sm font-medium tracking-wider text-[#35B6B4] bg-[#35B6B4]/10 rounded-full">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                We Treat The Individual, Not Just The Injury
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At our clinic, we understand that each patient is unique. That's why
              we take a personalized approach to treatment. We treat the individual,
              not just the injury. We believe in a holistic approach to health and
              wellness, and we are dedicated to helping our patients achieve their
              goals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To enhance Lives through Compassionate, Comprehensive and
                  Professional Care
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To Be a Leading Provider of Innovative and Patient-Centered Chiropractic
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="group bg-gradient-to-r from-[#35B6B4] to-[#2da3a1] text-white font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                <span>Learn More</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className="bg-[#e1fafa] p-3 rounded-full">
                  <FaPhone className="w-6 h-6 text-[#35B6B4]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us Anytime</p>
                  <p className="text-lg font-semibold text-gray-900">+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
