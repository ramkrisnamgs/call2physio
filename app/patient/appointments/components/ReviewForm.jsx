"use client";

import { useState } from "react";
import { createReview } from "@/lib/firebase/reviews/write";

export default function ReviewForm({ appointmentId, physioId, onClose }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createReview({
        appointmentId,
        physioId,
        rating,
        comment,
        createdAt: new Date(),
      });
      onClose();
    } catch (err) {
      console.error("Failed to submit review", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 border-t pt-3 space-y-2">
      <label className="block text-sm font-medium">Rating</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded px-2 py-1 text-sm w-full"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>
            {r} Stars
          </option>
        ))}
      </select>

      <label className="block text-sm font-medium">Comment</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded px-2 py-1 text-sm w-full"
        rows={3}
      />

      <div className="flex justify-end gap-2 mt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 bg-gray-200 rounded text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-3 py-1 bg-green-600 text-white rounded text-sm"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
















// "use client";

// import { useAuth } from "@/contexts/AuthContext";
// import { addAppointmentReview } from "@/lib/firebase/appointments/write";
// import { createReview } from "@/lib/firebase/reviews/write";
// import { Star } from "lucide-react";
// import { useState } from "react";
// import toast from "react-hot-toast";

// export default function ReviewForm({ physioId, appointmentId, onSuccess }) {
//   const { user } = useAuth();
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       toast.error("You must be logged in to leave a review");
//       return;
//     }

//     if (!rating) {
//       toast.error("Please select a rating");
//       return;
//     }
//     if (!comment) {
//       toast.error("Please write a comment");
//       return;
//     }

//     try {
//       setLoading(true);
//       await createReview({
//         physioId,
//         patientId: user?.uid,
//         patientName: user?.displayName,
//         // Add other relevant fields like appointmentId, rating, and comment
//         rating,
//         comment,
//       });
//      //  await addAppointmentReview({
//      //    physioId,
//      //    patientId: user?.uid,
//      //    appointmentId,
//      //    rating,
//      //    comment,
//      //  });
//       toast.success("Review added successfully");
//       onSuccess?.();
//       setRating(0);
//       setComment("");
//     } catch (error) {
//       toast.error("Failed to submit review", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-6 bg-white rounded-xl shadow-lg space-y-6 max-w-xl mx-auto border border-gray-100"
//     >
//       <div className="space-y-2">
//         <h3 className="text-xl font-semibold text-gray-800">Leave a Review</h3>
//         <p className="text-sm text-gray-500">Share your experience with us</p>
//       </div>

//       {/* Rating Stars */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-700">Rating</label>
//         <div className="flex gap-3">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <Star
//               key={star}
//               className={`w-8 h-8 cursor-pointer transition-all duration-200 hover:scale-110 ${
//                 star <= rating
//                   ? "text-yellow-400 fill-yellow-400"
//                   : "text-gray-300 hover:text-yellow-200"
//               }`}
//               onClick={() => setRating(star)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Comment */}
//       <div className="space-y-2">
//         <label htmlFor="comment" className="text-sm font-medium text-gray-700">
//           Your Feedback
//         </label>
//         <textarea
//           id="comment"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Tell us about your experience..."
//           className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#35B6B4] focus:border-transparent transition-all duration-200"
//           rows={4}
//         />
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-[#35B6B4] text-white px-6 py-3 rounded-lg font-medium 
//     hover:bg-[#2a9391] disabled:opacity-50 disabled:cursor-not-allowed
//     transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
//     focus:outline-none focus:ring-2 focus:ring-[#35B6B4] focus:ring-offset-2"
//       >
//         {loading ? (
//           <span className="flex items-center justify-center gap-2">
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 fill="none"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               />
//             </svg>
//             Submitting...
//           </span>
//         ) : (
//           "Submit Review"
//         )}
//       </button>
//     </form>
//   );
// }
