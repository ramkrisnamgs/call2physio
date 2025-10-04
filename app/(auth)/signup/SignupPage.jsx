"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUser } from "@/lib/firebase/user/write";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Stethoscope, User } from "lucide-react";
export default function SignupPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "physio" || roleParam === "patient") {
      setData((prev) => ({ ...prev, role: roleParam }));
    } else {
      setData((prev) => ({ ...prev, role: "patient" }));
    }
  }, [searchParams]);

  const handleData = (key, value) => setData((p) => ({ ...p, [key]: value }));

  const handleSignup = async () => {
    if (!data.role) return toast.error("Please select a role first");
    setIsLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(cred.user, { displayName: data.name });
      const user = cred.user;
      const userPayload = {
        uid: user.uid,
        displayName: data.name,
        email: data.email,
        photoURL: user.photoURL || "",
        role: data.role,
        isApproved: data.role === "physio" ? false : true,
        status: data.role === "physio" ? "pending" : "active",
        timestampCreated: new Date(),
      };
      await createUser(userPayload);
      toast.success("Signup successful");
      router.push(data.role === "physio" ? "/physio/documents" : "/patient");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full sm:w-[900px] bg-white shadow rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Form Section */}
        <section className="flex-1 flex flex-col py-10 px-8 sm:px-16 justify-center gap-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Create your account
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            className="flex flex-col gap-6"
          >
            {/* Role Selection (hidden if preselected via query) */}
            {!(
              data.role &&
              ["physio", "patient"].includes(data.role) &&
              searchParams.get("role")
            ) && (
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-800">
                  Choose your role:
                </h3>
                <div className="flex gap-3">
                  {["patient", "physio"].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleData("role", role)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
                        data.role === role
                          ? "bg-[#35B6B4] text-white shadow-lg shadow-[#35B6B4]/20"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-[#35B6B4] hover:text-[#35B6B4]"
                      }`}
                    >
                      {role === "physio" ? (
                        <>
                          <Stethoscope className="h-5 w-5" />
                          <span className="font-medium">Physiotherapist</span>
                        </>
                      ) : (
                        <>
                          <User className="h-5 w-5" />
                          <span className="font-medium">Patient</span>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Inputs */}
            <div className="flex flex-col gap-4">
              <input
                value={data.name}
                onChange={(e) => handleData("name", e.target.value)}
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none"
                required
              />
              <input
                value={data.email}
                onChange={(e) => handleData("email", e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none"
                required
              />
              <input
                value={data.password}
                onChange={(e) => handleData("password", e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full px-5 py-3 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <Button
              isLoading={isLoading}
              isDisabled={isLoading}
              type="submit"
              size="lg"
              className="w-full bg-[#35B6B4] px-5 py-3 rounded-lg text-white font-semibold cursor-pointer"
            >
              Sign Up
            </Button>
            <p className="text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-gray-800 hover:text-[#35B6B4]"
              >
                Login here
              </Link>
            </p>
          </form>
        </section>
        {/* Image Section */}
        <div className="flex-1 bg-gray-100 hidden lg:flex">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
