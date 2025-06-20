"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const servicesData = [
  {
    id: 1,
    category: "Musculo Therapy",
    title: "Yoga-Based Rehabilitation",
    description: "Traditional Indian yoga techniques combined with modern physiotherapy for holistic healing.",
    date: "March 15, 2024",
    location: "Mumbai, Maharashtra",
    image: "/service1.jpg",
  },
  {
    id: 2,
    category: "Musculo Therapy",
    title: "Ayurvedic Massage Therapy",
    description: "Ancient Ayurvedic techniques for muscle relaxation and pain relief.",
    date: "March 20, 2024",
    location: "Kochi, Kerala",
    image: "/service2.jpg",
  },
  {
    id: 3,
    category: "Neuro Therapy",
    title: "Stroke Rehabilitation",
    description: "Advanced neurological therapy incorporating traditional Indian healing practices.",
    date: "March 25, 2024",
    location: "Bangalore, Karnataka",
    image: "/service3.jpg",
  },
  {
    id: 4,
    category: "Musculo Therapy",
    title: "Sports Injury Care",
    description: "Specialized treatment for cricket and other sports-related injuries.",
    date: "April 1, 2024",
    location: "Delhi, NCR",
    image: "/service4.jpg",
  },
  {
    id: 5,
    category: "Neuro Therapy",
    title: "Parkinson's Disease Management",
    description: "Comprehensive therapy combining modern techniques with traditional Indian medicine.",
    date: "April 5, 2024",
    location: "Chennai, Tamil Nadu",
    image: "/service3.jpg",
  },
  {
    id: 6,
    category: "Musculo Therapy",
    title: "Post-Surgical Recovery",
    description: "Specialized rehabilitation programs for post-operative patients.",
    date: "April 10, 2024",
    location: "Hyderabad, Telangana",
    image: "/service2.jpg",
  },
  {
    id: 7,
    category: "Neuro Therapy",
    title: "Cerebral Palsy Support",
    description: "Integrated therapy programs for children with cerebral palsy.",
    date: "April 15, 2024",
    location: "Kolkata, West Bengal",
    image: "/service1.jpg",
  },
  {
    id: 8,
    category: "Musculo Therapy",
    title: "Arthritis Management",
    description: "Traditional and modern approaches to managing arthritis pain and mobility.",
    date: "April 20, 2024",
    location: "Pune, Maharashtra",
    image: "/service2.jpg",
  },
  {
    id: 9,
    category: "Neuro Therapy",
    title: "Multiple Sclerosis Care",
    description: "Comprehensive neurological rehabilitation for MS patients.",
    date: "April 25, 2024",
    location: "Ahmedabad, Gujarat",
    image: "/service3.jpg",
  },
  // Add more cards as needed
];

export default function Services() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-40 text-center md:text-start mb-8 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-900 animate-slide-up">
          Highlight The Specialized Expertise Of Therapists
        </h2>
        <p className="max-w-2xl text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Physiotherapists are health care professionals who specialize in optimizing physical function and mobility. 
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ 
          draggable: true,
          el: '.swiper-scrollbar',
          hide: false,
          color: '#35B6B4',
          dragColor: '#35B6B4',
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        className="px-4 md:px-10 py-6 md:py-10 animate-fade-in relative"
        style={{ animationDelay: '0.4s' }}
      >
        {servicesData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div 
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Category Label */}
              <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transform group-hover:scale-105 transition-transform duration-300">
                {item.category}
              </span>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#35B6B4] via-teal-400/70 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out p-4">
                <p className="text-sm text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.date} — {item.location}
                </p>
                <h3 className="text-lg font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{ transitionDelay: '0.1s' }}>
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{ transitionDelay: '0.2s' }}>
                  {item.description}
                </p>
              </div>
            </div>
            <div className="p-5"></div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white/80 !rounded-full !shadow-lg hover:!bg-[#35B6B4] hover:!text-white transition-all duration-300 after:!text-2xl after:!text-[#35B6B4] hover:after:!text-white"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/80 !rounded-full !shadow-lg hover:!bg-[#35B6B4] hover:!text-white transition-all duration-300 after:!text-2xl after:!text-[#35B6B4] hover:after:!text-white"></div>
        
        {/* Custom Scrollbar */}
        <div className="swiper-scrollbar !h-2 !bg-gray-200 !rounded-full mt-4"></div>
      </Swiper>
    </section>
  );
}
