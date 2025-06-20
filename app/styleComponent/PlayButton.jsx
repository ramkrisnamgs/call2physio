"use client"

import { useState, useRef, useEffect } from 'react';

const PlayButton = ({ videoUrl = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {/* Play Button */}
      <button
        onClick={toggleVideo}
        className="group relative z-10 w-10 h-10 flex items-center justify-center cursor-pointer"
        aria-label="Play video"
      >
        {/* Outer pulse circle (animated) */}
        <div className="absolute inset-0 rounded-full bg-[#068EE5] opacity-100 group-hover:opacity-90 animate-ping-slow" />
        
        {/* Inner circle */}
        <div className="absolute inset-0 rounded-full bg-[#1B5C98] transition-all duration-300 group-hover:bg-[#1B5C98]/60" />
        
        {/* Play triangle */}
        <div className="relative z-10 w-0 h-0 border-l-[12px] border-t-[8px] border-b-[8px] border-solid border-l-white border-t-transparent border-b-transparent ml-1" />
      </button>

      {/* Video Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={toggleVideo}
          ref={videoRef}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-3xl text-white hover:text-[#00a8ff] transition-colors"
            onClick={toggleVideo}
            aria-label="Close video"
          >
            &times;
          </button>
          
          {/* Video iframe */}
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3"
              src={`${videoUrl}?autoplay=1`}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded video"
            />
          </div>
        </div>
      )}

      {/* Custom animation */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.7);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PlayButton;