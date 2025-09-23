"use client";

import { useEffect, useState } from "react";
// import { useAuth } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Button } from "@heroui/react";
import { createUser } from "@/lib/firebase/user/write";
import Link from "next/link";

export default function Page() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [data, setData] = useState({});
  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data?.email, data?.password);
      // console.log(data);
      // console.log("data role:" & data?.role);
      if (data?.role === "physio") {
        router.push("/physio");
      } else if (data?.role === "patient") {
        router.push("/patient");
      } else if (data?.role === "admin") {
        router.push("/admin/dashboard");
      }
      // router.push("/");
      toast.success("Login successful");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/account");
    }
  }, [user]);

  return (
    <main className="max-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full h-full m-0 sm:m-10 bg-white shadow rounded-lg flex justify-center">
        <section className="flex-1 flex flex-col py-10 justify-center gap-3">
          {/* logo */}
          {/* <div className="logo flex items-center justify-center gap-2">
            <img src="/call2physio.png" alt="" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Call2Physio</h1>
          </div> */}
          {/* login form */}
          <div className="w-full px-20 flex flex-col gap-10">
            <div className="w-full flex items-center justify-center gap-4 border-b text-center">
              <div className="border-gray-300 w-1/4 mx-auto"></div>
              <div className="flex-1 text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Login with E-mail
              </div>
              <div className="border-gray-300 w-1/4 mx-auto"></div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  name="user-email"
                  id="user-email"
                  value={data?.email}
                  onChange={(e) => handleData("email", e.target.value)}
                  className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  value={data?.password}
                  onChange={(e) => handleData("password", e.target.value)}
                  className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
                />
              </div>
              <Button
                isLoading={isLoading}
                isDisabled={isLoading}
                type="submit"
                size="lg"
                className="w-full bg-[#35B6B4] px-5 py-3 text-center rounded-lg text-white font-semibold cursor-pointer"
              >
                Login
              </Button>

              <div className="flex justify-between w-full">
                <Link href={`/forget-password`}>
                  <button className="font-semibold text-sm text-gray-800 cursor-pointer">
                    Forget Password?
                  </button>
                </Link>
              </div>

              {/* <SignInWithGoogleComponent /> */}

              <div className="flex gap-2 items-center justify-center text-gray-500">
                <h4>Dont’t have an account?</h4>
                <Link href={`/signup`}>
                  <button className="font-semibold text-sm text-gray-800 cursor-pointer rounded-xl w-full">
                    Sign up here
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
                "url('https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}

function SignInWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const credential = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = credential?.user;
      await createUser({
        uid: user?.uid,
        displayName: data?.displayName,
        photoURL: user?.photoURL,
      });
    } catch (error) {
      toast.error(error?.message);
    }

    setIsLoading(false);
  };

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      onPress={handleLogin}
      className="bg-gray-300 px-5 py-6 flex items-center justify-center rounded-xl text-gray-700 font-semibold w-full cursor-pointer"
    >
      <img
        src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
        alt="google logo"
        className="h-4"
      />
      Sign in with Google
    </Button>
  );
}
