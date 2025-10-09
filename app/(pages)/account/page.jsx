"use client";

import { useState, useEffect } from "react";
import { updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firebase/user/read";
import { doc, updateDoc } from "firebase/firestore";
import { CircularProgress, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ProfilePhotoUploader from "./components/ProfilePhotoUploader";
import Header from "@/app/components/Header";
import { Edit, Home, Pen, TriangleAlert, User } from "lucide-react";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the validation schema - Adjusted to match the new UI fields and include all previous ones
const accountSchema = z.object({
  firstName: z.string().min(1, "Name is required"), // Corresponds to 'Name' in the UI
  lastName: z.string().optional(), // Corresponds to 'Full Name' in the UI
  photoURL: z.string().optional(),
  email: z.string().email("Invalid email address").optional(), // Email is read-only, make optional in schema
  phone: z.string().optional(), // Corresponds to 'Phone Number'
  location: z.string().optional(), // Corresponds to 'Location'
  postalCode: z.string().optional(), // Corresponds to 'Postal Code'

  // Including other fields from previous requirements
  gender: z.string().optional(),
  dob: z.string().optional(),
  bloodGroup: z.string().optional(),
  timezone: z.string().optional(),
  // Detailed address structure
  address: z
    .object({
      street: z.string().optional(),
      locality: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
      pincode: z.string().optional(),
    })
    .optional(),
  extraPhone: z.string().optional(),
  language: z.string().optional(),
});

export default function AccountPage() {
  const { user } = useAuth();
  const { data: userData, isLoading: userLoading } = useUser({
    uid: user?.uid,
  });
  const router = useRouter();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      photoURL: "",
      email: "",
      phone: "",
      location: "",
      postalCode: "",
      gender: "",
      dob: "",
      bloodGroup: "",
      timezone: "Asia/Kolkata",
      address: {
        // Initialize nested address fields
        street: "",
        locality: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      },
      extraPhone: "",
      language: "English",
    },
  });

  // Watch for form changes
  useEffect(() => {
    setHasChanges(isDirty);
  }, [isDirty]);

  // Handle authentication check
  useEffect(() => {
    if (!userData && !userLoading) {
      toast.error("Please login to access your account");
      // router.push('/login');
    }
  }, [userData, userLoading, router]);

  // Watch firstName, lastName, and location fields for display in profile header
  const watchedFirstName = watch("firstName");
  const watchedLastName = watch("lastName");
  const watchedLocation = watch("location");

  // Populate form with user data when available
  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData.displayName?.split(" ")[0] || "",
        lastName: userData.displayName?.split(" ").slice(1).join(" ") || "",
        photoURL: userData.photoURL || "",
        email: userData.email || "",
        phone: userData.phone || "",
        // Attempt to populate location and postalCode from existing address if they exist
        location: `${userData.address?.city || ""}${
          userData.address?.city && userData.address?.country ? ", " : ""
        }${userData.address?.country || ""}`, // Populate location
        // fees: userData.fees || "",
        postalCode: userData.address?.pincode || "", // Populate postalCode
        gender: userData.gender || "",
        dob: userData.dob || "",
        bloodGroup: userData.bloodGroup || "",
        timezone: userData.timezone || "Asia/Kolkata",
        // Populate detailed address fields
        address: userData.address || {
          street: "",
          locality: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
        },
        extraPhone: userData.extraPhone || "",
        language: userData.language || "English",
      });
    }
  }, [userData, reset]);

  // if user is not Logged in
  if (!userData) {
    return (
      <div>
        <Header />
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="animate-bounce mt-,4">
            <TriangleAlert color="#003A70" size={96} />
            {/* <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-[#35B6B4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg> */}
          </div>
          <div className="text-center space-y-4 max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003A70]">
              You are not Logged In!!
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Please log in to view your account details
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link href="/login" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#35B6B4] hover:bg-[#2a8f8d] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <User size={18} />
                  Login
                </Button>
              </Link>
              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#003A70] hover:bg-[#002a50] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Home size={18} />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ); // Return null while redirecting
  }

  const handleUpdateProfile = async (data) => {
    setIsUpdating(true);
    try {
      // Update Firebase Auth profile (only displayName and photoURL)
      await updateProfile(auth.currentUser, {
        displayName: `${data.firstName} ${data.lastName}`.trim(),
        photoURL: data.photoURL,
      });

      // Prepare data for Firestore update - include all fields from the form state
      const firestoreUpdateData = {
        displayName: `${data.firstName} ${data.lastName}`.trim(),
        photoURL: data.photoURL,
        email: data.email, // Include email in update data if needed, although read-only in UI
        phone: data.phone,
        gender: data.gender,
        dob: data.dob,
        bloodGroup: data.bloodGroup,
        timezone: data.timezone,
        extraPhone: data.extraPhone,
        language: data.language,
        // Include detailed address object directly
        address: data.address,
        // Include location and postalCode as separate fields in Firestore
        location: data.location,
        // fees: data.fees,
        postalCode: data.postalCode,
      };

      // Filter out undefined/null values from the top level before updating Firestore
      const filteredFirestoreUpdateData = Object.fromEntries(
        Object.entries(firestoreUpdateData).filter(
          ([_, value]) => value !== undefined && value !== null
        )
      );

      // Update Firestore user document
      await updateDoc(doc(db, "user", user.uid), filteredFirestoreUpdateData);

      toast.success("Profile updated successfully.");
      setIsEditing(false);
      setHasChanges(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast.error("Failed to update profile: " + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    reset(); // Reset form to original values
    setIsEditing(false);
    setHasChanges(false);
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, userData?.email);
      toast.success("Reset email sent!");
    } catch (err) {
      console.error("Could not send email:", err);
      toast.error("Could not send email: " + err.message);
    }
  };

  if (userLoading) {
    return (
      <div className="flex items-center justify-center p-10">
        <CircularProgress />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Profile Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-10 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <ProfilePhotoUploader
                  className=""
                  currentPhoto={userData?.photoURL}
                  onUpload={(url) => setValue("photoURL", url)}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-800 hidden md:block">
                    {`${watchedFirstName} ${watchedLastName}`.trim() ||
                      userData?.displayName}
                  </h2>
                  <h2 className="text-2xl font-bold text-gray-800 md:hidden">
                    {watchedFirstName || userData?.displayName?.split(" ")[0]}
                  </h2>
                  <p className="px-5 py-1 flex items-center justify-center text-sm font-medium bg-[#35B6B4]/10 text-[#003A70] rounded-full">
                    {userData?.role}
                  </p>
                </div>
                <div className="flex gap-4">
                  {/* <p className="px-5 py-1 flex items-center justify-center text-sm font-medium bg-[#35B6B4]/10 text-[#003A70] rounded-md">
                    {userData?.role}
                  </p> */}
                  <p className="text-gray-600">
                    {watchedLocation ||
                    userData?.address?.city ||
                    userData?.address?.country
                      ? `${userData?.address?.city || ""}${
                          userData?.address?.city && userData?.address?.country
                            ? ", "
                            : ""
                        }${userData?.address?.country || ""}`
                      : "-"}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:max-w-fit flex flex-col md:flex-row items-center justify-end gap-4">
              <Link
                className="w-full"
                href={
                  userData?.role === "physio"
                    ? "/physio"
                    : userData?.role === "admin"
                    ? "/admin"
                    : "/patient"
                }
              >
                <Button
                  // onPress={handlePasswordReset}
                  className="w-full border border-[#35B6B4] text-[#003A70] px-6 py-2 rounded-lg hover:bg-[#35B6B4] hover:text-white transition-all ease-in-out duration-300 cursor-pointer"
                >
                  Dashboard
                </Button>
              </Link>
              {isEditing ? (
                <>
                  <Button
                    onPress={handleSubmit(handleUpdateProfile)}
                    isLoading={isUpdating}
                    className="w-full bg-[#003A70] text-white px-6 py-2 rounded-lg hover:bg-[#002a50] transition-colors cursor-pointer"
                  >
                    Save Changes
                  </Button>
                  <Button
                    onPress={handleCancelEdit}
                    className="w-full bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onPress={() => setIsEditing(true)}
                  className="w-full bg-[#003A70] text-white px-6 py-2 rounded-lg hover:bg-[#002a50] transition-colors cursor-pointer"
                >
                  Edit Profile
                </Button>
              )}
              <Button
                onPress={handlePasswordReset}
                className="w-full bg-[#35B6B4] text-white px-6 py-2 rounded-lg hover:bg-[#2a8f8d] transition-colors"
              >
                Reset Password
              </Button>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <form
          onSubmit={handleSubmit(handleUpdateProfile)}
          className="space-y-8"
        >
          {/* Basic Information Section */}
          <div className="bg-white rounded-lg shadow-sm p-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("firstName")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {watchedFirstName ||
                      userData?.displayName?.split(" ")[0] ||
                      "-"}
                  </p>
                )}
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("lastName")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {watchedLastName ||
                      userData?.displayName?.split(" ").slice(1).join(" ") ||
                      "-"}
                  </p>
                )}
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <p className="px-4 py-2 text-gray-800">
                  {userData?.email || "-"}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("phone")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.phone || "-"}
                  </p>
                )}
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="e.g. New York, USA"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("location")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {watchedLocation ||
                      `${userData?.address?.city || ""}${
                        userData?.address?.city && userData?.address?.country
                          ? ", "
                          : ""
                      }${userData?.address?.country || ""}` ||
                      "-"}
                  </p>
                )}
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    {errors.location.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.postalCode ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("postalCode")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.pincode || "-"}
                  </p>
                )}
                {errors.postalCode && (
                  <span className="text-red-500 text-sm">
                    {errors.postalCode.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="bg-white rounded-lg shadow-sm p-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Gender
                </label>
                {isEditing ? (
                  <select
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.gender ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("gender")}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.gender || "-"}
                  </p>
                )}
                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    {errors.gender.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.dob ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("dob")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.dob || "-"}
                  </p>
                )}
                {errors.dob && (
                  <span className="text-red-500 text-sm">
                    {errors.dob.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                {isEditing ? (
                  <select
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.bloodGroup ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("bloodGroup")}
                  >
                    <option value="">Select</option>
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                      (g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      )
                    )}
                  </select>
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.bloodGroup || "-"}
                  </p>
                )}
                {errors.bloodGroup && (
                  <span className="text-red-500 text-sm">
                    {errors.bloodGroup.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Timezone
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.timezone ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("timezone")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.timezone || "-"}
                  </p>
                )}
                {errors.timezone && (
                  <span className="text-red-500 text-sm">
                    {errors.timezone.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b">
              Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Alternate Number
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Alternate number"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.extraPhone ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("extraPhone")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.extraPhone || "-"}
                  </p>
                )}
                {errors.extraPhone && (
                  <span className="text-red-500 text-sm">
                    {errors.extraPhone.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Language
                </label>
                {isEditing ? (
                  <select
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.language ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("language")}
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.language || "-"}
                  </p>
                )}
                {errors.language && (
                  <span className="text-red-500 text-sm">
                    {errors.language.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Address Section */}
          <div className="bg-white rounded-lg shadow-sm p-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b">
              Detailed Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Street Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="House No./Street"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.street
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.street")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.street || "-"}
                  </p>
                )}
                {errors.address?.street && (
                  <span className="text-red-500 text-sm">
                    {errors.address.street.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Locality
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Locality"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.locality
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.locality")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.locality || "-"}
                  </p>
                )}
                {errors.address?.locality && (
                  <span className="text-red-500 text-sm">
                    {errors.address.locality.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="City"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.city
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.city")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.city || "-"}
                  </p>
                )}
                {errors.address?.city && (
                  <span className="text-red-500 text-sm">
                    {errors.address.city.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  State
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="State"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.state
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.state")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.state || "-"}
                  </p>
                )}
                {errors.address?.state && (
                  <span className="text-red-500 text-sm">
                    {errors.address.state.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Country
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Country"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.country
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.country")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.country || "-"}
                  </p>
                )}
                {errors.address?.country && (
                  <span className="text-red-500 text-sm">
                    {errors.address.country.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Pincode
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Pincode"
                    className={`border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#003A70] focus:border-transparent ${
                      errors.address?.pincode
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register("address.pincode")}
                  />
                ) : (
                  <p className="px-4 py-2 text-gray-800">
                    {userData?.address?.pincode || "-"}
                  </p>
                )}
                {errors.address?.pincode && (
                  <span className="text-red-500 text-sm">
                    {errors.address.pincode.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
