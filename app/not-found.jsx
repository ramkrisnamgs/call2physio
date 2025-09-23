"use client"; // only for App Router
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Button } from "@heroui/react";

export default function NotFoundPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyeStyle = {
    background: "white",
    borderRadius: "50%",
    border: "2px solid black",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 20px",
  };

  const pupilStyle = {
    background: "black",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    position: "relative",
  };

  return (
    <>
    <Header />
    <div
      style={{
        backgroundColor: "#fff",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Eyes */}
      <div style={{ display: "flex", marginBottom: "40px" }}>
        {[0, 1].map((eye) => (
          <div key={eye} style={eyeStyle}>
            <motion.div
              style={pupilStyle}
              animate={{
                x: position.x * 60, // limit movement
                y: position.y * 60,
              }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
            />
          </div>
        ))}
      </div>

      {/* Text */}
      <h1 style={{ fontSize: "2.5rem", fontFamily: "serif" }}>
        404, Page Not Found
      </h1>

      {/* Button */}
      <Link href="/">
        <motion.button
          className="group relative px-8 py-4 mt-12 text-lg font-medium text-white bg-gradient-to-r from-[#003A70] to-[#0056a4] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
          style={{
            borderRadius: "999px",
            transform: "perspective(100px) rotateX(2deg)",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
          }}
          whileHover={{
            scale: 1.05,
            transform: "perspective(100px) rotateX(-2deg)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Take Me Home</span>
          <div 
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              borderRadius: "inherit"
            }}
          />
        </motion.button>
      </Link>
    </div>
    <Footer />
    </>
  );
}
