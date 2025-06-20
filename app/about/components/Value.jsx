import React from "react";

const Value = () => {
  return (
    <div className="px-4 md:px-20 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
      {/* Value Left */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Value Cards Container */}
        <div className="space-y-4">
          {[
            {
              number: "01",
              title: "Personalized Care Plan",
              description: "We create a personalized care plan for each patient based on their individual needs and goals."
            },
            {
              number: "02", 
              title: "Experienced Professionals",
              description: "Our team of experienced professionals is dedicated to providing the highest quality care to our patients."
            },
            {
              number: "03",
              title: "Comprehensive Services", 
              description: "We offer a wide range of services to meet the needs of our patients."
            },
            {
              number: "04",
              title: "Holistic Approach to Healing",
              description: "We approach healing from a holistic perspective, considering physical, mental, and emotional well-being."
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="group px-6 py-5 flex items-center gap-6 bg-white rounded-xl border border-gray-200 hover:border-[#35B6B4] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl font-bold text-[#35B6B4] group-hover:scale-110 transition-transform duration-300">
                {value.number}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-800 group-hover:text-[#35B6B4] transition-colors duration-300">
                  {value.title}
                </h1>
                <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value Right */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-medium tracking-wider text-[#35B6B4] animate-fade-in">
            O U R &nbsp; V A L U E
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 animate-slide-up">
            Our Core Values: Guiding Principles of Quality Care
          </h1>
        </div>
        {/* Value Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
          <img
            src="/value-img.jpg"
            alt="value"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Value;
