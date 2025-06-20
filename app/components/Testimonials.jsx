"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const testimonialList = [
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    name: "Priya Sharma",
    position: "Patient with Knee Injury",
    content:
      "After my knee surgery, I was worried about my recovery. But the team at Call2Physio made me feel so comfortable and confident. Their personalized treatment plan and constant support helped me get back on my feet faster than I expected. I'm truly grateful for their care.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Rajesh Patel",
    position: "Patient with Back Pain",
    content:
      "Living with chronic back pain was affecting every aspect of my life. Call2Physio's patient-centered approach and their focus on understanding my specific needs made all the difference. I can now enjoy my daily activities pain-free.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
    name: "Ananya Reddy",
    position: "Patient with Sports Injury",
    content:
      "The attention to detail and personalized care I received at Call2Physio was exceptional. They didn't just treat my injury; they helped me understand my condition and taught me how to prevent future issues. Their commitment to patient education is remarkable.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
    name: "Vikram Singh",
    position: "Patient with Shoulder Injury",
    content:
      "I was skeptical about physiotherapy until I met the team at Call2Physio. Their patient-first approach and the way they explained every step of my treatment made me feel involved in my recovery. The results have been life-changing.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Meera Kapoor",
    position: "Patient with Post-Surgery Rehabilitation",
    content:
      "After my hip replacement surgery, I needed comprehensive rehabilitation. Call2Physio's team was there every step of the way, adjusting my treatment plan based on my progress and comfort level. Their patient-centered care made my recovery journey much smoother.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    name: "Arjun Mehta",
    position: "Patient with Neck Pain",
    content:
      "The personalized attention and care I received at Call2Physio was outstanding. They took the time to understand my lifestyle and work demands, creating a treatment plan that fit perfectly into my daily routine. Their patient-focused approach is truly commendable.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Sneha Gupta",
    position: "Patient with Arthritis",
    content:
      "Managing arthritis was challenging until I found Call2Physio. Their combination of traditional and modern treatment approaches has significantly improved my mobility and reduced my pain. The therapists are incredibly knowledgeable and supportive.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
    name: "Rahul Verma",
    position: "Sports Injury Recovery",
    content:
      "As a professional athlete, I needed specialized care for my sports injury. Call2Physio's sports rehabilitation program was exactly what I needed. Their expertise in sports medicine helped me return to my sport stronger than before.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    name: "Neha Joshi",
    position: "Post-Pregnancy Recovery",
    content:
      "The postpartum care I received at Call2Physio was exceptional. They understood the unique challenges of post-pregnancy recovery and provided gentle, effective treatment that helped me regain my strength and confidence.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Amit Kumar",
    position: "Stroke Rehabilitation",
    content:
      "After my stroke, I was worried about my recovery. Call2Physio's neurological rehabilitation program has been instrumental in my journey. Their therapists are patient, encouraging, and truly dedicated to their patients' progress.",
  },
];

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-0 -left-8 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#1b5c98"
        strokeOpacity="0.6"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-0 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#1b5c98"
        fillOpacity="0.25"
      />
    </svg>
  );
}

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="dark px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-16 lg:py-20 bg-[#003A70] text-white relative z-[1]">
      <ShapeOne className="overflow-hidden"/>
      <ShapeTwo />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center justify-between mb-8 md:mb-10 lg:mb-12">
          <div className="md:col-span-6 lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold leading-normal text-white">
              Believe in what our clients say
            </h2>
          </div>
          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-base md:text-lg leading-[1.7] opacity-80 text-white">
              Discover how our personalized care and expert treatment plans have
              helped patients achieve their recovery goals and improve their
              quality of life.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-16 lg:mt-20 relative">
          <div className="absolute right-0 -top-12 md:-top-15 mr-5 md:mr-0 z-10 flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="!static !w-8 !h-8 md:!w-10 md:!h-10 !m-0 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6 text-[#1b5c98]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="!static !w-8 !h-8 md:!w-10 md:!h-10 !m-0 bg-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6 text-[#1b5c98]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

         
         <div className="px-3 md:px-0">
         <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            className="testimonial-swiper"
          >
            {testimonialList.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white dark:bg-[#1b5c98] shadow-2xl h-[300px] md:h-[350px] p-4 sm:p-6 xl:p-10 rounded-lg hover:shadow-3xl transition-all duration-300 flex flex-col">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="mr-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1b5c98] object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm mb-2 text-white opacity-80">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base opacity-75 mb-2 text-white flex-grow">
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
         </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 40px;
        }
        .testimonial-swiper .swiper-scrollbar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .testimonial-swiper .swiper-scrollbar-drag {
          background: #35b6b4;
          border-radius: 3px;
          box-shadow: 0 0 10px rgba(53, 182, 180, 0.5);
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-scrollbar-drag:hover {
          background: #2a8f8d;
          box-shadow: 0 0 15px rgba(53, 182, 180, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
