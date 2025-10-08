"use client";

import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      // return;
    }

    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login`,
      });
      toast.success("Password reset email sent");
      setEmail("");
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
      if (error.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="h-full flex items-center justify-center bg-white">
      <div className="w-full h-full m-0 sm:m-10 bg-white rounded-lg flex justify-center">
        <section className="flex-1 flex flex-col py-10 justify-center gap-3">
          <div className="w-full px-20 flex flex-col gap-5">
            {/* Header */}
            <div className="w-full flex items-center justify-center gap-4 border-b text-center">
              <div className="border-gray-300 w-1/4 mx-auto"></div>
              <div className="flex-1 text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Reset Your Password
              </div>
              <div className="border-gray-300 w-1/4 mx-auto"></div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleReset}
                className="flex flex-col items-center justify-center gap-6"
              >
                <p className="text-gray-600 text-center text-sm">
                  Enter your registered email and we'll send you a password
                  reset link.
                </p>
                <div className="flex flex-col gap-4 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-500 border focus:outline-none rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-5 py-3 text-white text-center font-semibold rounded-lg transition-all ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#35B6B4] hover:bg-[#2D9E9C]"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>

                <div className="flex gap-2 text-gray-500 mt-2">
                  <h4>Remembered your password?</h4>
                  <Link href="/login">
                    <button className="font-semibold text-sm text-gray-700 hover:text-[#35B6B4] cursor-pointer rounded-xl w-full">
                      Login here
                    </button>
                  </Link>
                </div>
              </form>
          </div>
        </section>

        {/* Right side Image portion */}
        <div className="flex-1 text-center hidden lg:flex">
          <div
            className="w-full h-full rounded-r-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </main>
    // <main className="h-full flex items-center justify-center bg-white">
    //   <div className="w-full h-full max-w-md bg-white rounded-lg p-8">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
    //       Forgot Password
    //     </h2>
    //     <p className="text-sm text-gray-600 mb-6 text-center">
    //       Enter your registered email and we'll send you a password reset link.
    //     </p>

    //     <form onSubmit={handleReset} className="space-y-5">
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Enter your email"
    //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#35B6B4]"
    //       />
    //       <button
    //         type="submit"
    //         disabled={isLoading}
    //         className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${
    //           isLoading
    //             ? "bg-gray-400 cursor-not-allowed"
    //             : "bg-[#35B6B4] hover:bg-[#2D9E9C]"
    //         }`}
    //       >
    //         {isLoading ? "Sending..." : "Send Reset Link"}
    //       </button>
    //     </form>

    //     <div className="text-center mt-6">
    //       <Link href="/login" className="text-[#35B6B4]">
    //         Back to Login
    //       </Link>
    //     </div>
    //   </div>
    // </main>
  );
};

export default ForgotPasswordPage;
