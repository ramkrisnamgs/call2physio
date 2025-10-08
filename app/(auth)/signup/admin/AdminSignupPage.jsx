// app/(auth)/signup/admin/AdminSignupPage.jsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@heroui/react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUser } from "@/lib/firebase/user/write";
import { auth } from "@/lib/firebase";
import { Eye, EyeOff } from "lucide-react";

const SECRET_KEY = process.env.NEXT_PUBLIC_ADMIN_SIGNUP_KEY; // keep this secure and long

export default function AdminSignupPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [data, setData] = useState({
    role: "patient",
    name: "",
    email: "",
    password: "",
  });

  const handleData = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(credential.user, {
        displayName: data.name,
      });

      const user = credential.user;

      await createUser({
        uid: user.uid,
        displayName: data.name,
        email: data.email,
        photoURL: user.photoURL,
        role: "admin",
      });

      router.push("/admin/dashboard");
      toast.success("Signup successful");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const key = searchParams.get("key");
    if (key !== SECRET_KEY) {
      toast.error("Unauthorized access");
      router.push("/"); // Redirect if wrong key
    }
  }, [searchParams, router]);

  return (
    <main className="max-h-full flex items-center justify-center bg-gray-200">
      <div className="w-full h-full m-0 sm:m-10 bg-white shadow rounded-lg flex justify-center">
        <section className="flex-1 flex flex-col py-10 justify-center gap-3">
          <div className="w-full px-20 flex flex-col gap-10">
            <div className="w-full flex items-center justify-center gap-4 border-b text-center">
              <div className="border-gray-300 w-1/4 mx-auto"></div>
              <div className="flex-1 text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Admin Signup
              </div>
              <div className="border-gray-300 w-1/4 mx-auto"></div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
              }}
              className="flex flex-col items-center justify-center gap-6"
            >
              <div className="flex flex-col gap-4 w-full">
                <input
                  value={data.name}
                  onChange={(e) => handleData("name", e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
                />

                <input
                  value={data.email}
                  onChange={(e) => handleData("email", e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
                />

                <div className="relative">
                <input
                  value={data.password}
                  onChange={(e) => handleData("password", e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <Eye size={20} className="text-gray-600" />
                    ) : (
                      <EyeOff size={20} className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                isLoading={isLoading}
                isDisabled={isLoading}
                type="submit"
                size="lg"
                className="w-full bg-[#35B6B4] px-5 py-3 text-center rounded-lg text-white font-semibold cursor-pointer"
              >
                Sign Up
              </Button>

              <div className="flex gap-2 items-center justify-center text-gray-500">
                <h4>Already have an account?</h4>
                <Link href={`/login`}>
                  <button className="font-semibold text-sm text-gray-700 hover:text-[#35B6B4] cursor-pointer rounded-xl w-full">
                    Login here
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="w-full h-full rounded-r-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}


// http://localhost:3000/signup/admin?key=adminurl
