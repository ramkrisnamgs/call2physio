import CircularText from '@/app/styleComponent/CircularText';
import CountUp from '@/app/styleComponent/CountUp';
import PlayButton from '@/app/styleComponent/PlayButton';
import { Avatar, AvatarGroup, Rating } from '@mui/material';
import { Plus } from 'lucide-react';
import React from 'react'

const ServicesHero = () => {
     return (
       <div className="relative w-full h-full text-black">
         <div className="px-4 sm:px-8 md:px-12 lg:px-20 mb-10 md:mb-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
           {/* Hero Text */}
           <div className="flex-1 flex flex-col items-start justify-center gap-4 h-full w-full">
             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
               Live your best life and unlock your full potential for a brighter future.
             </h1>
             <p className="text-sm sm:text-base md:text-md w-full sm:w-5/6 md:w-3/4">
               Transforming physiotherapy with AI-powered diagnosis and personalized treatment pathways --- delivering effective pain-relief & mobility care across Clinics, Homes & Tele-Rehab.
             </p>
             <div className="border-b border-gray-400 w-2/3 sm:w-1/2"></div>
             <div className="flex flex-wrap items-center gap-4 w-full">
               <AvatarGroup max={4}>
                 <Avatar
                   sx={{ width: 30, height: 30 }}
                   src="/testimonial-1.jpg"
                   alt="Avatar"
                 />
                 <Avatar
                   sx={{ width: 30, height: 30 }}
                   src="/testimonial-2.jpg"
                   alt="Avatar"
                 />
                 <Avatar
                   sx={{ width: 30, height: 30 }}
                   src="/testimonial-3.jpg"
                   alt="Avatar"
                 />
                 <Avatar
                   sx={{ width: 30, height: 30 }}
                   src="/testimonial-4.jpg"
                   alt="Avatar"
                 />
               </AvatarGroup>
               <div className="hidden sm:block border border-gray-400 h-8"></div>
               <div className="flex flex-col items-center">
                 <Rating size="small" name="read-only" value={5} readOnly />
                 <p className="text-xs sm:text-sm text-gray-400">
                   Total Reviews
                   <span className="text-white font-medium">{" (4.8 of 5)"}</span>
                 </p>
               </div>
               <div className="flex items-center justify-center ml-0 sm:ml-5">
                 <PlayButton videoUrl="https://www.youtube.com/embed/your-video-id" />
               </div>
             </div>
           </div>
           {/* Hero Image */}
           <div className="relative flex-1 flex flex-col items-center justify-center py-6 sm:py-10 w-full max-w-full h-full min-w-0">
             <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1b5c98] to-[#003A70] rounded-md relative overflow-hidden min-h-[250px] sm:min-h-[350px]">
               <div className="absolute z-10 top-2 left-1/2 transform -translate-x-1/2 sm:top-6 sm:left-2/3 sm:-translate-x-1/2">
                 <CircularText
                   text="MOBILITY*REHAB*TREATMENT*"
                   onHover="speedUp"
                   spinDuration={30}
                   className="custom-class"
                 />
               </div>
               <div className="relative w-3/4 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-3/4 h-auto z-20">
                 <img
                   src="/hero_avatar.png"
                   alt="Hero_Image"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="w-full">
           <AcheivementBar className="w-full" />
         </div>
       </div>
     );
}

export default ServicesHero


function AcheivementBar() {
     return (
       <div className="px-4 py-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 bg-[#003A70] border border-[#003A70] text-white w-full">
         {/* Num. of Professionals */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-3xl md:text-4xl w-full md:w-1/3">
           <div className="flex items-center justify-center gap-1">
             <CountUp
               from={0}
               to={647}
               separator=","
               direction="up"
               duration={1}
               className="count-up-text"
             />
             <Plus size={20} />
           </div>
           <div className="flex flex-col items-center sm:items-start justify-center gap-1 w-full">
             <h1 className="text-base md:text-lg font-bold text-center sm:text-left">Advanced Clinics</h1>
             {/* <p className="text-sm md:text-lg">Modern Infrastructure, Latest Technology & Top Physiotherapy Experts</p> */}
           </div>
         </div>
         {/* Num. of Clinics */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-3xl md:text-4xl w-full md:w-1/3">
           <div className="flex items-center justify-center gap-1">
             <CountUp
               from={0}
               to={85}
               separator=","
               direction="up"
               duration={1}
               className="count-up-text"
             />
             <Plus size={20} />
           </div>
           <div className="flex flex-col items-center sm:items-start justify-center gap-1 w-full">
             <h1 className="text-base md:text-lg font-bold text-center sm:text-left">Professional Home Care</h1>
             {/* <p className="text-sm md:text-lg">Physiotherapy at home with expert oversight & Strong quality checks</p> */}
           </div>
         </div>
         {/* Num. of Patients */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-3xl md:text-4xl w-full md:w-1/3">
           <div className="flex items-center justify-center gap-1">
             <CountUp
               from={0}
               to={3500}
               separator=","
               direction="up"
               duration={1}
               className="count-up-text"
             />
             <Plus size={20} />
           </div>
           <div className="flex flex-col items-center sm:items-start justify-center gap-1 w-full">
             <h1 className="text-base md:text-lg font-bold text-center sm:text-left">Tele / Remote Rehab</h1>
             {/* <p className="text-sm md:text-lg">Personalized Physio exercises at home with Continuous guidance & mentoring</p> */}
           </div>
         </div>
       </div>
     );
   }