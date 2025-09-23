import { Suspense } from "react";
import AdminSignupPage from "./AdminSignupPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminSignupPage />
    </Suspense>
  );
}








// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { useAuth } from "@/contexts/AuthContext";
// import { Button } from "@heroui/react";
// import Link from "next/link";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { createUser } from "@/lib/firebase/user/write";
// import { auth } from "@/lib/firebase";

// const SECRET_KEY = process.env.NEXT_PUBLIC_ADMIN_SIGNUP_KEY; // keep this secure and long

// export default function AdminSignupPage() {
//   const { user } = useAuth();
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [data, setData] = useState({
//      role: "patient",
//      name: "",
//      email: "",
//      password: ""
//    });
//    const handleData = (key, value) => {
//      setData({
//        ...data,
//        [key]: value,
//      });
//    };
 
//    const handleSignup = async () => {
//      setIsLoading(true);
//      try {
//        const credential = await createUserWithEmailAndPassword(
//          auth,
//          data?.email,
//          data?.password
//        );
//        await updateProfile(credential?.user, {
//          displayName: data?.name,
//        });
//        const user = credential?.user;
 
//        // todo: create user in firestore>user>write
//        await createUser({
//          uid: user?.uid,
//          displayName: data?.name,
//          email: data?.email,
//          photoURL: user?.photoURL,
//          role: "admin"
//        });
 
//        // redirection of user based on their role
//      //   if (role === 'physio') {
//      //     router.push("/physio");
//      //   } else {
//      //     router.push("/patient");
//      //   }      
//        router.push("/admin/dashboard");
//        //  router.push("/account")
//        toast.success("Signup successful");
//      } catch (error) {
//        toast.error(error?.message);
//      } finally {
//        setIsLoading(false);
//      }
//    };

//   useEffect(() => {
//     const key = searchParams.get("key");
//     if (key !== SECRET_KEY) {
//       toast.error("Unauthorized access");
//       router.push("/"); // Redirect if wrong key
//     }
//   }, [searchParams]);

//   return (
//      <main className="max-h-full flex items-center justify-center bg-gray-200">
//       {/* Reuse your Signup form here */}
//       <div className="w-full h-full m-0 sm:m-10 bg-white shadow rounded-lg flex justify-center">
//         <section className="flex-1 flex flex-col py-10 justify-center gap-3">
//           {/* logo */}
//           {/* <div className="logo flex items-center justify-center gap-2">
//             <img src="/call2physio.png" alt="" className="w-10 h-10" />
//             <h1 className="text-2xl font-bold">Call2Physio</h1>
//           </div> */}
//           {/* signup form */}
//           <div className="w-full px-20 flex flex-col gap-10">
//             <div className="w-full flex items-center justify-center gap-4 border-b text-center">
//               <div className="border-gray-300 w-1/4 mx-auto"></div>
//               <div className="flex-1 text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
//                 Admin Signup
//               </div>
//               <div className="border-gray-300 w-1/4 mx-auto"></div>
//             </div>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSignup();
//               }}
//               className="flex flex-col items-center justify-center gap-6"
//             >

//               <div className="flex flex-col gap-4 w-full">
//                 <input
//                   value={data?.name}
//                   onChange={(e) => handleData("name", e.target.value)}
//                   type="name"
//                   placeholder="Name"
//                   name="user-name"
//                   id="user-name"
//                   className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
//                 />

//                 <input
//                   value={data?.email}
//                   onChange={(e) => handleData("email", e.target.value)}
//                   type="email"
//                   placeholder="Email"
//                   name="user-email"
//                   id="user-email"
//                   className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
//                 />

//                 <input
//                   value={data?.password}
//                   onChange={(e) => handleData("password", e.target.value)}
//                   type="password"
//                   placeholder="Password"
//                   name="user-password"
//                   id="user-password"
//                   className="w-full px-5 py-3 bg-gray-100 text-gray-800 placeholder:text-gray-900 border focus:outline-none rounded-lg"
//                 />
//               </div>

//               <Button
//                 isLoading={isLoading}
//                 isDisabled={isLoading}
//                 type="submit"
//                 size="lg"
//                 className="w-full bg-[#35B6B4] px-5 py-3 text-center rounded-lg text-white font-semibold cursor-pointer"
//               >
//                 Sign Up
//               </Button>

//               <div className="flex gap-2 items-center justify-center text-gray-500">
//                 <h4>Already have an account?</h4>
//                 <Link href={`/login`}>
//                   <button className="font-semibold text-sm text-gray-800 cursor-pointer rounded-xl w-full">
//                     Login here
//                   </button>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </section>
//         <div className="flex-1 bg-green-100 text-center hidden lg:flex">
//           <div
//             className="w-full h-full rounded-r-lg bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1630226040750-d934f017f0e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//             }}
//           ></div>
//         </div>
//       </div>
//       {/* On successful signup, save user with role: 'admin' */}
//     </main>
//   );
// }

// http://localhost:3000/signup/admin?key=adminurl
