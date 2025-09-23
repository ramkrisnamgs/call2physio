"use client";

import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import PhysioGrid from "./components/PhysioGrid";
import StatsSection from "./components/StatsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BookingForm from "./[physioId]/components/BookingForm";
import PhysioCard from "./components/PhysioCard";
import { getApprovedPhysios } from "@/lib/firebase/physio/read";

export default function FindPhysioPage() {
  const [filters, setFilters] = useState({
    location: "",
    specializations: [],
    visitPreference: "",
    pricing: "",
    rating: "",
    experience: "",
  });
  const [physios, setPhysios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPhysio, setSelectedPhysio] = useState(null);

  // Fetch approved physios from Firestore
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getApprovedPhysios();
        setPhysios(data);
      } catch (error) {
        console.log("Failed to fetch physios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Booking Handlers
  const handleBookAppointment = (physio) => {
    setSelectedPhysio(physio);
  };

  const closeBookingForm = () => {
    setSelectedPhysio(null);
  };

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
          {/* Filter Bar */}
          <FilterBar filters={filters} setFilters={setFilters} />

          {/* Physio Grid */}
          <div className="mt-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-lg font-medium text-gray-600">
                  Finding the best physios for you
                  <span className="animate-pulse">...</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">This may take a moment</p>
              </div>
            ) : (
              <PhysioGrid physios={physios} onBook={handleBookAppointment} />
            )}
          </div>

          {/* Stats Section */}
          <StatsSection />
        </div>
      </main>

      <Footer />

      {/* Booking Modal */}
      {selectedPhysio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={closeBookingForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              X
            </button>
            <BookingForm physioId={selectedPhysio?.uid} onSuccess={closeBookingForm} onClose={closeBookingForm} />
          </div>
        </div>
      )}
    </div>
  );
}

// export default function FindPhysioPage() {
//   // const [loading, setLoading] = useState(false);
//   const [filters, setFilters] = useState({
//     location: "",
//     specializations: [],
//     visitPreference: "",
//     pricing: "",
//     rating: "",
//     experience: "",
//   });

//   const [sort, setSort] = useState("relevance");
//   const [selectedPhysio, setSelectedPhysio] = useState(null);

//   const handleBookAppointment = (physio) => {
//     setSelectedPhysio(physio);
//   };

//   const closeBookingForm = () => {
//     setSelectedPhysio(null);
//   };

//   return (
//     <div>
//       <Header />
//       <main className="min-h-screen bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
//           {/* Filter Bar */}
//           <FilterBar filters={filters} setFilters={setFilters} />

//           {/* Physio Grid */}
//           <div className="mt-8">
//             <PhysioGrid filters={filters} sort={sort} onBook={handleBookAppointment} />
//           </div>

//           {/* Stats Section */}
//           <StatsSection />
//           {/* {<PhysioCard  physio={physio} key={physio?.uid} />} */}

//           {/* {loading ? (
//             <p className="text-gray-500">Loading Physio's...</p>
//           ) : physio.length === 0 ? (
//             <p>No Physio found</p>
//           ) : (
//             <div className="grid gap-6 md:grid-cols-2">
//               {physio.map((physio) => {
//                 <PhysioCard key={physio.uid} physio={physio} />;
//               })}
//             </div>
//           )} */}
//         </div>
//       </main>
//       <Footer />

//       {/* Booking Form */}
//       {selectedPhysio && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//             <button
//               onClick={closeBookingForm}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black"
//             >
//               X
//             </button>
//             <BookingForm
//               physioId={selectedPhysio?.uid}
//               physioName={selectedPhysio?.displayName}
//               onSuccess={() => {
//                 closeBookingForm();
//               }}
//               onClose={closeBookingForm}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
