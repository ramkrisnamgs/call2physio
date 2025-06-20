"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "back.out(1.5)",
      });
    };

    const handlePointerHover = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    };

    const handlePointerLeave = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Target elements that show pointer
    const pointerElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select");

    pointerElements.forEach((el) => {
      el.addEventListener("mouseenter", handlePointerHover);
      el.addEventListener("mouseleave", handlePointerLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      pointerElements.forEach((el) => {
        el.removeEventListener("mouseenter", handlePointerHover);
        el.removeEventListener("mouseleave", handlePointerLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Invisible Overlay to prevent cursor glitches */}
      {/* <div className="fixed inset-0 z-[9999] pointer-events-auto" /> */}

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-[-4px] left-[-4px] w-3 h-3 rounded-full pointer-events-none z-[9998] bg-[#003A70] border-2 border-[#35B6B4]"
      />
    </>
  );
}
